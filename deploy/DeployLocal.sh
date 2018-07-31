#!/bin/bash
set -e

### Configuration ###

SERVER=farid@192.168.0.88
APP_DIR=/var/www/justadit
KEYFILE=
REMOTE_SCRIPT_PATH=Local.sh
BUILD_PATH = ../.meteor/local/deploy/


### Library ###

function run()
{
  echo "Running: $@"
  "$@"
}


### Automation steps ###

if [[ "$KEYFILE" != "" ]]; then
  KEYARG="-i $KEYFILE"
else
  KEYARG=
fi

echo ' Deploying build to 192.168.0.88 '
#run rm -Rf ../Builds/

# scp -r ../Builds/deploy/bundle/ farid@192.168.0.88:/var/www/justadit
run scp -r $KEYARG $BUILD_PATH $SERVER:$APP_DIR
run scp -r $KEYARG Local.sh $SERVER:$APP_DIR/
#
echo
echo "---- Running deployment script on remote server ----"
run ssh $KEYARG $SERVER sudo bash $SERVER:$APP_DIRLocal.sh

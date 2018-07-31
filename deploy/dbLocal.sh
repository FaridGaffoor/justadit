#!/bin/bash
set -e

### Configuration ###

SERVER=justaduser@192.168.0.88
APP_DIR=/var/www/justadit
KEYFILE=
REMOTE_SCRIPT_PATH=/WorkLocal.sh
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

echo ' Removing previous builds'
run rm -Rf $BUILD_PATH

if [[ `meteor --version` =~ "Meteor 1.4."* ]]; then
  run meteor build --server-only --architecture os.linux.x86_64 --directory ../Builds/deploy/
  
else
  run meteor build --server-only --architecture os.linux.x86_64 --directory ../Builds/deploy/
fi
run scp -r $KEYARG $BUILD_PATH $SERVER:$APP_DIR/
run scp -r $KEYARG deploy/WorkLocal.sh $SERVER:$APP_DIR/
#
echo
echo "---- Running deployment script on remote server ----"
run ssh $KEYARG $SERVER bash $SERVER:$APP_DIR/WorkLocal.sh

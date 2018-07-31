#!/bin/bash
set -e

### Configuration ###

SERVER=farid@144.76.68.227
APP_DIR=/var/www/justadit
KEYFILE=
REMOTE_SCRIPT_PATH=/Local.sh


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
run rm -Rf ../Builds/

if [[ `meteor --version` =~ "Meteor 1.4."* ]]; then
  run meteor build ../Builds/deploy/package.tar.gz --server-only --mobile-server 144.76.68.227  --architecture os.linux.x86_64
  
else
  run meteor build ../Builds/deploy/package.tar.gz --server-only --mobile-server 144.76.68.227  --architecture os.linux.x86_64
fi
# scp -r ../Builds/deploy/bundle/ farid@144.76.68.227:/var/www/justadit
run scp -r $KEYARG ../Builds/deploy/ $SERVER:$APP_DIR/
#run scp -r $KEYARG deploy/WorkLocal.sh $SERVER:$APP_DIR/
#
echo
echo "---- Running deployment script on remote server ----"
run ssh $KEYARG $SERVER bash $SERVER:$APP_DIR/Local.sh

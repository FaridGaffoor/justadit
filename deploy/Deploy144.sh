#!/bin/bash
set -e

### Configuration ###

SERVER=farid@144.76.68.227 
APP_DIR=/home/farid/www/justadit
KEYFILE=
REMOTE_SCRIPT_PATH=/Worklocal.sh

BUILD_PATH = "../../../../../Projects/Deployments/JustAdit/"


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


echo "Cleaning build folder"
run rm -rf  ../../Builds
#meteor build ../Builds/deploy/package.tar.gz --server-only --architecture os.linux.x86_64
if [[ `meteor --version` =~ "Meteor 1.4."* ]]; then
  run meteor build $BUILD_PATH --server-only --architecture os.linux.x86_64 
  
else
  run meteor build $BUILD_PATH --server-only --architecture os.linux.x86_64  
fi
run scp -P 21313 -r   $KEYARG $BUILD_PATH $SERVER:$APP_DIR/
run scp -P 21313 $KEYARG deploy/WorkLocal.sh $SERVER:$APP_DIR/
echo
echo "---- Running deployment script on remote server ----"
run ssh $KEYARG $SERVER bash  $SERVER:$APP_DIR/WorkLocal.sh

#!/bin/bash
set -e

### Configuration ###

SERVER=justaduser@192.168.56.101
APP_DIR=/var/www/justadit/
KEYFILE=
REMOTE_SCRIPT_PATH=/var/www/justadit/Local.sh


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

if [[ `meteor --version` =~ "Meteor 1.4."* ]]; then
#  run meteor build --server-only --architecture os.linux.x86_64 --directory ../Builds/deploy/
  
else
#  run meteor bundle package.tar.gz
fi
run scp $KEYARG ../Builds/deploy/ $SERVER:$APP_DIR/
run scp $KEYARG ../Builds/deploy/Local.sh $SERVER:$REMOTE_SCRIPT_PATH
echo
echo "---- Running deployment script on remote server ----"
run ssh $KEYARG $SERVER bash $REMOTE_SCRIPT_PATH

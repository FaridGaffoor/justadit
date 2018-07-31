#!/bin/bash
set -e

### Configuration ###



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
run rm -Rf ../.meteor/local/deploy/

echo ' Building new package '

  run meteor build ../.meteor/local/deploy/ --server-only --architecture os.linux.x86_64

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
run rm -Rf ../Builds/

echo ' Building new package '

  run meteor build ../Builds/deploy/ --server=justadit.co.za  --architecture os.linux.x86_64

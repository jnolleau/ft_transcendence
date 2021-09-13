#! /bin/bash

if [ $# -ge 1 ] && ([[ "$1" = 'mod' ]]);
then
    rm -rf backend/node_modules
    rm -rf frontend/node_modules
fi
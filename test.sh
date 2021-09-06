#!/usr/bin/bash

test() {
    if [ $1 -eq 5 ]
    then
        x=$(ls) 
        echo "Done"
    fi
}

# Frontend - Challenge

This challenge was made for setting up a framework for testing Login and Register and account in C&A site in Spain

## NOTE

Because of the amount of time, not everything is done.
Current status bellow:

Setup environment - Done.

Setup Framework - Done.

Register Account spec file and testing - Done.

Login spec file and testing - Ongoing.

URL fix to get from the baseConfig - to do.

Fix data issue to a json file - to do.


## OBS
CURRENT THE EXECUTION WILL WORK ONLY IN THE FIRST RUN!

There is a file called InfoData. On this file is the data for the test, is like a enum and not yet as a json file. For this reason, the data is set manually. Right now, to the second run works, it is necessary to change the email!

Give the name you want, just make sure is unique and never used before. 

## Usage

    # clone the repository
    git clone https://github.com/LDLima/Frontend-challenge.git

    # install dependencies
    npm install

    # execute register spec file
    npx wdio ./config/localConfigs/web-config.ts --spec ./test/specs/register-spec.ts
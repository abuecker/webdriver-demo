[![wercker status](https://app.wercker.com/status/cf11bce50975ae3c7e6004837b2b35e9/s/master "wercker status")](https://app.wercker.com/project/bykey/cf11bce50975ae3c7e6004837b2b35e9)

# Tests

Tests can be found in [./test/demo.js](./test/demo.js)

Selenium/Webdriver configuration is [./wdio.conf.js](./wdio.conf.js)

# Installation

## Install Node.js

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash &&
. ~/.nvm/nvm.sh
nvm install iojs-2.3.3
nvm use iojs-2.3.3
```

## Install the Dependencies

```
npm install
```

## Set Environment Variables

Specify the url, username and password for the QA environment.

```
export TZ_URL=<http://path/to/qa:box>
export TZ_UNAME=<username>
export TZ_PWD=<pwd>
```

## Run the tests

```
npm test
```

# Wercker

Wercker build configuration is [./wercker.yml](./wercker.yml)

Local wercker build command:

```
wercker --environment .envrc build --attach-on-error
```

`.envrc` is a [direnv](http://direnv.net/) compatible file that contains the
environment variables above to pass into the build container:

```
export TZ_URL=<http://path/to/qa:box>
export TZ_UNAME=<username>
export TZ_PWD=<pwd>

# envvars in local wercker builds need to be prefaced with 'X_'
export X_TZ_URL=$TZ_URL
export X_TZ_UNAME=$TZ_UNAME
export X_TZ_PWD=$TZ_PWD
```

Taking the first step
You’ll need Node.js installed.

# Install at least v12.16.1 or higher as this is the oldest active LTS version

Only releases that are or will become an LTS release are officially supported
If you don't have Node installed, we recommend installing NVM to assist managing multiple active Node.js versions.

# Now, install the dependencies:

``` $ npm install```

# Start the Testrunner
## Now, time to run your tests!

### To do so, just run:

``` $ npm run test ```

## To run using docker 

You have to replace service from wdio.conf.js to [docker]

We have configured docker-compose file, after these please run:

``` $ docker-compose up -d```

``` $ npm run test```

// Karma configuration
// Generated on Thu Aug 01 2013 16:28:29 GMT-0700 (PDT)


// base path, that will be used to resolve files and exclude
basePath = '';


frameworks = ['jasmine', 'requirejs'];

// list of files / patterns to load in the browser
files = [
  //MOCHA,
  //MOCHA_ADAPTER,
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  {pattern: 'node_modules/chai/chai.js', included: false},
  {pattern: 'src/**/*.js', included: false},
  {pattern: 'vendor/**/*.js', included: false},
  {pattern: 'test/**/*Tests.js', included: false},
  'test/test-main.js'
];


// list of files to exclude
exclude = [
  '**/*.swp'
];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'junit'];

junitReporter = {
  // will be resolved to basePath (in the same way as files/exclude patterns)
    outputFile: 'target/test-results.xml'
};

// web server port
port = 8765;

// cli runner port
runnerPort = 8100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;

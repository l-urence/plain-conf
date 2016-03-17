'use strict';

var chai = require('chai');
var mocha = require('mocha');

var after = mocha.after;
var describe = mocha.describe;
var it = mocha.it;
var before = mocha.before;
var expect = chai.expect;

function clearRequireCache() {
  delete require.cache[require.resolve('../')];
}

describe('check no NODE_ENV set', function() {
  it('isDebug and __DEV__ musst be true in no environment', function() {
    var debug = require('../').isDebug;
    var __DEV__ = require('../').__DEV__;
    expect(debug && __DEV__).to.equal(true);
  });

  it('Configuration should be the development config file', function() {
    var config = require('../');
    expect(config.StarWars.movies[0]).to.equal('Star Wars');
  });

  after(clearRequireCache);
});

describe('Check development mode NODE_ENV !== "production"', function() {
  before(function() {
    process.env.NODE_ENV = 'development';
  });

  after(clearRequireCache);

  it('isDebug and __DEV__ musst be true in dev environment', function() {
    var debug = require('../').isDebug;
    var __DEV__ = require('../').__DEV__;
    expect(debug && __DEV__).to.equal(true);
  });

  it('Configuration should be the development config file', function() {
    var config = require('../');
    expect(config.StarWars.movies[6]).to.equal('The Force Awakens');
  });
});

describe('Check production mode NODE_ENV === "production"', function() {
  before(function() {
    process.env.NODE_ENV = 'production';
  });

  after(clearRequireCache);

  it('isDebug and __DEV__ musst be false in production environment',
    function() {
      var debug = require('../').isDebug;
      var __DEV__ = require('../').__DEV__;
      expect(debug || __DEV__).to.equal(false);
    }
  );

  it('Configuration should be the production config file', function() {
    var config = require('../');
    expect(config.StarWars.characters[0]).to.equal('Han Solo');
  });
});

describe('Check for NODE_ENV === "test"', function() {
  before(function() {
    process.env.NODE_ENV = 'test';
  });

  after(clearRequireCache);

  it('isDebug and __DEV__ musst be true in test environment', function() {
    var debug = require('../').isDebug;
    var __DEV__ = require('../').__DEV__;
    expect(debug && __DEV__).to.equal(true);
  });

  it('Configuration should be the test config file', function() {
    var config = require('../');
    expect(config.StarWars.planets[2]).to.equal('Jakku');
  });
});

describe('require(plain-conf).config', function() {
  before(function() {
    process.env.NODE_ENV = 'test';
  });

  after(clearRequireCache);

  it('should be depreciated', function() {
    var config = require('../').config;
  });
});

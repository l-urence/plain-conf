'use strict';

const chai = require('chai');
const mocha = require('mocha');

const after = mocha.after;
const describe = mocha.describe;
const it = mocha.it;
const before = mocha.before;
const expect = chai.expect;

function clearRequireCache() {
  delete require.cache[require.resolve('../')];
}

describe('check no NODE_ENV set', function() {
  it('isDebug musst be true in no environment', function() {
    const debug = require('../').isDebug;
    expect(debug).to.equal(true);
  });

  it('Configuration should be the development config file', function() {
    const config = require('../').config;
    expect(config.StarWars.movies[0]).to.equal('Star Wars');
  });

  after(clearRequireCache);
});

describe('Check development mode NODE_ENV !== "production"', function() {
  before(function() {
    process.env.NODE_ENV = 'development';
  });

  after(clearRequireCache);

  it('isDebug musst be true in development environment', function() {
    const debug = require('../').isDebug;
    expect(debug).to.equal(true);
  });

  it('Configuration should be the development config file', function() {
    const config = require('../').config;
    expect(config.StarWars.movies[6]).to.equal('The Force Awakens');
  });
});

describe('Check production mode NODE_ENV === "production"', function() {
  before(function() {
    process.env.NODE_ENV = 'production';
  });

  after(clearRequireCache);

  it('isDebug musst be false in production environment', function() {
    const debug = require('../').isDebug;
    expect(debug).to.equal(false);
  });

  it('Configuration should be the production config file', function() {
    const config = require('../').config;
    expect(config.StarWars.characters[0]).to.equal('Han Solo');
  });
});

describe('Check for NODE_ENV === "test"', function() {
  before(function() {
    process.env.NODE_ENV = 'test';
  });

  after(clearRequireCache);

  it('isDebug musst be true in test environment', function() {
    const debug = require('../').isDebug;
    expect(debug).to.equal(true);
  });

  it('Configuration should be the test config file', function() {
    const config = require('../').config;
    expect(config.StarWars.planets[2]).to.equal('Jakku');
  });
});

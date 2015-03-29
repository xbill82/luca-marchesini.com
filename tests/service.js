var should = require('should'); 
var request = require('supertest');
var moment = require('moment');
var _ = require('underscore');
var fs = require('fs');
var colors = require('colors/safe');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

try {
	var configFile = fs.readFileSync(__dirname + '/config.json');
} catch (e) {
	console.log(colors.error("You don't seem to have any config.json file in the tests directory, do you?"))
	return;
}

var config = JSON.parse(configFile);

if (_.isUndefined(config.baseUrl)) {
	console.log(colors.error("Couldn't find any baseUrl attribute in your config file. Aborting."));
	return;
}

var url = config.baseUrl;

var LIMIT = 2;

var gigIsOld = function(gig) {
	var dateTime = gig.date;

	if (gig.time)
		dateTime += " " + gig.time;

	var gigDate = moment(dateTime);
	var now = new Date();

	return (gigDate.isBefore(now));
};

describe('GET /gigs.php', function() {
	it('Should return a list of gigs grouped by upcoming and old.', function(done) {
		request(url)
			.get('/gigs.php')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err)
					throw err;
				res.statusCode.should.equal(200, "Gig list is retrieved successfully.");
				res.body.should.have.property('upcoming');
				res.body.should.have.property('old');
				done();
			});
	});
});

describe('GET /gigs.php?filter=old', function() {
	it('Should return a non-empty list of old gigs', function(done) {
		request(url)
			.get('/gigs.php?filter=old')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err)
					throw err;
				res.statusCode.should.equal(200, "Gig list is retrieved successfully.");
				res.body.should.be.type('object');
				res.body.length.should.be.above(0, "List is not empty.");

				for (var i = res.body.length - 1; i >= 0; i--) {
					gigIsOld(res.body[i]).should.be.true;
				};

				done();
			});
	});
});

describe('GET /gigs.php?filter=old&limit=' + LIMIT, function() {
	it('Should return a list of ' + LIMIT + ' old gigs', function(done) {
		request(url)
			.get('/gigs.php?filter=old&limit=' + LIMIT)
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err)
					throw err;
				res.statusCode.should.equal(200, "Gig list is retrieved successfully.");
				res.body.should.be.type('object');
				res.body.length.should.be.above(0, "List is not empty.");
				res.body.length.should.not.be.above(LIMIT, "Limit works.");

				for (var i = res.body.length - 1; i >= 0; i--) {
					gigIsOld(res.body[i]).should.be.true;
				};

				done();
			});
	});
});

describe('GET /gigs.php?filter=some', function() {
	it('Should return a non-empty list of gigs.', function(done) {
		request(url)
			.get('/gigs.php?filter=some')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err)
					throw err;
				res.statusCode.should.equal(200, "Gig list is retrieved successfully.");
				res.body.should.be.type('object');
				res.body.length.should.be.above(0);
				done();
			});
	});
});

describe('GET /gigs.php?filter=some&limit=' + LIMIT, function() {
	it('Should return a list of ' + LIMIT + ' gigs.', function(done) {
		request(url)
			.get('/gigs.php?filter=some&limit=' + LIMIT)
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err)
					throw err;
				res.statusCode.should.equal(200, "Gig list is retrieved successfully.");
				res.body.should.be.type('object');
				res.body.length.should.not.be.above(LIMIT, "Limit works.");
				res.body.length.should.be.above(0, "List is not empty.");
				done();
			});
	});
});

describe('GET /gigs.php?filter=upcoming', function() {
	it('Should return a list of upcoming gigs', function(done) {
		request(url)
			.get('/gigs.php?filter=upcoming')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err)
					throw err;
				res.statusCode.should.equal(200, "Gig list is retrieved successfully.");
				res.body.should.be.type('object');

				for (var i = res.body.length - 1; i >= 0; i--) {
					gigIsOld(res.body[i]).should.be.false;
				};

				done();
			});
	});
});

describe('GET /gigs.php?filter=upcoming&limit=' + LIMIT, function() {
	it('Should return a list of ' + LIMIT + ' upcoming gigs', function(done) {
		request(url)
			.get('/gigs.php?filter=upcoming&limit=' + LIMIT)
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err)
					throw err;
				res.statusCode.should.equal(200, "Gig list is retrieved successfully.");
				res.body.should.be.type('object');
				res.body.length.should.not.be.above(LIMIT, "Limit works.");

				for (var i = res.body.length - 1; i >= 0; i--) {
					gigIsOld(res.body[i]).should.be.false;
				};

				done();
			});
	});
});
var should = require('should'); 
var request = require('supertest');  

var url = 'localhost:8888/luca-marchesini.com/web-dev/API/';
// var url = 'sandbox/luca-marchesini.com/web-dev/API/';

var LIMIT = 2;

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
	it('Should return a non-empty list of old gigs.', function(done) {
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
					var gigDate = moment(res.body[i].date + " " + res.body[i].time);
					var now = moment();

					(gigDate.isBefore(now)).should.be.true();

				};

				done();
			});
	});
});

describe('GET /gigs.php?filter=old&limit=' + LIMIT, function() {
	it('Should return a list of ' + LIMIT + ' old gigs.', function(done) {
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
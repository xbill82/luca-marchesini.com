var should = require('should'); 
var request = require('supertest');  

var url = 'sandbox/luca-marchesini.com/web-dev/API/';

describe('GET /gigs.php', function() {
	it('Should return a list of gigs grouped by upcoming and old', function(done) {
		request(url)
			.get('/gigs.php')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err)
					throw err;
				res.status.should.equal(200, "Gig list is retrieved successfully.");
				res.body.length.should.not.equal(0, "Gig list is not empty.");
				done();
			});
		});
	});

// describe('GET /articles/1', function() {
// 	var idArticle = 1;
// 	it('Should return an article', function(done) {
// 		request(url)
// 			.get('/articles/' + idArticle)
// 			.expect('Content-Type', /json/)
// 			.expect(200)
// 			.end(function(err, res) {
// 				if (err)
// 					throw err;
// 				res.status.should.equal(200,"no error code for get list");
// 				res.body.should.have.property("id",idArticle," article id is ok ");
// 				done();
// 			});
// 		});
// 	});

// describe('GET /folders', function() {
// 		it('Should return a list of folders', function(done) {
// 			request(url)
// 				.get('/folders')
// 				.expect('Content-Type', /json/)
// 				.expect(200)
// 				.end(function(err, res) {
// 					if (err)
// 						throw err;
// 					res.status.should.equal(200,"no error code for get list");
// 					res.body.length.should.not.equal(0,"we found some folders");
// 					done();
// 			});
// 		});
// 	});

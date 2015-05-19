var config = require('./config.js');

casper.test.begin("Navbar test", 9, function(test) {
	test.assertType(config.baseUrl, 'string', 'baseUrl is present in config');

	casper.start(config.baseUrl, function() {
		test.assertEquals(casper.getCurrentUrl(), config.baseUrl, "Url is OK");
		test.assertHttpStatus(200);

		//wait until backbone+marionette do thieir job on page
		casper.waitForSelector("nav .navbar-brand img",  function() {
			//change the viewport to desktop size
			casper.viewport(1680, 1024);

			test.assertVisible('nav .navbar', "[Desktop] Navbar is visible");
			test.assertVisible('nav .navbar-brand img', "[Desktop] Navbar logo is visible");
			test.assertVisible('nav .navbar-nav', "[Desktop] Navbar menu is visible");
			test.assertNotVisible('nav button .navbar-toggle', "[Desktop] Navbar collapse button is not visible");

			test.assertElementCount('nav .navbar ul', 2, 'Found 2 ul elements in navbar');
			test.assertElementCount('nav .navbar li', 10, 'Found 10 ul elements in navbar');
		}).then(function() {
			casper.captureSelector('tests/screenshots/navbar/desktop.png', 'nav .navbar');
      	}).then(function() {
      		casper.viewport(568, 568);

			test.assertVisible('nav .navbar-brand img', "[Mobile] Navbar logo is visible");
			test.assertVisible('nav button .navbar-toggle', "[Mobile] Navbar collapse button is visible");
			test.assertNotVisible('nav .navbar-nav', "[Mobile] Navbar menu is not visible");
      	}).then(function() {
			casper.captureSelector('tests/screenshots/navbar/mobile.png', 'nav .navbar');
      	});
	}).run(function() {
        test.done();
        phantom.exit();
    });
});
require(["jquery", "App", "routers/AppRouter", "controllers/Controller", "controllers/GoogleAnalyticsController",
	"bs-button", "bs-collapse", "bs-dropdown", "bs-modal", "bs-transition"],
function ($, App, AppRouter, Controller, GoogleAnalyticsController) {
    App.analytics = new GoogleAnalyticsController('UA-56607741-1');

    App.appRouter = new AppRouter({
        controller:new Controller()
    });

    App.start();
});
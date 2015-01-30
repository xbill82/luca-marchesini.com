require(["jquery", "App", "routers/AppRouter", "controllers/Controller", "controllers/GoogleAnalyticsController",
	"bs-button", "bs-collapse", "bs-dropdown", "bs-modal", "bs-transition"],
function ($, App, AppRouter, Controller, GoogleAnalyticsController) {
    App.analytics = new GoogleAnalyticsController();

    App.appRouter = new AppRouter({
        controller:new Controller()
    });

    App.start();
});
require(["jquery", "App", "routers/AppRouter", "controllers/Controller", "controllers/PiwikController",
	"bs-button", "bs-collapse", "bs-dropdown", "bs-modal", "bs-transition"],
function ($, App, AppRouter, Controller, PiwikController) {
    App.piwikController = new PiwikController();

    App.appRouter = new AppRouter({
        controller:new Controller()
    });

    App.start();
});
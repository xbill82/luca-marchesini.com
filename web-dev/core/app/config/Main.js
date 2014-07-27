require(["jquery", "App", "routers/AppRouter", "controllers/Controller",
	"bs-button", "bs-collapse", "bs-dropdown", "bs-modal", "bs-transition"],
function ($, App, AppRouter, Controller) {
    App.appRouter = new AppRouter({
        controller:new Controller()
    });
    App.start();
});
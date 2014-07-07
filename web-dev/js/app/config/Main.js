require(["jquery", "bootstrap", "App", "routers/AppRouter", "controllers/Controller"],
function ($, bootstrap, App, AppRouter, Controller) {
    App.appRouter = new AppRouter({
        controller:new Controller()
    });
    App.start();
});
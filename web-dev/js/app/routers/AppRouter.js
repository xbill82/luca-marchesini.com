define(['marionette', 'controllers/Controller'], function(Marionette, Controller) {
   return Marionette.AppRouter.extend({
       appRoutes: {
           "": "home",
           "shows": "home",
           "show/(:name)": "show",
           "calendar": "calendar",
           "guestbook": "guestbook",
           "(:anything)": "notFound"
       }
   });
});

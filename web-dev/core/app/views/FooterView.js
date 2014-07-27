define([ 'marionette', 'handlebars', 'lazyloader'],
    function (Marionette, Handlebars) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend({
            template: Handlebars.compile($('#t-footer').html()),

            ui: {
                contact: '.contact'
            },

            onRender: function(e) {
                var tContact = Handlebars.compile($('#t-contact-info').html());
                this.ui.contact.append(tContact());

                this.$el.find('img.lazy').lazyload({
                    effect : "fadeIn"
                });
            }
        });
    });

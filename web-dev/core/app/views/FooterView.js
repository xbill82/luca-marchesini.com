define([ 'marionette', 'handlebars', 'text!templates/footer.html',
    'text!templates/contact-info.html', 'lazyloader'],
    function (Marionette, Handlebars, template, contactTemplate) {
        return Marionette.ItemView.extend({
            template: Handlebars.compile(template),

            ui: {
                contact: '.contact'
            },

            onRender: function(e) {
                var tContact = Handlebars.compile(contactTemplate);
                this.ui.contact.append(tContact());

                this.$el.find('img.lazy').lazyload({
                    effect : "fadeIn"
                });
            }
        });
    });

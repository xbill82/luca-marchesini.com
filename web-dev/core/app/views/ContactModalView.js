define([ 'marionette', 'handlebars', 'text!templates/contact-modal.html',
    'text!templates/contact-info.html'],
    function (Marionette, Handlebars, template, contactInfoTemplate) {
        return Marionette.ItemView.extend({
            template: Handlebars.compile(template),

            ui: {
                body: '.modal-body'
            },

            onRender: function(e) {
                var tContact = Handlebars.compile(contactInfoTemplate);
                this.ui.body.append(tContact());
            }
        });
    });

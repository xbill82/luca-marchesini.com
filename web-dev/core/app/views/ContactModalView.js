define([ 'marionette', 'handlebars'],
    function (Marionette, Handlebars) {
        return Marionette.ItemView.extend({
            template: Handlebars.compile($('#t-contact-modal').html()),

            ui: {
                body: '.modal-body'
            },

            onRender: function(e) {
                var tContact = Handlebars.compile($('#t-contact-info').html());
                this.ui.body.append(tContact());
            }
        });
    });

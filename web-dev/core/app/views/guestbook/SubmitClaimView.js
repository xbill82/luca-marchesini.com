define([ 'marionette', 'handlebars', 'text!./templates/submit-claim.html'],
    function (Marionette, Handlebars, template) {
        return Marionette.ItemView.extend({
            template: Handlebars.compile(template),
            tagName: 'div',
            className: 'modal-dialog modal-lg',
            
            ui: {
            	txt: 'textarea',
            	charCount: '.char-countdown-nb'
            },

            onShow: function(e) {
            	// this.ui.txt.limiter(160, this.ui.charCount);
            }
        });
    });

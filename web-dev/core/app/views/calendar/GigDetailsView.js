define([ 'marionette', 'handlebars', 'App'],
    function (Marionette, Handlebars, App) {
        return Marionette.ItemView.extend({
            template: Handlebars.compile($('#t-gig-extended').html()),
            
            ui: {
            	map: '.gig-map'
            },

            events: {
                'click .show-name-a': 'onTitleClicked'
            },

            onRender: function(e) {},

            onModalOpen: function(e) {
                App.execute('trackPageView', 'Gig (' + this.model.get('title') +
                    ', ' + this.model.get('date') +')');

                if (!this.model.get('address'))
                    return;

                var that = this;

                require(['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCvNxqLj-NNJXxdYzp-BcAfbToEruhMzjI&sensor=false!callback'], function(){
                	var mapOptions = {
                		center: new google.maps.LatLng(
                            that.model.get('lat'), that.model.get('lng')
                        ),
              			zoom: parseInt(that.model.get('z'))
                	};

                	that.map = new google.maps.Map(that.ui.map[0], mapOptions);
                    var marker = new google.maps.Marker({
                        position: mapOptions.center,
                        map: that.map,
                        title:"C'est ici!"
                    });
                });
            },

            onTitleClicked: function(e) {
                App.execute('gig:close');
            }
        });
    });

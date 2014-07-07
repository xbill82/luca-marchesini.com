define(['handlebars', 'underscore', 'moment', 'moment-fr'], /*'js/vendor/datejs/build/production/date-fr-FR.min.js'*/
	function(Handlebars, _, Moment) {
		Handlebars.registerHelper('formattedDate', function(date) {
			if (!date)
				return;

			// var d = Date.parse(date);
			// Date.i18n.setLanguage('fr-FR');
			// return d.toString('dddd d MMMM yyyy');
			Moment.lang('fr');
			return Moment(date).format('dddd D MMMM YYYY');
		});

		Handlebars.registerHelper('formattedTime', function(time) {
			if (!time)
				return;

			Moment.lang('fr');
			time = "2013-02-08 "+time;
			if (Moment(time).isValid())
				return Moment(time).format('LT');
			else
				return time;
		});
        
        Handlebars.registerHelper('titleize', function(value) {
            return _.string.titleize(value);
        });

        /**
		* {{if_eq}}
		*
		* @author: Dan Harper <http://github.com/danharper>
		*
		* @param  {[type]} context [description]
		* @param  {[type]} options [description]
		* @return {[type]}         [description]
		*
		* @example: {{if_eq this compare=that}}
		*/
		Handlebars.registerHelper('if_eq', function (context, options) {
			if (context === options.hash.compare) {
			  return options.fn(this);
			}
			return options.inverse(this);
		});

        /**
         * Or
         * Conditionally render a block if one of the values is truthy.
         */
        Handlebars.registerHelper('or', function (a, b, options) {
            if (a || b) {
              return options.fn(this);
            } else {
              return options.inverse(this);
            }
        });


        Handlebars.registerHelper('and', function (a, b, options) {
            if (a && b) {
              return options.fn(this);
            } else {
              return options.inverse(this);
            }
        });

		/**
		* {{first}}
		* Returns the first item in a collection.
		*
		* @param  {Array}  array
		* @param  {[type]} count
		* @return {[type]}
		*/
		Handlebars.registerHelper('first', function (array, count) {
			if (_.isUndefined(count)) {
				return array[0];
			} else {
				return array.slice(0, count);
			}
		});
		/**
		* Returns the last item in a collection. Opposite of `first`.
		* @param  {Array}  array [description]
		* @param  {[type]} count [description]
		* @return {[type]}       [description]
		*/
		Handlebars.registerHelper('last', function (array, count) {
			if (_.isUndefined(count)) {
				return array[array.length - 1];
			} else {
				return array.slice(-count);
		}
		});
	}
);

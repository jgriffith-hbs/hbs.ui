
    
HBS.UI.addModule('framework', function(context) {

    var require = context.getGlobal('require');
    var $ = context.getGlobal('jQuery');

    return {
        init: function() {
            
            var libs = ['https://secure.hbs.edu/static/shared/js/framework.js']
                        //'css!https://secure.hbs.edu/static/shared/css/framework.css'];

            require(libs,function(){

                var frameworkClasses = 'grid-framework type-framework color-framework type-framework pattern-framework component-framework js-framework responsive-framework';
                $(context.element).addClass(frameworkClasses);
                $(document).trigger('framework.domupdate');
            });

        }
    };

});


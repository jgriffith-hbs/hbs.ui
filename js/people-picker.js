var HBS = HBS || {
    UI: Box.Application
};
    
HBS.UI.addModule('people-picker', function(context) {

    var require = context.getGlobal('require');
    var $ = context.getGlobal('jQuery');
    
    return {
        init: function() {

            var config = context.getConfig();
            var autocomplete = null;
            if (config && config.autocomplete) autocomplete = eval(config.autocomplete);

            var libs = ['https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.js',
                        'css!https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.css'
            ]

            require(libs, function() {
                $("select", context.element).each(function() {
                    var el = this;


                    $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], function(ArrayData, Utils) {
                        function CustomData($element, options) {
                            CustomData.__super__.constructor.call(this, $element, options);
                        }

                        Utils.Extend(CustomData, ArrayData);

                        CustomData.prototype.query = function(params, callback) {
                            var data = {results:[]};
                            console.info(params);

                            autocomplete(params.term, function(results) {
                                for (var i = 0; i < results.length; i++) {

                                    data.results.push({
                                        id: results[i].id,
                                        text: results[i].text
                                    });
                                }
                                console.info(data)

                                callback(data);
                            })
                        };

                        var options = {};
                        if (autocomplete) options.dataAdapter = CustomData;
                        $(el).select2(options);

                    })

                });
            })
        }
    };

});


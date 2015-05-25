     
HBS.UI.addModule('hello-ember', function(context) {
    var require = context.getGlobal('require');


    // Define libraries
    var myrequire = require.config({
        shim: {
            Ember: {
                deps: ['Handlebars'],
                exports: 'Ember'
            }
        },
        paths: {
            Ember: 'http://builds.emberjs.com/release/ember.debug',
            Handlebars: 'http://builds.emberjs.com/release/ember-template-compiler'
        }
    });



    function main(Ember){
        
        var App = Ember.Application.create();
        App.IndexView = Ember.View.extend({
          elementId: 'hello',
          templateName: 'index',
          name: "Albert"
        });

    }

    return {

        messages: [ 'greetingchanged' ],

        onmessage: function(name,data) {
            if (name == 'greetingchanged' && Ember && Ember.View) Ember.View.views.hello.set('name',data);
        },

        init: function() {
            var libs = ['Ember'];
            require(libs,function(){ 
                main(Ember);
            });
        }
    };

});


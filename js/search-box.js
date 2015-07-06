
    
HBS.UI.addModule('search-box', function(context) {

    var require = context.getGlobal('require');
    var $ = context.getGlobal('jQuery');

    function main(context){
        var $html = $(context.element);
        $html.on('focus','input',function(){
            $html.addClass('focused');
        });
        $html.on('blur','input',function(){
            $html.removeClass('focused');
        });
    }

    return {
        init: function() {
            main(context);
        }
    };

});



/*


    
HBS.UI.addModule('search-box', function(context) {

    var require = context.getGlobal('require');
    var $ = context.getGlobal('jQuery');

    var Contact = {
        view: function() {
            return m("div", [
                m("h2", "Contact")
            ])
        }
    }

    var SearchBox = {

        controller: function(args){
            return {
                        focus: function(e){
                            console.info('focused',this,e,self,m("input"));
                        },
                        blur: function(e){
                            $(m(".")).removeClass('focused')
                           console.info('blurred',this,e,self);  
                        }
                   };
        },

        view: function(ctrl){
            return m('div',{class: "search-box"} ,[
                   m("a[href='/contact']", {config: m.route}, "Contact"),
                   m('input',{type:'text',name:'search-box-q',onfocus:ctrl.focus,onblur:ctrl.blur},'Click Me')
                ]);
        }
    };



    return {
        init: function() {

            var libs = ['https://cdnjs.cloudflare.com/ajax/libs/mithril/0.2.0/mithril.js'];

            require(libs,function(m){
                m.route(context.element, "/", {
                    "/": SearchBox,
                    "/contact": Contact
                })
            });

            $(context.element).append();

        }
    };

});


*/
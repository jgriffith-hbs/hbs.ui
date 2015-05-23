
    
HBS.UI.addModule('react-hello', function(context) {

    var require = context.getGlobal('require');

    return {
        init: function() {
            
            libs = ['https://fb.me/react-0.13.3.min.js'];
            require(libs,function(React){
                React.render(
                    <h1>Hello World</h1>,
                    context.element
                );
            })

        }
    };

});


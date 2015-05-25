     
HBS.UI.addModule('hello-react', function(context) {
    var require = context.getGlobal('require');
    var greeting = null;

    function main(React){
        
        var Greeting = React.createClass({
          getDefaultProps: function() {
            return {name: "Stranger"};
          },
          render: function() {
            return (
                <h2>
                  React Hello: {this.props.name}
                </h2>
            );
          }
        });

        greeting = React.render(
            React.createElement(Greeting),
            context.element
        );
    }

    return {
        messages: [ 'greetingchanged' ],

        onmessage: function(name,data) {
            if (name == 'greetingchanged' && greeting) greeting.setProps({ name: data });
        },

        init: function() {
            var libs = ['https://fb.me/react-0.13.3.min.js'];
            require(libs,function(React){ 
                main(React);
            });
        }
    };

});



    
HBS.UI.addModule('jwplayer', function(context) {

    var require = context.getGlobal('require');

    return {
        init: function() {
            
            var libs = ['https://jwpsrv.com/library/c4IOKvMwEeOUQyIAC0MJiQ.js'];
            require(libs,function(){
                jwplayer(context.element.id).setup({
                        stretching: "fill",
                        levels: [ {file: context.element.href} ],
                        aspectratio: "16:9",
                        width: "100%"
                });
            });

        }
    };
});


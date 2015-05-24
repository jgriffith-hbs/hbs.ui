
HBS.UI.addModule('wysiwyg', function(context) {

    var require = context.getGlobal('require');

    return {
        init: function() {
            
            var libs = ['https://tinymce.cachefly.net/4.0/tinymce.min.js'];

            require(libs,function(){
				tinymce.init({
				    selector: "#"+context.element.id,
				    inline: true,
				    menubar: false,
				    toolbar: "bold italic | bullist numlist outdent indent"
				});
            });

        }
    };

}); 

 
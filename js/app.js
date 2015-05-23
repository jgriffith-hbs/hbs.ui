
var requireui = require.config({
   paths: {
   	  jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
   	  css: 'https://secure.hbs.edu/static/js/css'
   }
})


requireui(['jquery'],function($){
	$(function(){
		HBS.UI.init({debug:true})
	})
})



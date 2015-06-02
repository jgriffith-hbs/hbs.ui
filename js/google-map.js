
HBS.UI.addModule('google-map', function(context) {

    var require = context.getGlobal('require');

    function main(){
        var map;

        var style = [
            {
                stylers: [
                    { saturation: "-100" },
                    { lightness: "20" }
                ]
                },{
                featureType: "poi",
                stylers: [
                    { visibility: "off" }
                ]
                },{
                featureType: "transit",
                stylers: [
                    { visibility: "off" }
                ]
                },{
                featureType: "road",
                stylers: [
                    { lightness: "50" },
                    { visibility: "off" }
                ]
                },{
                featureType: "landscape",
                stylers: [
                    { lightness: "50" }
                ]
            }
        ];

        var options = {
            zoom: 7,
            center:  new google.maps.LatLng(45.50867, -73.553992),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        
        map = new google.maps.Map($('#map')[0], options);
        map.setOptions({
            styles: style
        });    
    }

    return {
        init: function() {

            window['initialize'+context.element.id] = main;

            var libs = ['https://maps.googleapis.com/maps/api/js?&callback=initialize'+context.element.id];
            require(libs,function(){});

        }
    };

});


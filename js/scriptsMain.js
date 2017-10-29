var map;
var clickoff = 0;


function initMap() {
           
        var mapOptions = {
            
            // How zoomed in you want the map to start at (always required)
            zoom: 6,
            minZoom: 3,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(-40.9006, 172.50), // New York
            
            disableDefaultUI: true,

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        
            
};
    
map = new google.maps.Map(document.getElementById('map'), mapOptions);
        
        var southWest = new google.maps.LatLng(-41.25, 174.75);
        var northEast = new google.maps.LatLng(-41.34, 174.7762);
        var lngSpan = northEast.lng() - southWest.lng();
        var latSpan = northEast.lat() - southWest.lat();

        var markers = [];
        

        
        for (var i = 1; i < 8; i++) {

        var location = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

        var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: {
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    scale: 3,
                    strokeColor: '#86ef1e'
                },
            
        
            
        });
            
        //when a marker is clicked
        $("#signInMenu").hide();
        marker.addListener('click', function() {
            var zoom = map.getZoom();    
            map.panTo(this.getPosition());
                clickoff = 0;
            $("#prompt").animate({
                top: '0rem'
            },500, function(){
                $("#header").css('top','0rem')
                clickoff = 50;
            });               
            $("#signInMenu").fadeIn(500);
            $("#map").addClass("blur");
            
            if (zoom <= 12) {
                map.setZoom(15);
            }
        });    
        markers.push(marker);       
        }



};          


//JQuery
$(document).ready(function(){
        $("#map").click(function(){
            
            console.log(clickoff == 50);
            if (clickoff == 50) {
            $("#signInMenu").fadeOut(500);
            $("#header").animate({
                top: '0rem'
                },500, function(){
                    $("#header").css('top','0rem') 
                    clickoff = 0;
            });
            $("#map").removeClass("blur");
            };
        });
        $("#track").click(function(){
           window.location.replace("player.html");
        });
    
        $("#track").hover(function(){
        $(this).addClass("active");
    });
    $("#track").mouseleave(function(){
        $("#track").removeClass("active");
    });
});
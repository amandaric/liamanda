//= require vendor/jquery.min
//= require vendor/bootstrap.min


// if hamburger menu is expanded, ensure it collapses when an item is clicked
// https://github.com/twbs/bootstrap/issues/9013
// https://github.com/twbs/bootstrap/issues/12852
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['The Berkeley Faculty Club', 37.871803,-122.255818],
        ['The Bancroft Parking Structure', 37.869661,-122.255823],
        ['Downtown Berkeley BART Station', 37.869872, -122.267979]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>The Berkeley Faculty Club</h3>' +
        '<p>Location of wedding ceremony and reception.</p>' + '<p><a href="https://www.google.com/maps/place/The+Faculty+Club+at+UC+Berkeley/@37.871689,-122.255906,17z/data=!3m1!4b1!4m2!3m1!1s0x80857e9d1857dc85:0x381a4c5cf7ec8f9a" target="_blank">View in Google Maps</a></p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>The Bancroft Parking Lot</h3>' +
        '<p>Located on Bancroft Way between College Avenue and Bowditch Street</p>' + '<p><a href="https://www.google.com/maps/place/Bancroft+Parking+Structure/@37.8705705,-122.257238,17z/data=!4m5!1m2!2m1!1sThe+Bancroft+Parking+Structure!3m1!1s0x80857c2f8c02d9e9:0x17161d051ae9b931" target="_blank">View in Google Maps</a></p>' + 
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Downtown Berkeley BART Station</h3>' +
        '<p>About a 20 minute walk from the Faculty Club.</p>' + '<p><a href="https://www.google.com/maps/place/Downtown+Berkeley+BART+Station/@37.870068,-122.268071,17z/data=!3m2!4b1!5s0x80857e9dd1bb109d:0x571df460b3d973c8!4m2!3m1!1s0x80857e9dcbbcfba7:0xad74c1e4918cbdb6" target="_blank">View in Google Maps</a></p>' + 
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}
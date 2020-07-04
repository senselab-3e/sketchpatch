function initMap(){
  // Create a new StyledMapType object, passing it an array of styles,
       // and the name to be displayed on the map type control.
       var styledMapType1 = new google.maps.StyledMapType(
         [
{
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "administrative.land_parcel",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "administrative.neighborhood",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "landscape",
  "stylers": [
    {
      "color": "#ea248f"
    }
  ]
},
{
  "featureType": "landscape",
  "elementType": "labels.text",
  "stylers": [
    {
      "color": "#d77aba"
    }
  ]
},
{
  "featureType": "landscape",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#d77aba"
    }
  ]
},
{
  "featureType": "poi",
  "stylers": [
    {
      "color": "#d77aba"
    },
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "transit",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "water",
  "stylers": [
    {
      "color": "#fd008e"
    }
  ]
}
],
           {name: 'Pinkest Pink'});
  // Create a new StyledMapType object, passing it an array of styles,
       // and the name to be displayed on the map type control.

       var styledMapType = new google.maps.StyledMapType(
         [
{
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "administrative",
  "stylers": [
    {
      "color": "#e66c6d"
    }
  ]
},
{
  "featureType": "administrative.land_parcel",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "administrative.neighborhood",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "landscape",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#fb0f07"
    }
  ]
},
{
  "featureType": "poi",
  "stylers": [
    {
      "color": "#d64042"
    }
  ]
},
{
  "featureType": "road",
  "stylers": [
    {
      "color": "#f7605c"
    }
  ]
},
{
  "featureType": "transit",
  "stylers": [
    {
      "color": "#e55e38"
    }
  ]
},
{
  "featureType": "water",
  "stylers": [
    {
      "color": "#d41c2c"
    }
  ]
}
],
           {name: 'redredred'});

           var styledMapType3 = new google.maps.StyledMapType(
             [
 {
   "stylers": [
     {
       "color": "#44c0ea"
     }
   ]
 },
 {
   "featureType": "administrative",
   "stylers": [
     {
       "color": "#44c0ea"
     },
     {
       "weight": 1
     }
   ]
 },
 {
   "featureType": "administrative",
   "elementType": "labels.text",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "featureType": "landscape",
   "stylers": [
     {
       "color": "#44c0ea"
     }
   ]
 },
 {
   "featureType": "road",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "featureType": "transit",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "featureType": "water",
   "stylers": [
     {
       "color": "#44c0ea"
     }
   ]
 },
 {
   "featureType": "water",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#5b71f7"
     }
   ]
 }
],
{name: 'everyone in pool'});

  //map options

  var myOptions = {
    zoom: 8,
    center: {lat: 45.695747, lng: -73.478310},
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'pink', 'red', 'wateronly']
}
}


  //new map
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

  // var map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);

  // var map3 = new google.maps.Map(document.getElementById("map_canvas3"), myOptions);


  //Associate the styled map with the MapTypeId and set it to display.
/*map.mapTypes.set('pink', styledMapType1);
  map.set('red', styledMapType);
  map.set('wateronly', styledMapType3);
map.setMapTypeId('pink');*/

map.mapTypes.set('pink', styledMapType1);
    map.mapTypes.set('red', styledMapType);
        map.mapTypes.set('wateronly', styledMapType3);
map.setMapTypeId('pink');



var ctaLayer = new google.maps.KmlLayer({
url: 'http://3e-pr0cess-s33dbank.com/orca/mapz/minmov.kmz',
map: map
});
// var ctaLayer2 = new google.maps.KmlLayer({
// url: 'http://3e-pr0cess-s33dbank.com/orca/mapz/minmov.kmz',
// map: map2
// });
//
// var ctaLayer3 = new google.maps.KmlLayer({
// url: 'http://3e-pr0cess-s33dbank.com/orca/mapz/minmov.kmz',
// map: map3
// });

}

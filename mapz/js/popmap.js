
    var marker;
    var infowindow;

    function initMap() {

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

  var styledMapType4 = new google.maps.StyledMapType(
        [
  {
    "elementType": "labels",
    "stylers": [
      {
        "color": "#63e6aa"
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
    "featureType": "administrative.country",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#f4d35c"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#dced93"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#f4d35c"
      },
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
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a1f780"
      }
    ]
  }
],
{name: 'zzz'});

      // //map options
      var casaLiquida = {lat: -23.551173, lng:  -46.681452};
      var splashhh = {lat: -30.47263, lng:-23.98059};



        var california = {lat: 37.4419, lng: -122.1419};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -23.5505, lng: -46.6333},
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                  'pink', 'red', 'wateronly', 'zzz']
                },
          gestureHandling: 'cooperative'
        });

        //setting custom styles
        map.mapTypes.set('pink', styledMapType1);
        map.mapTypes.set('red', styledMapType);
        map.mapTypes.set('wateronly', styledMapType3);
        map.mapTypes.set('zzz', styledMapType4);

        map.setMapTypeId('zzz');

        var ctaLayer = new google.maps.KmlLayer({
        url: 'http://3e-pr0cess-s33dbank.com/mapz/min0r~m0vementzzz.kmz',
        preserveViewport: true,
        map: map
        });

        //infowindow give content
        infowindow = new google.maps.InfoWindow({
          content: document.getElementById('form')
        });

        //adding a marker and opening the infowindow
        google.maps.event.addListener(map, "click", function(event) {
          marker = new google.maps.Marker({
            position: event.latLng,
            map: map
          });

        google.maps.event.addListener(marker, "click", function() {
          infowindow.open(map, marker);
        });
        });

        //brazil-event marker
        var markerb = new google.maps.Marker({
          position: casaLiquida,
          map: map,
          title: 'Proposition for Social Dreaming',
          icon: 'http://3e-pr0cess-s33dbank.com/orca/mapz/map-icons/pillow-catnip.gif'
        });
        //brazil-event on click
        google.maps.event.addDomListener(markerb, 'click', function() {
          // window.toggle_visibility2('glided'),
          window.toggle_visibility('fabmap'),
          // window.toggle_visibility2('dfrin'),
         window.brazil()
        });

        //brazil-event marker
        var markerc = new google.maps.Marker({
          position: splashhh,
          map: map,
          // title: 'Proposition for Social Dreaming',
          icon: 'http://3e-pr0cess-s33dbank.com/orca/mapz/map-icons/leafy.png'
        });
        //brazil-event on click
        google.maps.event.addDomListener(markerc, 'click', function() {
          // window.toggle_visibility2('glided'),
          window.toggle_visibility('fabmap'),
          // window.toggle_visibility2('dfrin'),
         window.brazil()
        });

      }
//end of initMap

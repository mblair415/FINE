console.log('app.js sanity check');

// geolocation api key:  AIzaSyBubDaOrMIAm627PQ5c_FKMQfFBqF5o-UQ

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7911, lng: -122.401180},
    zoom: 14
  });
  var myLatLng = {lat: 37.791432, lng: -122.395490};

  var donationMarkers = [{
      position: {
        lat: 37.791432,
        lng: -122.395490
      },
      name: 'Terminus BBQ House',
      slogan: "If it's not in you, you will be in it!",
      map: map,
      address: '278 Mission Street',
      image: 'http://shirtigo.co/wp-content/uploads/2014/10/visitterminus.jpg',
      offering: [{
        type: 'protein',
        name: 'cervelle de vagrant',
        quantity: 3
      },
      {
        type: 'protein',
        name: 'longpig',
        quantity: 45
      }]
    },{
        position: {
          lat: 37.794571,
          lng: -122.403886
        },
        name: "McDowell's",
        slogan: "Please don't sue.",
        map: map,
        address: '643 Clay Street',
        image: 'https://s3-media1.fl.yelpcdn.com/bphoto/CgDY1IFo7MCBN948JI2klg/ls.jpg',
        offering: [{
          type: 'vegetable',
          name: 'unknown, but we think it started out green',
          quantity: 10
        },
        {
          type: 'starch',
          name: 'potatoes',
          quantity: 20
        }]
      }
  ]

  var kitchenMarkers = [{
    position: {
      lat: 37.7961798,
      lng: -122.3982746
    },
    name: 'Ewe For You Soup Kitchen',
    map: map,
    addresss: '152 Washington Street',
    slogan: 'Have some ewe, so you can be the best you that you can be.',
    image: 'http://static1.squarespace.com/static/569e6caa9cadb6436a93d988/t/56a82bab40667aecb252adbe/1480091987541/',
    requesting: {
      starchRequest: 25,
      starchReceived: 10,
      proteinRequest: 12,
      proteinReceived: 0,
      vegetabeRequest: 30,
      vegetableReceived: 25
    }
  }]

  function showHit(data){  // call with kitchenMarkers or donationMarkers as data
    console.log('you found stuff on your map!', data);
    data.forEach(function(spot){
      var location = {
        lat: spot.position.lat,
        lng: spot.position.lng
      }
      // this is the content that goes on the card associated with each searhed location on the map
      var content = '<div class="map-card"><h6>' + spot.name +
        '</h6><h6>' + spot.address +
        '</h6><h5>' + spot.slogan +
        '</h5></div>'
      addMarker(location, content);
    })
  }

  // places a marker on the map for each spot
  function addMarker(position, content){
    console.log('marker added! ', position);
    console.log('marker has content! ', content);
    var myLatlng, marker, infowindow, contentString;
    // places each marker
    marker = new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    });
    // fills in data for the card that appears when clicking on any marker
    contentString = content;
    infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    // listen for click to open the window when a marker is clicked on
    marker.addListener('click', function() {
      // open the info when marker clicked on
     infowindow.open(map, marker);
    });
  }
  showHit(donationMarkers);


  // var marker = donationMarkers.forEach(new google.maps.Marker);
}


angular
  .module('fine', ['ngRoute'])
  .controller('DonationIndexController', DonationIndexController)
  .controller('KitchenIndexController', KitchenIndexController)
  .controller('MapController', MapController)
  .controller('LandingController', LandingController)
  .config(config);

  LandingController.$inject = ['$http'];
  function LandingController($http){
    var vm = this;

    $http({
    method: 'GET',
    url: '/'
    }).then(function successCallback(response) {
    console.log('landing page success')
    // vm.landing = response.data;
    }, function errorCallback(response) {
    console.log('There was an error getting the landing data', response);
    });

  }

  DonationIndexController.$inject = ['$http'];
  function DonationIndexController($http){
    var vm = this;

    $http({
    method: 'GET',
    url: '/api/donations'
    }).then(function successCallback(response) {
    console.log('get all donations success', response.data)
    vm.donation = response.data;
    }, function errorCallback(response) {
    console.log('There was an error getting the donations data', response);
    });

    vm.createDonation = function () {
      $http({
        method: 'POST',
        url: '/api/donation',
        data: 'data needed'  // need data!!
      }).then(function successCallback(response) {

      }, function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });
    }

  }

  KitchenIndexController.$inject = ['$http'];
  function KitchenIndexController($http){
    var vm = this;

    $http({
    method: 'GET',
    url: '/api/kitchen'
    }).then(function successCallback(response) {
    console.log('get all kitchens success', response.data)
    vm.kitchen = response.data;
    }, function errorCallback(response) {
    console.log('There was an error getting the kitchens data', response);
    });

  }

  // var map = angular.module
  MapController.$inject = ['$http'];
  function MapController($http, donationMarkers){
    console.log('map controller')
    console.log('donations are ', donationMarkers)
    var vm = this;

    $http({
    method: 'GET',
    url: '/api/map'
    }).then(function successCallback(response) {
    console.log('map page success')
    initMap();

    // vm.map = response.data;
    }, function errorCallback(response) {
    console.log('There was an error getting the map data', response);
    });
  }


config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/',{
      templateUrl: '/templates/landing',
      controller: 'LandingController',
      controllerAs: 'LandingCtrl'
    })
    .when('/donation', {
      templateUrl: '/templates/donation',
      controller: 'DonationIndexController',
      controllerAs: 'donationIndexCtrl'
    })
    .when('/kitchen', {
      templateUrl: '/templates/kitchen',
      controller: 'KitchenIndexController',
      controllerAs: 'kitchenIndexCtrl'
    })

    .when('/map', {
      templateUrl: '/templates/map',
      controller: 'MapController',
      controllerAs: 'mapCtrl'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

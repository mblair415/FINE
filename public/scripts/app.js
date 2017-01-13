angular
  .module('fine', [])
  .controller('DonationIndexController', DonationIndexController)
  .controller('KitchenIndexController', KitchenIndexController)
  .controller('MapController', MapController)
  .controller('ProfileController', ProfileController)
  .module('tunely', ['ngRoute'])
  .config(config);


  DonationIndexController.$inject = ['$http'];
  function DonationIndexController(){
    var vm = this;

    $http({
    method: 'GET',
    url: '/api/donations'
    }).then(function successCallback(response) {
    console.log('get all donations success', response.data)
    vm.albums = response.data;
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

  KitchenIndexController.$inject = ['$http'];
  function KitchenIndexController(){
    var vm = this;

    $http({
    method: 'GET',
    url: '/api/kitchen'
    }).then(function successCallback(response) {
    console.log('get all kitchens success', response.data)
    vm.albums = response.data;
    }, function errorCallback(response) {
    console.log('There was an error getting the kitchens data', response);
    });

  }

  MapController.$inject = ['$http'];
  function MapController(){
    var vm = this;

    $http({
    method: 'GET',
    url: '/api/map'
    }).then(function successCallback(response) {
    console.log('map page success', response.data)
    vm.albums = response.data;
    }, function errorCallback(response) {
    console.log('There was an error getting the map data', response);
    });
  }

  ProfileController.$inject = ['$http'];
  function ProfileController(){
    var vm = this;

    $http({
    method: 'GET',
    url: '/api/map'
    }).then(function successCallback(response) {
    console.log('map page success', response.data)
    vm.albums = response.data;
    }, function errorCallback(response) {
    console.log('There was an error getting the map data', response);
    });
  }


config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/'){

    }
    .when('/donation', {
      templateUrl: '/templates/donation',
      controllerAs: 'donationIndexCtrl',
      controller: 'DonationIndexController'
    })
    .when('/kitchen ', {
      templateUrl: '/templates/kitchen',
      controllerAs: 'kitchenIndexCtrl',
      controller: 'kitchenIndexController'
    })
    .when('/albums/:id', {
      templateUrl: '/templates/albums-show',
      controllerAs: 'albumsShowCtrl',
      controller: 'AlbumsShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

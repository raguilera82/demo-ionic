angular.module('starter', ['ionic', 'ngCordova','Controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  console.log('entro en el router');

  $stateProvider.state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.camera', {
      url: '/camera',
      views: {
        'tab-camera': {
          templateUrl: 'templates/tab-camera.html',
          controller: 'CameraController'
        }
      }
    })
    
    .state('tab.contacts', {
    		url: '/contacts',
    		views: {
    			'tab-contacts': {
    				templateUrl: 'templates/tab-contacts.html'
    			}
    		}
    })

    .state('tab.rate', {
      url: '/rate',
      views: {
        'tab-rate': {
          templateUrl: 'templates/tab-rate.html'
        }
      }
    })

  $urlRouterProvider.otherwise('/tab/camera');

});
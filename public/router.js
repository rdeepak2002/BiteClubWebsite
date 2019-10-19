app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : '/pages/home.html',
    controller  : 'HomeController'
  })

  .when('/meetings', {
    templateUrl : '/pages/meeting.html',
    controller  : 'MeetingController'
  })

  .when('/about', {
    templateUrl : '/pages/about.html',
    controller  : 'AboutController'
  })

  .when('/officers', {
    templateUrl : '/pages/officers.html',
    controller  : 'OfficerController'
  })

  .when('/contact', {
    templateUrl : '/pages/contact.html',
    controller  : 'ContactController'
  })

  .when('/admin', {
    templateUrl : '/pages/admin.html',
    controller  : 'AdminController'
  })

  .otherwise({redirectTo: '/'});
});

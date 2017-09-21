'use strict';

angular.module('myRecipesApp',['ui.router']
              
              )


.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        .state('login', {
            url:'/login',
            templateUrl:'app/login/login-template.html'
        })
        .state('admin', {
            url:'/admin',
            templateUrl:'app/admin/admin-template.html'
        });
});
/**
 * Created by aLeX on 2017/5/27.
 */


angular.module('ngRouteExample',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{templateUrl: 'Welcome.html'})
            .when('/article',{templateUrl: 'article.html'})
            .when('/new_article',{templateUrl: 'new_article.html'})
            .otherwise({redirectTo:'/'})
    }]);


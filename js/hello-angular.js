
    
HBS.UI.addModule('hello-angular', function(context) {

    var require = context.getGlobal('require');

    return {
        init: function() {
            
            var libs = ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js'];

            require(libs,function(){

                var app = angular.module('hello', []);

                app.controller('HelloController', function($scope) {
                    $scope.greeting = 'Welcome!';
                });

                context.element.innerHTML = '<div ng-controller="HelloController"><input type="text" name="firstname" ng-model="greeting"></div>';

                angular.bootstrap(document, ['hello']);

            });

        }
    };

});


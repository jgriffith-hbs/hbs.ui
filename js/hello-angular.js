
HBS.UI.addModule('hello-angular', function(context) {

    var require = context.getGlobal('require');

    function main(angular){
        var app = angular.module('hello', []);

        app.controller('HelloController', function($scope) {
            $scope.$watch('greeting', function(newValue, oldValue) {
                context.broadcast('greetingchanged', newValue);
            });
        });

        context.element.innerHTML = '<div ng-controller="HelloController"><input type="text" name="firstname" ng-model="greeting"><br/>Angular Hello: {{greeting}}</div>';

        angular.bootstrap(document, ['hello']);        
    }

    return {
        init: function() {
            
            var libs = ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js'];

            require(libs,function(){
                main(angular);
            });

        }
    };

});


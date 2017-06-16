var app = angular.module('todo', []);

app.run(function($rootScope, $timeout){
        $rootScope.isShowing = true;

        $timeout(function(){
            $rootScope.isShowing = false;
        }, 3000);

});

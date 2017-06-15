app.controller('mainCtrl', function($scope){

    $scope.products = ["Milk", "Bread", "Cheese"];

    // ADD ITEM TO TODO LIST
    $scope.addItem = function() {
        $scope.addText = "";
        $scope.errorText = "";

        if(!$scope.addMe){
            $scope.addText = "Please add something to the list.";
            return;
        }
        if($scope.products.indexOf($scope.addMe) === -1){
            $scope.products.push($scope.addMe);
            $scope.addMe = "";
        }
        else {
            $scope.errorText = "The item you added is already on the list.";
        }
    }

    // REMOVE ITEM FROM TODO LIST
    $scope.removeItem = function(product){
        $scope.errorText = "";

        $scope.products.splice(product, 1);
    }

})
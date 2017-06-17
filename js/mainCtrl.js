app.controller('mainCtrl', function($scope){

    $scope.isError = true;
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.count = $scope.products.length;// count for list

    // ADD ITEM TO TODO LIST
    $scope.addItem = function() {
        $scope.addText = "";
        $scope.errorText = "";

        if(!$scope.addMe){
            $scope.addText = " Nothing to add.";
            return;
        }
        if($scope.products.indexOf($scope.addMe) === -1){
            $scope.products.push($scope.addMe);
            $scope.addMe = "";
            $scope.isError = true;
            $scope.count++;
        }
        else {
            $scope.errorText = "The item you added is already on the list.";
            $scope.isError = false;
        }
    }

    // REMOVE ITEM FROM TODO LIST
    $scope.removeItem = function(product){
        $scope.errorText = "";
        $scope.products.splice(product, 1);
        $scope.count--;
    }



})

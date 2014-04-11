





app.controller("LocationFormCtrl", function ($scope) {
    $scope.location = {
        fName: "Guillaume",
        lName: "Vassas",
        email: "guillaumevassas@gmail.com"
    };
    $scope.pattern = {
        name: "/^[a-zA-Z -]+$/",
        email: "/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i"
    };
    $scope.message = {
        name: "Name can only contain a-z, A-Z, -, spaces",
        email: "Email invalid"
    }
});

angular.element(document).ready(function () {
    angular.bootstrap(document, ["formDemo"]);
});

app.directive("clickToEdit", function () {


    return {
        restrict: "A",
        replace: true,
        templateUrl: 'template.html',
        scope: {
            value: "=clickToEdit",
            pattern: "@",
            message: "@"

        },
        controller: function ($scope) {
            $scope.view = {
                editableValue: $scope.value,
                editorEnabled: false
            };

            $scope.enableEditor = function (type) {
                $scope.view.editorEnabled = true;
                $scope.view.editableValue = $scope.value;
            };

            $scope.disableEditor = function () {
                $scope.view.editorEnabled = false;
            };

            $scope.save = function () {
                $scope.value = $scope.view.editableValue;
                $scope.disableEditor();
            };
        }
    };
});
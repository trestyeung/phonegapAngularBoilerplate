////////////////////////////////////////////////////////////////////
// Reddits controller
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("redditsController", ["$scope", "$q","Reddits", function ($scope, $q, Reddits) {
        
        var next = 0;
        $scope.theReddits = [];
        $scope.loadMore = function() {
            return Reddits.from(next).then(function(redditsResponse) {
                next = redditsResponse.next;
                for (i in redditsResponse.items) {
                    $scope.theReddits.push(redditsResponse.items[i]);
                }
            });
        };
        $scope.loadMore();

    }]);

});
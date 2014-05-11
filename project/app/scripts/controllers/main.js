'use strict';

darinsApp.controller('Scroller', function($scope, $location, $document) {
    $scope.scrollTo = function(id) {
        var el = angular.element(document.getElementById(id));
        $document.scrollTo(el, 2000);
    }
});



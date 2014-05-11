'use strict';

darinsApp.controller('Scroller', function($scope, $location, $document, $anchorScroll) {
    $scope.scrollTo = function(id) {
        var el = angular.element(document.getElementById(id));
        $document.scrollTo(el, 2000);
    }
});


darinsApp.controller('HomeController', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
});

darinsApp.controller('FirstController', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
});


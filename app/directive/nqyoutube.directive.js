//neuralquest version
(function() {
    'use strict';

    angular
        .module('neuralquestApp')
        .directive('nqYoutube', ['$sce', nqYoutube]);

    /* @ngInject */
    function nqYoutube($sce) {
        // Usage: 
        // in the html, use it as tag or attribute
        // e.g. <nq-youtube></nq-youtube>
        // use nq-videoid attribute to set id of the video in html side
        var directive = {
            scope: { nqVideoid: '=?' },
            // replace: true,
            link: link,
            restrict: 'EA',
            template: '<div><iframe style="overflow: hidden, height:100%, width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>'
        };
        return directive;

        function link(scope, element, attrs) {
            // debugger;
            scope.$watch('nqVideoid', function (videoUrl) {
               if (videoUrl) {
                   // scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + videoId + "?rel=0");
                    scope.url = $sce.trustAsResourceUrl(videoUrl + "&output=embed");
               }
            });
        }
    }

})();
/**
 * Created by pqwarlot on 16/11/16.
 */
(function () {
  'use strict';
  angular.module('app')
      .directive('inputAutocomplete', [inputAutocompleteDirective]);

  function inputAutocompleteDirective() {
    return {
      restrict: 'AE',
      scope: {
        error: '=',
        errorMessage: '=',
        data: '='
      },
      templateUrl: 'src/utils/inputAutocomplete.html',
      link: function (scope, elem, attrs) {
        scope.uniqueId = attrs.uniqueId;
        scope.label = attrs.label;

        scope.$watch('allData', function (allData) {
          $(`input#${scope.uniqueId}`).autocomplete(allData);
        });

        scope.allData = {
          data: {
            "Apple": null,
            "Nokia": null,
            "Roger": null,
            "Bil": null,
            "Videotron": null,
            "Vodafone": null,
            "Microsoft": null,
            "Samsung": null,
            "Google": 'http://placehold.it/250x250'
          }
        };

        scope.validData = function () {
          scope.error = !(scope.data in scope.allData.data);
        };
      }
    }
  }
})();
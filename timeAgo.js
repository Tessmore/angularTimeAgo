'use strict';
angular
.module('angularTimeAgo', [])
.directive('timeAgo', function () {
  return function(scope, elem, attr) {
    scope.$watch(attr.timeAgo, function(date) {
      var mili    = Date.now() - (new Date(date));
      var seconds = mili / 1000;
      var minutes = seconds / 60;
      var hours   = minutes / 60;
      var days    = hours / 24;

      var words = "";

      if (seconds < 90) {
        words = "just now";
      }
      else if (minutes < 60) {
        words = Math.round(minutes) + " minutes ago";
      }
      else if (minutes < 90) {
        words = "an hour ago";
      }
      else if (hours < 24) {
        words = Math.round(hours) + " hours ago";
      }
      else if (hours < 36) {
        words = "a day ago";
      }
      else if (days < 30) {
        words = Math.round(days) + " days ago";
      }
      else {
        words = date;
      }

      angular.element(elem).text(words);
    });
  };
});
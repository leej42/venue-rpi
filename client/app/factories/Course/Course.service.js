'use strict';

(function() {

  function CourseResource($resource) {
    var Course = $resource('/api/courses/:id/:controller', {
      id: '@_id'
    }, {
      create: {
        method: 'POST'
      },
      getAll: {
        method: 'GET',
        isArray:true
      },
      update: {
        method: 'PUT'
      },
      delete: {
        method: 'DELETE'
      }
    });
    return Course;
  }

  angular.module('venueApp')
    .factory('Course', CourseResource);

  })();

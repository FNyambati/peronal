angular.module("myApp").service("profileService", function($http) {
  this.addProfileInfo = function(profile) {
    return $http({
      method: 'POST',
      url: '/profile',
      data: profile
    }).then(function(response) {
      return response.data;
    });
  };
  this.getProfileInfo = function() { //current profile info
    return $http({
      method: 'GET',
      url: '/profile',
    }).then(function(response) {
      return response;
    });
  };
  this.editProfile = function(user, editProfile) {
    return $http({
      method: 'PUT',
      url: '/profile/' + user.data._id,
      data: {
        user: user.data._id,
        first: editProfile.first,
        last: editProfile.last,
        phone: editProfile.phone,
        address1: editProfile.address1,
        address2: editProfile.address2,
        city: editProfile.city,
        state: editProfile.state,
        zip: editProfile.zip,
        country: editProfile.country,
        userCar: editProfile.userCar,
        laptime: editProfile.laptime
      }
    }).then(function(response) {
      return response.data;
    });
  };
});

'use strict';

var startingState = {
      view: 'Login',
      friendsRatings: [],
      movie: null,
      friendRequests: [],
      pendingFriendRequests: [],
      myFriends: [],
      friendToFocusOn: '',
      individualFriendsMovies: [],
      potentialMovieBuddies: {},
      username: null,
      requestResponses: [],
      currentUser: null,
      requestsOfCurrentUser: []
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3V0aWxzLmpzIl0sIm5hbWVzIjpbInN0YXJ0aW5nU3RhdGUiLCJ2aWV3IiwiZnJpZW5kc1JhdGluZ3MiLCJtb3ZpZSIsImZyaWVuZFJlcXVlc3RzIiwicGVuZGluZ0ZyaWVuZFJlcXVlc3RzIiwibXlGcmllbmRzIiwiZnJpZW5kVG9Gb2N1c09uIiwiaW5kaXZpZHVhbEZyaWVuZHNNb3ZpZXMiLCJwb3RlbnRpYWxNb3ZpZUJ1ZGRpZXMiLCJ1c2VybmFtZSIsInJlcXVlc3RSZXNwb25zZXMiLCJjdXJyZW50VXNlciIsInJlcXVlc3RzT2ZDdXJyZW50VXNlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDaEJDLFlBQU0sT0FEVTtBQUVoQkMsc0JBQWdCLEVBRkE7QUFHaEJDLGFBQU8sSUFIUztBQUloQkMsc0JBQWdCLEVBSkE7QUFLaEJDLDZCQUF1QixFQUxQO0FBTWhCQyxpQkFBVyxFQU5LO0FBT2hCQyx1QkFBaUIsRUFQRDtBQVFoQkMsK0JBQXlCLEVBUlQ7QUFTaEJDLDZCQUF1QixFQVRQO0FBVWhCQyxnQkFBVSxJQVZNO0FBV2hCQyx3QkFBa0IsRUFYRjtBQVloQkMsbUJBQWEsSUFaRztBQWFoQkMsNkJBQXVCO0FBYlAsQ0FBdEIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdGFydGluZ1N0YXRlID0ge1xyXG4gICAgICB2aWV3OiAnTG9naW4nLFxyXG4gICAgICBmcmllbmRzUmF0aW5nczogW10sXHJcbiAgICAgIG1vdmllOiBudWxsLFxyXG4gICAgICBmcmllbmRSZXF1ZXN0czogW10sXHJcbiAgICAgIHBlbmRpbmdGcmllbmRSZXF1ZXN0czogW10sXHJcbiAgICAgIG15RnJpZW5kczogW10sXHJcbiAgICAgIGZyaWVuZFRvRm9jdXNPbjogJycsXHJcbiAgICAgIGluZGl2aWR1YWxGcmllbmRzTW92aWVzOiBbXSxcclxuICAgICAgcG90ZW50aWFsTW92aWVCdWRkaWVzOiB7fSxcclxuICAgICAgdXNlcm5hbWU6IG51bGwsXHJcbiAgICAgIHJlcXVlc3RSZXNwb25zZXM6IFtdLFxyXG4gICAgICBjdXJyZW50VXNlcjogbnVsbCxcclxuICAgICAgcmVxdWVzdHNPZkN1cnJlbnRVc2VyOiBbXVxyXG4gIH07XHJcbiJdfQ==
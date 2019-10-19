app.controller('MeetingController', function($scope) {
	$scope.message = 'Hello from MeetingController';

  // get current date
  var now = new Date();

  // array that contains all meetings
  var meetings = [];

  // call db function to get meetings
  getMeetings().then(function(result){
    // remove loader class
    $( ".lds-heart" ).remove();

    $scope.h1 = "Upcoming Meetings";
    $scope.h2 = "Past Meetings";

    // set meetings to result
    meetings = result;

    // two types of meeting arrays
    var compMeetings = [];
    var upMeetings = [];

    // set date objects
    for (var i = 0; i < meetings.length; i++) {
      meeting = meetings[i];

      if(!(meeting.date == "TBD")) {
        meeting.dateObj = stringToDate(meeting.date);
      }
      else {
        meeting.dateObj = new Date(now.getFullYear()+1000, 11, 24, 10, 33, 30, 0);
      }
    }

    // populate two meeting arrays accordingly 
    for (var i = 0; i < meetings.length; i++) {
      meeting = meetings[i];

      if(now > meeting.dateObj) {
        compMeetings.push(meeting);
      }
      else {
        upMeetings.push(meeting);
      }
    }

    // function to compare id's of meetings
    function compare( a, b ) {
    if ( a.id < b.id ){
      return 1;
    }
    if ( a.id > b.id ){
      return -1;
    }
      return 0;
    }

    // sort two arrays according to id's
    compMeetings.sort( compare );
    upMeetings.sort( compare );

    // set angular scope variables for the arrays
    $scope.completedMeetings = compMeetings;
    $scope.upcomingMeetings = upMeetings;
    $scope.$apply();
  })
  .catch(function(error){
    console.log("Error loading meetings from database!");
    alert("Error loading meetings!\nPlease contact rdeepak2002@gmail.com");
  });
});
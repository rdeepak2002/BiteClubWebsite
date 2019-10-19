app.controller('AdminController', function($scope) {
	$scope.message = 'Hello from AdminController';

  $scope.create = function cm() {
      var id = $('#idForm').val();
      var title = $('#titleForm').val();
      var description = $('#descriptionForm').val();
      var date = $('#dateForm').val();
      var image = $('#imageForm').val();                    // "https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg"
      createMeeting(""+id, title, description, date, image);
  }

  $scope.delete = function dm() {
      var id = $('#meetingNumber').val();

      deleteMeeting(""+id);
  }

  $scope.edit = function em() {
    var id = $('#idFormE').val();
    var title = $('#titleFormE').val();
    var description = $('#descriptionFormE').val();
    var date = $('#dateFormE').val();
    var image = $('#imageFormE').val();                    // "https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg"
    createMeeting(""+id, title, description, date, image);
  }

});
async function getMeetings() {
  const meetings = [];
  await db.collection('meetings').get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        var data = doc.data();

        var id = data.id;
        var title = data.title;
        var description = data.description;
        var date = data.date;
        var image = data.image;

        meetings.push({id: id, title: title, description: description, date: date, dateObj: new Date(), image: image});
    });
  });
  return meetings;
}

function createMeeting(id, title, description, date, image) {
	db.collection("meetings").doc(id).set({
	  id: id,
	  title: title,
	  description: description,
	  date: date,
	  image: image
	})
	.then(function() {
	    console.log("Meeting successfully created!");
	})
	.catch(function(error) {
	    console.error("Error writing document: ", error);
	});
}

function deleteMeeting(id) {
	db.collection("meetings").doc(id).delete().then(function() {
    console.log("Meeting successfully deleted!");
	}).catch(function(error) {
	    console.error("Error deleting meeting: ", error);
	});
}
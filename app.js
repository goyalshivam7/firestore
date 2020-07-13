var firebaseConfig = {
    apiKey: "AIzaSyDqiqhI7gfp9DK9HMYMhEOX6xvqywcSH44",
    authDomain: "shivam-18ffd.firebaseapp.com",
    databaseURL: "https://shivam-18ffd.firebaseio.com",
    projectId: "shivam-18ffd",
    storageBucket: "shivam-18ffd.appspot.com",
    messagingSenderId: "471296058765",
    appId: "1:471296058765:web:7df58d065a715c328749c4",
    measurementId: "G-WJ7PQZYF1B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

$('#submit').click(function() {

    var info = document.querySelector("#des").value;
    var name = document.querySelector("#name").value;
    var Category = document.getElementById("field").value;
    var title = document.getElementById("title").value;

    //  var docRef = firestore.collection(Category).doc(name);

    firestore.collection(Category).doc(name).set({
            description: info,
            Title: title,
            Name: name
        }).then(function(docRef) {
            console.log("saved successfully. ");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

});



$('#update').click(function() {

    var name = document.querySelector("#name").value;
    var Category = document.getElementById("field").value;
    var info = document.getElementById("des").value;
    var title = document.getElementById("title").value;


    firestore.collection(Category).doc(name).update({
            detail: info,
            title: title
        }).then(function(docRef) {
            console.log("saved successfully. ");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

});




var list = document.querySelector("#list");
//var name = document.querySelector("#name").value;
//var Category = document.getElementById("field").value;
//firestore.collection(Category).doc(name).onSnapshot(function(event) {
//});
firestore.collection('Bussiness').onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            list.innerHTML += "<h3>" + change.doc.data().Name + "</h3><p>" + change.doc.data().description + "</p>"
            console.log('read');
        }
    });
});




$('#delete').click(function() {


    var name = document.querySelector("#name").value;
    var Category = document.getElementById("field").value;


    firestore.collection(Category).doc(name).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });

});




/*
 var cityRef = firestore.collection(title).doc('logwork');

 var setWithMerge = cityRef.set({
   ET: Time,
   Comment: Comment
 }, { merge: true });

 return setWithMerge;
*/
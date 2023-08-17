const firebaseConfig = {
    apiKey: "AIzaSyBcah9mcbbrbVvPJlUwL1ZWQ7pc0thJ-w0",
    authDomain: "chatapp-5d0d0.firebaseapp.com",
    databaseURL: "https://chatapp-5d0d0-default-rtdb.firebaseio.com",
    projectId: "chatapp-5d0d0",
    storageBucket: "chatapp-5d0d0.appspot.com",
    messagingSenderId: "236109074395",
    appId: "1:236109074395:web:83d546419561cc498461fe",
    measurementId: "G-H2521LL6LW"
  };
firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}

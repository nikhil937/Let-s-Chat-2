var firebaseConfig = {
    apiKey: "AIzaSyBqxwo6c0pERbNd018BJkZvK4Xh8oE_WyU",
    authDomain: "letschat-42d05.firebaseapp.com",
    databaseURL: "https://letschat-42d05-default-rtdb.firebaseio.com",
    projectId: "letschat-42d05",
    storageBucket: "letschat-42d05.appspot.com",
    messagingSenderId: "798769547718",
    appId: "1:798769547718:web:c512d33222b72ae54c8ac7"
  };
  
  firebase.initializeApp(firebaseConfig);

  function adduser(){

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
  }
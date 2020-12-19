//*********************************FIREBASE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDieOKKeLdrayyw6IoCFqct24ianhevvIo",
    authDomain: "jmidev-website.firebaseapp.com",
    projectId: "jmidev-website",
    storageBucket: "jmidev-website.appspot.com",
    messagingSenderId: "831287284960",
    appId: "1:831287284960:web:46470757ac19d9e2c16c85",
    measurementId: "G-L0CYW0C1DM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var db = firebase.firestore();

var formended = false;
var emailregex = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/;

if(!formended){

  $("#contactform").css("display", "inline");
  $("#tickpage").css("display", "none");

}
  //asasass
else{

  $("#contactform").css("display", "none");
  $("#tickpage").css("display", "inline");

}

function uploadmessage(){

    var namebox = document.getElementById("namebox").value;
    var emailbox = document.getElementById("emailbox").value;
    var asuntobox = document.getElementById("asuntobox").value;
    var messagebox = document.getElementById("messagebox").value;
    var userlocaltime = new Date();

    if(emailbox == ""){

      alert("No has introducido todos los datos necesarios");

    }

    else if(!emailregex.test(emailbox)){

      alert("El email que has introducido no es válido, y/o te falta algún dato por introducir");

    }

    else if(namebox == "" || emailbox == "" || asuntobox == "" || messagebox == ""){

      alert("No has introducido todos los datos necesarios");

    }

    else{

      db.collection("mensajescontactopagina").doc("MSG·" + Math.floor(Math.random() * 300) + " - " + document.getElementById("asuntobox").value).set({
      
        AA_nombre: namebox,
        BB_email: emailbox,
        CC_asunto: asuntobox,
        DD_mensaje: messagebox,
        EE_msgdate: userlocaltime});
  
      formended = true;

    }

    if(!formended){

      $("#contactform").css("display", "inline");
      $("#tickpage").css("display", "none");
    
    }
    
    else{
    
      $("#contactform").css("display", "none");
      $("#tickpage").css("display", "inline");
    
    }

}

//**********************



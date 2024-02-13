const firebaseConfig = {
    apiKey: "AIzaSyCDZyonW3sgQye095JnculvhbSebwReBqo",
    authDomain: "aula-94-52ed5.firebaseapp.com",
    databaseURL: "https://aula-94-52ed5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aula-94-52ed5",
    storageBucket: "aula-94-52ed5.appspot.com",
    messagingSenderId: "951726708468",
    appId: "1:951726708468:web:9553bde2f2f614c845f0a1",
    measurementId: "G-WZH2VVHKM3"
}
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref (roomName).push({
name: userName,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}
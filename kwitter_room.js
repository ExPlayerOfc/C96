function addRoom() {
    // Get the room name from the input field
    const roomName = document.getElementById("roomName").value;
  
    // Add the room name to localStorage and the Firebase database
    localStorage.setItem("roomName", roomName);
    firebase.database().ref("rooms").push({
      name: roomName,
    });
  
    // Redirect to kwitterPage.html
    window.location.href = "kwitterPage.html";
  }
  //Início do código
  kwitterRoom.js . Função getData() em kwitterRoom.js ;
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot ) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
<div id="roomNames">
</div>
//Fim do código
});});}
getData();
//Fim do código
function redirectToRoomName() {
    // Get the room name from the URL
    const roomName = window.location.pathname.split("/")[2];
  
    // Store the room name in localStorage
    localStorage.setItem("roomName", roomName);
  
    // Redirect to the message page
    window.location.href = "kwitterPage.html";
  }
  function logout() {
    firebase.auth().signOut().then(function() {
      window.location.href = "index.html";
    });
  }
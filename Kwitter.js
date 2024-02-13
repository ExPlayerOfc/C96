function saveUsername() {
  var username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  window.location.href = "kwitter_room.html";
}
function logout() {
  // Remove the user from the firebase database
  firebase.auth().signOut();

  // Redirect to the index page
  window.location.href = "index.html";
}
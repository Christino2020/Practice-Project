function AddUser(){
    Username = document.getElementById("username").value
    localStorage.setItem("username" , Username )
    window.location = "main_page.html";
}
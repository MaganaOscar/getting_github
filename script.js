let elem = document.getElementById("content");
let user = null;
async function getGit() {
    user = document.getElementById("user").value;
    var response = await fetch("https://api.github.com/users/" + user);
    var coderData = await response.json();
    elem.innerHTML = "<h1>" + coderData['name'] + " has " +
    coderData['followers'] + " followers " + "</h1><img src='" + coderData['avatar_url']
    + "' width='500' height='500'>"

}

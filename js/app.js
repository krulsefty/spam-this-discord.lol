async function sendWebhook() {
    var link = document.getElementById("linkInput").value;
    let username 
    var avatar = document.getElementById("avatarInput").value;
    var msg = document.getElementById("msgInput").value;

    if (!document.getElementById("usernameInput").value) {
        username = "Webhook"
    } else {
        username = document.getElementById("usernameInput").value
    }
  
    var request = new XMLHttpRequest();
    request.open("POST", link);
  
    request.setRequestHeader('Content-type', 'application/json');
  
    var params = {
      username: username,
      avatar_url: avatar,
      content: msg
    };
  
    var h3Element = document.querySelector("h3");
  
    if (!link || !msg) {
      return h3Element.innerHTML = "status: <span class='error'>error</span>";
    }
  
    if (
      link.includes("https://discord.com/api/webhooks/") ||
      link.includes("https://canary.discord.com/api/webhooks/")
    ) {
    } else {
      return h3Element.innerHTML = "status: <span class='error'>error</span>";
    }
  
    h3Element.innerHTML = "status: <span class='done'>done</span>";
  
    request.send(JSON.stringify(params));
  }
  
  function sendWebhookLoop() {
    var numMessages = 35;
    var delayRange = 750;
  
    for (let i = 0; i < numMessages; i++) {
      setTimeout(sendWebhook, i * delayRange + Math.random() * delayRange * 2);
    }
  }
  
  document.getElementById("btn").addEventListener("click", sendWebhookLoop);
  

document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
})

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false
    }

    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false
    }
}
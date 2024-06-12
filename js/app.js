async function sendWebhook() {
    var link = document.getElementById("linkInput").value;
    let username 
    let avatar
    let msg

    if (!document.getElementById("usernameInput").value) {
        username = "Spidey Bot"
    } else {
        username = document.getElementById("usernameInput").value
    }

    if (!document.getElementById("avatarInput").value) {
        avatar = ""
    } else {
        avatar = document.getElementById(avatarInput).value
    }

    if (!document.getElementById("msgInput").value) {
        msg = "@everyone"
    } else {
        msg = document.getElementById("msgInput").value
    }

    const message = {
        username: username,
        avatar_url: avatar,
        content: msg
    }

    fetch(link, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    })
        .then(response => {
            if (!response.ok) {
                console.error(`Error ${response.status}: ${response.statusText}`);
            }
        })
        .catch(error => console.error('Error:', error));
  
    var h3Element = document.getElementById("status");
  
    if (!link) {
      return h3Element.innerHTML = "Status: <span class='error'>Error</span>";
    }
  
    if (
      link.includes("https://discord.com/api/webhooks/") ||
      link.includes("https://canary.discord.com/api/webhooks/")
    ) {
    } else {
      return h3Element.innerHTML = "Status: <span class='error'>Error</span>";
    }
  
    h3Element.innerHTML = "Status: <span class='done'>Done</span>";
  
  }
  
  function sendWebhookLoop() {
    let amount

    if (!document.getElementById("amountInput").value) {
        amount = 75
    } else {
        amount = document.getElementById("amountInput").value
    }

    var numMessages = amount
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
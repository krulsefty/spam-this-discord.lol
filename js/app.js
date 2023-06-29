async function sendWebhook() {
    var link = document.getElementById("linkInput").value;
    var username = document.getElementById("usernameInput").value;
    var avatar = document.getElementById("avatarInput").value;
    var msg = document.getElementById("msgInput").value;

    var request = new XMLHttpRequest();
    request.open("POST", link);

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: username,
        avatar_url: avatar,
        content: msg
    };

    var h3Element = document.querySelector("h3"); // Get the <h3> element
    h3Element.innerHTML = "status: <span class='done'>done</span>"; // Update the content with a span for "done"

    request.send(JSON.stringify(params));
}

function sendWebhookLoop() {
    for (let i = 0; i < 5; i++) {
        sendWebhook();
    }
}

document.getElementById("btn").addEventListener("click", sendWebhookLoop);

// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault()
// })

// document.onkeydown = function (e) {
//     if (event.keyCode == 123) {
//         return false
//     }

//     if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//         return false
//     }

//     if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//         return false
//     }

//     if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//         return false
//     }

//     if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//         return false
//     }
// }
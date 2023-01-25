// sefty#001

const Discord = require("discord.js")

const { TOKEN } = require("./config.js")

const client = new Discord.Client()

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

client.on("ready", () => {
    console.log("Bot is online")
})

client.on("message", async message => {
    const args = message.content.trim().split(/ +/g)
    const webhookLink = args.join(" ").slice(6)

    async function sendWebhook() {
        var request = new XMLHttpRequest()
        request.open("POST", `${webhookLink}`)

        request.setRequestHeader('Content-type', 'application/json')

        var params = {
            username: "chuj",
            avatar_url: "",
            content: "@everyone"
        }

        request.send(JSON.stringify(params))
    }

    function sendWebhookLoop() {
        for (i = 0; i <= 25; i++) {
            sendWebhook()
        }
    }


    if (!webhookLink) {
        return message.reply("You have to provide webhook link!")
    }

    if (message.content.includes("!spam")) {
        return sendWebhookLoop()
    }

})

client.login(TOKEN)

client.on("debug", () => { })
client.on("warn", () => { })
client.on("error", () => { })

require("dotenv").config({
  path: "./config/config.env"
})

const { TOKEN } = process.env

const { getRandomNumber, greetUser } = require("./commands")

const { Client } = require("discord.js")

const bot = new Client()

bot.on("ready", () =>
  console.log(`Успешное подключение к боту\nМеня зовут ${bot.user.tag}`)
)

bot.on("message", msg => {
  console.log(msg.content)

  getRandomNumber(msg)
  greetUser(msg)
})

bot.login(TOKEN)

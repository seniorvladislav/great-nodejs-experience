const { PREFIX } = process.env

function getRandomNumber(msg) {
  const content = msg.content.trim().toLowerCase()

  let [cmd, ...args] = content.split(/\s+/)

  if (cmd !== PREFIX + "рандом") return

  let min = 1,
    max = 10

  if (args.length) {
    // console.log(args)

    args = args.map(val => parseInt(val))

    console.log(args)

    const notValidSyntax = args.some(v => isNaN(v))

    if (notValidSyntax) {
      return msg.channel.send(
        `Вы ввели некорректное число/числа\nВведите в формате /рандом 1 10`
      )
    }

    const [min, max] = args

    if (min > max) {
      return msg.channel.send(
        `Минимальное число не может быть больше максимального\nВведите в формате /рандом 1 10`
      )
    }
  }

  const randomNumber = Math.floor(min + Math.random() * (max + 1 - min))

  msg.reply(`тебе выпало число ${randomNumber}`)
}

function greetUser(msg) {
  const content = msg.content.trim().toLowerCase()

  // if (msg.channel.type !== "dm") return
  const newChannelID = "753540344770985985"

  // Если сообщение было отправлено в текстовый канал #новый-канал или в ЛС боту
  if (
    (msg.channel.type === "text" && msg.channel.id === newChannelID) ||
    msg.channel.type === "dm"
  ) {
    if (content === PREFIX + "привет") {
      msg.channel.send(
        `${msg.author}, всем привет, ребята\nСпасибо за поддержку!!!`
      )
    }
  }
}

module.exports = {
  getRandomNumber,
  greetUser
}

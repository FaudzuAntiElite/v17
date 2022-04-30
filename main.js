const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const { OwnerNumber, BotName, OwnerName } = require('./settings/setting.json')
const { adeuss, goodbye } = require('./lib/adeuss.js')

//fotobot.
thumb = fs.readFileSync('./settings/thumb.jpg')

require('./start.js')
nocache('./start.js', module => console.log(`${module}!`))

//Function Start
const starts = async (Lexxy = new WAConnection()) => {
Lexxy.logger.level = 'warn'
Lexxy.version = [2, 2143, 3]
Lexxy.browserDescription = [ 'Lexxy Official', 'Safari', '3.0' ]

console.log(banner)
console.log(color('KAMU KANG RECODE😎🙏'))
Lexxy.on('qr', () => {
  console.log(color('[','white'), color('!','red'), color(']','white'), color('QR AKAN DIGANTI SETELAH 20 DETIK'))
})

const sendButImage = async (from, context, fotext, img, but) => {
gam = img
jadinya = await Lexxy.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
Lexxy.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
}

//Connecting bot
fs.existsSync('./session.json') && Lexxy.loadAuthInfo('./session.json')
Lexxy.on('connecting', () => {
  start('2', 'Menghubungkan...')
})

//Conectar ao dono
Lexxy.on('open', () => {
  success('2', 'Tersambung Ke Hatimu >_<')
  Lexxy.sendMessage(`${OwnerNumber}@s.whatsapp.net`, `*Hallo Pemilik ${BotName} 👋*\n\nBot sekarang terhubung dan siap digunakan🤙😉\n\nJika bot error silahkan hubungi owner\n\nCopyright By *Lexxy* さ`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "OWNER LEXXY BOTS",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./settings/thumb.jpg'),sourceUrl:"https://wa.me/6282279915237?text=GW+UDAH+MAKE BOT+LU+BANG+:v"}}})
})

await Lexxy.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(Lexxy.base64EncodedAuthInfo(), null, '\t'))

Lexxy.on('chat-update', async (message) => {
require('./start.js')(Lexxy, message, _welkom)
})
Lexxy.on("group-participants-update", async (anu) => {
const isWelkom = _welkom.includes(anu.jid)
try {
groupMet = await Lexxy.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]

console.log(anu)

try {
pp_user = await Lexxy.getProfilePicture(mem)
} catch (e) {
pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}


try {
pp_grup = await Lexxy.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}


if (anu.action == 'add' && mem.includes(Lexxy.user.jid)) {
Lexxy.sendMessage(anu.jid, '```Hallo 👋, Aku Zahra Bots Yang Akan Mempermudah Hidup Kalian Ketik  .menu Untuk Menampilkan Menu```', 'conversation')
}


if (!isWelkom) return
if (anu.action == 'add') {
num = anu.participants[0]
mdata = await Lexxy.groupMetadata(anu.jid)
memeg = mdata.participants.length
let v = Lexxy.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
time_wel = moment().tz('Asia/Jakarta').format("HH:mm:ss")
try {
ppimg = await Lexxy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
image = await getBuffer(ppimg)
teks = `Olá *@${num.split('@')[0]}*\nBem vindo ao grupo ${mdata.subject}\n\n`
but = [
{ buttonId: '.fdsksksk', buttonText: { displayText: 'WELCOME 👋' }, type: 1 }
]
let buff = await getBuffer(ppimg)
sendButImage(mdata.id, teks+adeuss(), `*© Whatsapp | ${mdata.subject}*`, image, but)


} else if (anu.action == 'remove') {
num = anu.participants[0]
mdata = await Lexxy.groupMetadata(anu.jid)
memeg = mdata.participants.length
let w = Lexxy.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = w.vname || w.notify || num.split("@")[0]
time_wel = moment().tz('Asia/Jakarta').format("HH:mm:ss")
try {
ppimg = await Lexxy.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
imagee = await getBuffer(ppimg)
tekss = `Adeus *@${num.split('@')[0]}* não volte mas.\n\n`
butt = [
{ buttonId: '.fdsksksk', buttonText: { displayText: 'GOODBYE 👋' }, type: 1 }
]
let buff = await getBuffer(ppimg)
sendButImage(mdata.id, tekss+goodbye(), `*© Whatsapp | ${mdata.subject}*`, imagee, butt)
}
} catch (e) {
console.log("Error : %s", color(e, "red"))
}

})
}

function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
  await uncache(require.resolve(module))
  cb(module)
})
}


function uncache(module = '.') {
return new Promise((resolve, reject) => {
  try {
delete require.cache[require.resolve(module)]
resolve()
  } catch (e) {
reject(e)
  }
})
}

starts()

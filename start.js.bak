const
{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const cheerio = require('cheerio')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()

//SETTING OWNER
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))

//LIB
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { webp2gifFile } = require("./lib/gif.js")
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, simih, getRandom, start, info, success, close } = require('./lib/functions')
const { uploadImages } = require('./lib/uploadimage')
const { pinterest } = require('./lib/pinterest') 
const Exif = require('./lib/exif');
const exif = new Exif();

//DataBase
const _welcom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antifake = JSON.parse(fs.readFileSync('./database/antifake.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const setiker = JSON.parse(fs.readFileSync('./media/sticker/stik.json'))

//Setting Creator
ownernumber = setting.OwnerNumber
ownernumber2 = setting.OwnerNumber2
botname = setting.BotName
ownername = setting.OwnerName
ownername2 = setting.OwnerName2
botversao = setting.BotVersao
apikey = ["zahraz"]



//Auto Bio & nome
autobio = true
autoperfil = true
public = true
let blocked = []
let public_mode = setting. public_mode

//UBAH PAKE POTO LU
const fakeimage = fs.readFileSync ('./settings/thumb.jpg')

const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

			
//Module Exports
module.exports = zahra = async (zahra, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timeMak = moment().tz('Asia/Jakarta').format("HH:mm:ss");
const timeJay = moment().tz('Asia/Jakarta').format("HH:mm:ss");
const type = Object.keys(mek.message)[0]
	const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(command.length + 2, budy.length)
const c = args.join(' ')
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = zahra.user.jid
const ownerNumber = [`${ownernumber}@s.whatsapp.net`, `${ownernumber2}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
let sender = isGroup ? mek.participant : mek.key.remoteJid
let senderr = mek.key.fromMe ? zahra.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const groupMetadata = isGroup ? await zahra.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const senderNumber = sender.split("@")[0]
const hour_now = moment().format('HH:mm:ss')
const conts = mek.key.fromMe ? zahra.user.jid : zahra.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? zahra.user.name : conts.notify || conts.vname || conts.name || '-'
const processsTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()}
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false 
const isOwner = ownerNumber.includes(sender)
const isMybot = isOwner || mek.key.fromMe
const itsMe = mek.key.fromMe ? true : false
const isAntiFake = isGroup ? antifake.includes(from) : false 
const autoRespost = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
let bio_nya = await zahra.getStatus(sender)
try {
bio_user = `${bio_nya.status}`
} catch {
bio_user = '-'
}

mess = {
wait: 'WAIT OM💤',
success: 'SUKSES OM✔️',
error: {
stick: 'ERROR!!! COBA LAGI OM👺',
Iv: 'LINKNYA SALAH OM !!! KIRIM LAGI YANG BENER...'
},
only: {
group: '❌HANYA BISA DI GRUP OM❌',
owner: '❌HANYA UNTUK OWNER LEXX BOTS❌',
admin: '❌HANYA UNTUK ADMIN GRUP❌',
Badmin: 'BOT HARUS JADI ADMIN OM.'
}
}			
zahra.on("group-participants-update", async (anu) => {
if(antifake.includes(anu.jid)) {
const mdata = await zahra.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {					
setTimeout(async function () {							
zahra.groupRemove(mdata.id, [num])
}, )
}
}
}
})					
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
zahra.sendMessage(from, teks, text, {quoted:ftrol})
}
const sendMess = (hehe, teks) => {
zahra.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zahra.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zahra.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
zahra.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zahra.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zahra.sendMessage(from, hasil, type, options).catch(e => {
zahra.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Something Error')
console.log(e)
})
})
})
})
}
//Midia Url
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zahra.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}  
//Auto Bio
if (autobio){
if (autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
let _uptime = process.uptime() * 1000;
let uptimer = clockString(_uptime);
await zahra.setStatus(`ㅤ`).catch((_) => _);
settingstatus = new Date() * 1;
}}

/*//Auto perfil
if (autoperfil){
if (autoperfil === false) return
let settingperfil = 0;
if (new Date() * 1 - settingperfil > 1000) {
let _uptimee = process.uptime() * 1000;
let uptimere = clockString(_uptimee);
await zahra.updateProfilePicture(botNumber, fakeimage)
 console.log(color('[','white'), color('!','red'), color(']','white'), color(uptimere))
settingperfil = new Date() * 1;
}}	
*/

var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var datw = new Date();
var tahun = datw.getFullYear();
var bulan = datw.getMonth();
var taanggal = datw.getDate();
var hari = datw.getDay();
var jamss = datw.getHours();
var menit = datw.getMinutes();
var detik = datw.getSeconds();
switch(hari) {
case 0: hari = "MINGGU"; break;
case 1: hari = "SENIN"; break;
case 2: hari = "SELASA"; break;
case 3: hari = "RABU"; break;
case 4: hari = "KAMIS"; break;
case 5: hari = "JUMAT"; break;
case 6: hari = "SABTU"; break;
}
switch(bulan) {
case 0: bulan = "Januari"; break;
case 1: bulan = "Febuari"; break;
case 2: bulan = "Maret"; break;
case 3: bulan = "April"; break;
case 4: bulan = "Mei"; break;
case 5: bulan = "Juni"; break;
case 6: bulan = "Juli"; break;
case 7: bulan = "Agustus"; break;
case 8: bulan = "Setember"; break;
case 9: bulan = "Oktober"; break;
case 10: bulan = "November"; break;
case 11: bulan = "Desember"; break;
}
switch(jamss){
case 0: jamss = 'Malam 🌃'; break;
case 1: jamss = 'Malam 🌃'; break;
case 2: jamss = 'Malam 🌃'; break;
case 3: jamss = 'Pagi 🎑'; break;
case 4: jamss = 'Pagi 🎑'; break; 
case 5: jamss = 'Pagi 🎑'; break;
case 6: jamss = 'Pagi 🎑'; break;
case 7: jamss = 'Pagi 🎑'; break;
case 8: jamss = 'Pagi 🏞️'; break;
case 9: jamss = 'Pagi 🏞️'; break;
case 10: jamss = 'Pagi 🏞️'; break;
case 11: jamss = 'Pagi 🏞️'; break; 
case 12: jamss = 'Dzuhur 🏞️'; break;
case 13: jamss = 'Siang 🏞️'; break;
case 14: jamss = 'Siang 🏞️'; break;
case 15: jamss = 'Siang 🌅'; break;
case 16: jamss = 'Siang 🌅'; break;
case 17: jamss = 'Siang 🌅'; break;
case 18: jamss = 'Maghrib🌌'; break; 
case 19: jamss = 'Isya 🌌'; break;
case 20: jamss = 'Malam 🌌'; break;
case 21: jamss = 'Malam 🌌'; break;
case 22: jamss = 'Malam 🌌'; break; 
case 23: jamss = 'Jangan Gadang Tod 🌌'; break;
}
var tampilUcapan = "" + jamss;
var tampilTanggal = hari + " "+ taanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jamss + ":" + menit + ":" + detik;
var tampilHari = "" + jamss;
//Verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}
const isUser = cekUser(sender)
const isRegistered = checkRegisteredUser(sender)
const daftar1 = `Olá ${pushname}\nVocê não está verificado Pressione o botão abaixo para verificação!!`
const daftar2 = '```KLIK TOMBOL DIBAWAH UNTUK VERIFIKASI```'
const daftar3 = [{buttonId: `${prefix}?`,buttonText: {displayText: `VERIFIKASI👌️`,},type: 1,},]
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('finalizado');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zahra.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

// Button
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
zahra.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zahra.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await zahra.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
zahra.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
})
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
them = gam1
mediaxxaa = await zahra.prepareMessage(id, them, MessageType.location, {thumbnail: them})
locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
const buttonMessages = {
locationMessage: locmhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
zahra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await zahra.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
zahra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await zahra.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
zahra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zahra.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
//verificados
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `Olá ${pushname}`,
jpegThumbnail: fakeimage
}
}
}
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `Olá ${pushname}`, 
jpegThumbnail: fakeimage
}
}
}
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 123,
status: 1,
surface : 1,
message: `${tampilUcapan} ${pushname}`, 
orderTitle: `${tampilUcapan} ${pushname}`,
thumbnail: fakeimage, 
sellerJid: '0@s.whatsapp.net' 
}
}
}
const zahra2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fakeimage, surface: 200, message: `「NEWTON (zahra)」❤️`, orderTitle: 'zahra', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}	
	
const addRegisterUser = (userid, sender, age, bio) => {
const obj = { id: userid, name: sender, age: age, bio: bio }
_user.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
}

if (!public){
if (!isOwner && !itsMe) return
}
//Tempo
function clockString(ms) {
let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}

const timeWib = moment().tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWita = moment().tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWit = moment().tz('Asia/Jakarta').format('DD/MM HH:mm:ss')


colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')


if (isCmd && !isGroup)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))

zahra.chatRead(from)

if (!mek.key.fromMe) {
switch(autoRespost) {


  case 'zahra':
  const dkk = fs.readFileSync('./media/sticker/zahra.webp');
  zahra.sendMessage(from, dkk, sticker, {quoted:mek})
  break
}
}

switch (command) {

case 'tes':
reply(`*Status Bot : Online*\n*Runtime : ${runtime(process.uptime())}*`)
break
case 'menu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
var p = await zahra.getStatus(`${sender}`, MessageType.text)
st =
`*${tampilUcapan} @${sender.split('@')[0]}*

 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓
👤 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 : ${ownername}
🤖 𝑵𝒂𝒎𝒂 𝑩𝒐𝒕  : ${botname}
💻 𝑺𝒑𝒆𝒆𝒅 : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${runtime(process.uptime())}
📱 𝑷𝒓𝒆𝒇𝒊𝒙 : Multi
🗃 𝑺𝒕𝒂𝒕𝒖𝒔 : ${public? `Mode public`:`Mode privat`}

 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑
🌱 𝑵𝒂𝒎𝒂 : ${pushname}
🏷 𝑩𝒊𝒐 : ${p.status==undefined?`Not Found`:p.status}
📱 𝑵𝒐𝒎𝒐𝒓 : @${sender.split('@')[0]}

 𝐈𝐍𝐅𝐎 𝐓𝐈𝐌𝐄
🕐 𝑱𝒂𝒎 : ${timeWib}
🌥 𝑯𝒂𝒓𝒊 : ${hari}
🌚 𝑩𝒖𝒍𝒂𝒏 : ${bulan}
💐 𝑻𝒂𝒉𝒖𝒏 : ${tahun}

〘 𝗶𝗻𝗳𝗼 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}rules
ッ ${prefix}infobot
ッ ${prefix}creator
ッ ${prefix}ping

〘 𝗼𝘄𝗻𝗲𝗿 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}owner
ッ ${prefix}roubar autor|pac
ッ ${prefix}stickers
ッ ${prefix}wame
ッ ${prefix}mode
ッ ${prefix}public
ッ ${prefix}privat
ッ ${prefix}owner
ッ ${prefix}run
ッ ${prefix}bc *text*
ッ ${prefix}setbiobot

〘 𝗴𝗿𝗼𝘂𝗽 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}welcome <ON/OFF>
ッ ${prefix}antilink <ON/OFF>
ッ ${prefix}antifake <ON/OFF>
ッ ${prefix}online
ッ ${prefix}linkgrup
ッ ${prefix}infogp
ッ ${prefix}add
ッ ${prefix}add2
ッ ${prefix}kick
ッ ${prefix}demitir
ッ ${prefix}promover 
ッ ${prefix}setname
ッ ${prefix}setdesc
ッ ${prefix}fotogp
ッ ${prefix}abrirgp
ッ ${prefix}fechargp
ッ ${prefix}marcar *txt*
ッ ${prefix}linkgrupo
ッ ${prefix}tempoban
ッ ${prefix}tempoabrir

〘 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}play <JUDUL>
ッ ${prefix}play2 <JUDUL>
ッ ${prefix}tiktok <LINK>
ッ ${prefix}ytmp3 <LINK>
ッ ${prefix}ytmp4 <LINK>

〘 𝗰𝗼𝗻𝘃𝗲𝗿𝘁 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}sticker
ッ ${prefix}st
ッ ${prefix}attp *text*
ッ ${prefix}ttp *text*
ッ ${prefix}toimg 
ッ ${prefix}tourl 
ッ ${prefix}stickermeme
ッ ${prefix}semoji *emoji*
ッ ${prefix}trigger
ッ ${prefix}stickerbg 
ッ ${prefix}tovideo
ッ ${prefix}togif

〘 𝗽𝗲𝘀𝗾𝘂𝗶𝘀𝗮 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}pinterest *text*
ッ ${prefix}gore *text*

〘 𝘃𝗶𝗱𝗲𝗼 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}hentaivideo
ッ ${prefix}tiktokporn
ッ ${prefix}saycat

〘 𝗱𝗶𝘃𝗲𝗿𝘀𝗮𝗼 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}shipp
ッ ${prefix}casal
ッ ${prefix}conselho
ッ ${prefix}dadu

〘 𝗰𝗺𝗱 𝗺𝗲𝗻𝘂 〙
ッ ${prefix}addsticker *sticker*
ッ ${prefix}liststicker *sticker*
ッ ${prefix}getsticker

〘 𝗺𝗲𝗻𝘂 𝗮𝗻𝗶𝗺𝗲 〙
ッ ${prefix}waifu
ッ ${prefix}loli
ッ ${prefix}nfswloli
ッ ${prefix}hentai

〘 𝗺𝗲𝗻𝘂 𝗹𝗮𝗶𝗻𝗻𝘆𝗮 〙
ッ ${prefix}delete
ッ ${prefix}grupowner
`
st2 =`𝑪𝒓𝒆𝒂𝒕𝒐𝒓 𝑩𝒚 : 𝒀𝑻 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍`
but = [
{ buttonId: `${prefix}infobot`, buttonText: { displayText: 'ɪɴғᴏ ʙᴏᴛ' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '️ᴏᴡɴᴇʀ ʙᴏᴛ' }, type: 1 }
]
sendButton(from, st, st2, but, mek)
break

case 'run':
  if (!isOwner) return;
  try {
  eval(`(async() => {
    ${body.slice(command.length + 2)}
   })()`)
   } catch (e) {
     reply(String(e))
   }
  break


case 'owner':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: ${ownername};\n`
+ `TEL;type=CELL;type=VOICE;waid=${ownernumber}:${ownernumber}\n`
+ 'END:VCARD'.trim()
zahra.sendMessage(from, {displayName: `${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`CUMAN SAVE NO CEWE 🤝🗿`)
break

case 'grupowner':
reply(`https://chat.whatsapp.com/DiexeOhNqQv5Qsm6Y2vD4d`)
break

case 'creator':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:𝑳𝒆𝒙𝒙𝒚さ\n`
+ `ORG:𝑳𝒆𝒙𝒙𝒚さ;\n`
+ `TEL;type=CELL;type=VOICE;waid=6285789004732:6285789004732\n`
+ 'END:VCARD'.trim()
zahra.sendMessage(from, {displayName: `${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
break
case 'mode':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
buttonss = [{buttonId: `${prefix}publico`, buttonText: {displayText: 'PUBLIC🌱'}, type: 1},{buttonId: `${prefix}privado`, buttonText: {displayText: 'PRIVAT🍂'}, type: 1}]
const buMess = {
contentText: "PUBLIC | PRIVAT",
footerText: 'PILIH SALAH SATU',
buttons: buttonss,
headerType: 1
}
await zahra.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: mek})
break


case 'privat':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
 if(!public)return reply('*_Fitur ini telah aktif🌱_*')
public = false
return reply(`Modo privado ativo\nOnde apenas o proprietário pode usar o bot`,text)
break
case 'public':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (public)return reply('*_Fitur ini telah aktif🌱_*')
public = true
return reply(`Mode publik aktif \nSemua orang dapat menggunakan bot`, text)
break
case 'bc': case 'broadcast':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply('texto?')
anu100 = await zahra.chats.all()
if (isMedia && !zahra.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zahra).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zahra
bc100 = await zahra.downloadMediaMessage(encmedia)
for (let _ of anu100) {
zahra.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 LEXX BOTS 」*\n\n${body.slice(4)}`})
}
reply('Berhasil ditransmisikan')
} else {
for (let _ of anu100) {
zahra.sendMessage(_.jid, 
{"contentText": `*「 TRANSMISI 」*\n\n${body.slice(4)}`,
"footerText": `${tampilTanggal}`, 
"buttons": [
{"buttonId": `${prefix}menu`,
"buttonText": {"displayText": "MENU 🌱"
},"type": "RESPONSE"}
], "headerType": 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fakeimage,
}}, MessageType.buttonsMessage )
}
reply('Berhasil ditransmisikan')
}
break

case 'linkgrup':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 linkgc = await zahra.groupInviteCode(from)
  yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grupo: ${groupName}`
zahra.sendMessage(from, yeh, text, { quoted: mek })
break

case 'delete': case 'del': case 'd':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
if (!isQuotedReply) return reply(`Marca msg do bot!!`)
zahra.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: mek })
break

case 'setbiobot':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply(`texto mn`)
zahra.setStatus(q)
.then((res) => reply('Bio diupdate.'))
.catch((err) => reply('Gagal'))
}
break

case 'fechargp': 
 zahra.updatePresence(from, Presence.composing)
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
 if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 var nomor = mek.participant
 const close = { text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
contextInfo: {
 mentionedJid: [nomor]
}
  }
 zahra.groupSettingChange (from, GroupSettingChange.messageSend, true);
 reply(close)
 break

case 'bukagc': 
 zahra.updatePresence(from, Presence.composing)
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
 if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
 text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens`,
contextInfo: {
mentionedJid: [sender]
 }
}
zahra.groupSettingChange (from, GroupSettingChange.messageSend, false)
zahra.sendMessage(from, open, text, {  quoted: mek
})
break



// INGFO LEXX BOTS
case 'infobot':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
try {
let totalchat = await zahra.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = zahra.user.phone
nupe = ownernumber + '@s.whatsapp.net'
menu = `*INGFO BOT* 💻
Nama Bot : ${botname}
Versi Bot : Beta
Creator : @${nupe.split("@")[0]}
Prefix : Multi
Runtime : ${runtime(process.uptime())}
Kecepatan : ${processsTime(mek.messageTimestamp.low, moment())}s
Status : ${public? `Mode Public`:`Mode Privat`}
Numero Grupo : ${giid.length}
Total Chat : ${totalchat.length}
Total Block : ${blocked.length}

*INGFO DEVICE*📱
Versi Whatsapp : ${wa_version}
Ram Yang Digunakan : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Mcc : ${mcc}
Mnc : ${mnc}
Versi OS : ${os_version}
Merek HP : ${device_manufacturer}
Model HP : ${device_model}
Navegador : ${zahra.browserDescription}`
teks =
`RUN TIME : ${runtime(process.uptime())}\nCreator : 𝑿𝑰𝑮𝑨さ\n©𝑿𝑰𝑮𝑨 𝑩𝑶𝑻𝑺`
zahra.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOKASI', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
} catch (e){
reply(`${e}`)
}
}
break

   case 'swm': 
case 'stickerbg':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
const fgiff = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Selesai", seconds: 999, gifPlayback: true, caption: "📄LEXX BOTS", jpegThumbnail: fs.readFileSync('./settings/thumb.jpg')} } }
const { convertSticker } = require('./lib/swm.js')
if (type === 'imageMessage' || isQuotedImage){
const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const dlfile = await zahra.downloadMediaMessage(getbuff)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `@zahra`, `Newton`)
var imageBuffer = new Buffer.from(mantap, 'base64');
zahra.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgiff})
} else {
reply('Reply Gambar')
}
break

case 'gore': //TAHAP PENGEMBANGAN
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
  var hay= args.join(' ')  	
   data = await fetchJson(`https://zahraz.herokuapp.com/api/gore?quero=${hay}&apikey=${apikey}`)
   sads = await getBuffer(data.baixar)   
   shaa = `*Dados obtidos com sucesso!!!*
Titulo: ${data.titulo}
Views: ${data.views}
Comentários:️ ${data.comentarios}`
  sendButVideo(from, shaa, 'Clique no botão abaixo para obter um video aleatório de Gore ', sads, [{buttonId: `${prefix}gore ${hay}`, buttonText: {displayText: '⏩Proximo'}, type: 1}], {quoted: mek})			
  break	

case 'ping':
case 'speed':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
timestampe = speed();
latensie = speed() - timestampe
reply(`_*Test Ping*_\nRespon Pesan ${latensie.toFixed(4)} Detik 💬`)
break

case 'rules':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
menu =
`*Rules*📖
1. Kasih Jeda 5 Detik Kalo Gak Muncul Fimturnya.
2. Gunakanlah dengan bijak.  
3. Kami akan menyimpan data WhatsApp Anda di server kami saat BOT aktif. 
4. Data Anda akan terhapus saat bot OFFLINE 
5. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang Anda kirim 
6. Kami tidak akan pernah meminta Anda untuk memberikan informasi pribadi 
7. .Jika Anda menemukan BUG/ERROR, harap laporkan langsung ke owner *PERHATIAN* *JIKA MELANGGAR ATURAN* - Bot akan memblokir nomor Anda. - Anda tidak akan dapat mengakses bot lagi. - Eksploitasi melawan bot. Sanksi : *BLOK PERMANEN*`
teks =`$RUN TIME : ${runtime(process.uptime())}\nCreator : 𝑿𝑰𝑮𝑨さ\n©𝑿𝑰𝑮𝑨 𝑩𝑶𝑻𝑺`
zahra.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}infobot`, buttonText: { displayText: 'INFO 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'verify': case 'daftar': case '?':
 if (isUser) return reply('Kamu sudah terdaftar')
 const serialUser = createSerial(18)
 veri = sender
 _registered.push(sender)
addRegisterUser(sender, pushname, bio_user, timeWib, serialUser)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
teks = `_*Verificado com sucesso*_\n\n*Nome :* ${pushname}\n*Numero :* @${sender.split('@')[0]}\n*Bio :* ${bio_user}\n*serie :* ${serialUser}\n*Tempo :* ${timeWib}`
let papako = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }]
sendButLocation(from, teks , `${botname}`, fakeimage, papako, {contextInfo: { mentionedJid: [sender]}})
break

case 'clearall':
if (!isOwner) return  reply(mess.only.owner)
anu = await zahra.chats.all()
list_chat = await zahra.chats.all()
for (let chat of list_chat) {
zahra.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break
    


case 'marcar':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
 if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
  
  case 'tempoban':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a mensagem!')
if (args[1]=="segundos") {var tem = args[0]+"000"
} else if (args[1]=="minuto") {var tem = args[0]+"0000"
} else if (args[1]=="hora") {var tem = args[0]+"00000"
} else {return reply(`*Escolha:*\nsegundos\nminuto\nhora`)}
kick = mek.message.extendedTextMessage.contextInfo.participant
zahra.groupRemove(from, [kick])
reply(`Membro banido\nSerá adicionado em: ${args[0]} ${args[1]}`)
setTimeout( () => {
zahra.groupAdd(from, [kick])
reply(`Olá @${kick.split('@')[0]} bem vindo...`)
}, tem)
break

case 'tempoabrir':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})	
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply(`*Escolha:*\nSegundos\nminuto\nhora`)}
zahra.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(`Grupo irá abrir em ${args[0]} ${args[1]}`)
setTimeout( () => {
var nomor = mek.participant
zahra.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply('Grupo aberto membros podem enviar mensagem')
}, timer)
break

case 'gifstiker': case 's': case 'stickergif': case 'sticker': case 'stiker':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zahra.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
zahra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await zahra.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
oppaconsole.log('Finish')
zahra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Envia uma imagem com legenda ${prefix}sticker\nOu videos de 1-9 segundos`)
}
break

case 'st':
 if (!isGroupAdmins) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await zahra.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('newton', '@zahra')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.wait())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer1 = fs.readFileSync(rano)
zahra.sendMessage(from, buffer1, sticker, {contextInfo :mek, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await zahra.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('Aguarde um pouco💤')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('newton', '@zahra')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer2 = fs.readFileSync(rano)
zahra.sendMessage(from, buffer2, sticker, {contextInfo :mek, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break		

case 'stickerwm': case 'swm': case 'take': case 'roubar': case 'rename':{
if (!isOwner) return reply(mess.only.owner) 
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zahra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'red'))
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log(color(`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
zahra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (( isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zahra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`INICIADA : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'red'))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log((`FINALIZADO`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
zahra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await zahra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
zahra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
} else {
reply(`...`)
 }
}
 break
 
 case 'shipp':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek}) 
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Marca dois membros do grupo`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} vc tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}👩‍❤️‍👨`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break 

case 'casal':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
   const dd = groupMembers
  const ll = groupMembers
   const gg = dd[Math.floor(Math.random() * dd.length)]
	const rr = ll[Math.floor(Math.random() * ll.length)]
	teks = `*Futuro casal do grupo:*\n@${gg.jid.split('@')[0]} ❤️\n @${rr.jid.split('@')[0]} ❤️ `	
      buffer = await getBuffer(`https://cdn.discordapp.com/attachments/826140680220311645/845679237674565662/Tipografia_Anime_para_status_Apaixonado_6360p.mp4`)
      zahra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: teks})
      break
      

case 'conselho': //@zahra ♡
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek}) 
  try {
 anu = await fetchJson(`https://zahraz.herokuapp.com/api/conselho?apikey=${apikey}`)
     ppimg = await zahra.getProfilePicture(`${sender.split('@')[0]}@c.us`)
     } catch {
     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
     }
     its = await getBuffer (ppimg)
     randTeks = `Este é meu conselho:
${anu.frase}`
     zahra.sendMessage(from, its, image, {quoted: mek, caption: randTeks})
     break
 
 
case 'online':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek}) 
    let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    let online = [...Object.keys(zahra.chats.get(ido).presences), zahra.user.jid]
    zahra.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
    contextInfo: { mentionedJid: online }
    })
    break
    
     case 'dadu':	
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})      
  anu = await getBuffer(`https://zahraz.herokuapp.com/api/dadu?apikey=${apikey}`)
 zahra.sendMessage(from, anu, sticker, {quoted: mek})
 break

 case 'stickers':	
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek}) 
  anu = await getBuffer(`https://zahraz.herokuapp.com/api/stickera?apikey=${apikey}`)
 zahra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 zahra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break 
 
case 'addsticker':  // zahra ♡		
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isQuotedSticker) return reply('marque um figurinha')
 var svst = args.join(' ')
	if (!svst) return reply('coloque um nome')
	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	delb = await zahra.downloadMediaMessage(boij)
	setiker.push(`${svst}`)
	fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
	fs.writeFileSync(`./media/sticker/stik.json`, JSON.stringify(setiker))
	zahra.sendMessage(from, `Figurinha adicionada com sucesso\nDigite: ${prefix}liststicker para ver minha lista sticker`, MessageType.text, { quoted: mek }) 
	break
	
	
case 'slist':
	case 'lists':
	case 'stickerlist':
	case 'liststicker':  // zahra ♡		
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})	
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
zahra.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
break
		
case 'getsticker':
case 'gets':   // zahra ♡		
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
 namastc = body.slice(12)
 result = fs.readFileSync(`./media/sticker/${namastc}.webp`)
 zahra.sendMessage(from, result, sticker, {quoted :mek})
 break
																	
 
case 'toimg':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isQuotedSticker) return reply('marque uma figurinha')
encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zahra.downloadAndSaveMediaMessage(encmediaa)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Falha ao converter sticker em imagem')
buffer = fs.readFileSync(ran)
zahra.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCCSES✅'})
fs.unlinkSync(ran)
})
break

  
case 'togif':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isQuotedSticker) return 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await zahra.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
zahra.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: 'Convertido✅'})
fs.unlinkSync(mediaaa)
}
break 

  
case 'tovideo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isQuotedSticker) return 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await zahra.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
zahra.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: zahra2, caption: 'Convertido✅'})
fs.unlinkSync(mediaaa)
}
break

case 'wame':  
case 'wa.me': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek}) 
zahra.updatePresence(from, Presence.composing)
options = {
text: `Link WhatsApp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
mentionedJid: [sender]
}
}
zahra.sendMessage(from, options, MessageType.text, {quoted: zahra2})
break

case 'tourl': case 'imagetorul': case 'imgtourl': case 'videotourl': case 'tolink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await zahra.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('fotos/vídeos')
}
break
case 'ttp':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!c) return reply(`${prefix}ttp zahra bot`)
anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
zahra.sendMessage(from, anu1, image, {quoted: mek})
break
case 'attp':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Example: ${prefix + command} Oi`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zahra.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'emoji':case 'semoji':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return reply(`Exemplo : ${prefix + command} 😂`)
hex2 = args.join(' ') 
emoji.get(`${hex2}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)
})
break


case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply(`*${prefix + command}* zahra`)
try {
if (!isQuotedImage) return reply(`uma img mano!`)
var teks2 = args.join(' ')
var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var mediaaa = await zahra.downloadMediaMessage(enmedia)
var njay = await uploadImages(mediaaa)
var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
sendStickerFromUrl(from,`${resu}`)	
} catch (e) {
reply(lang.err())
console.log(e)
}
break	

case 'trigger': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
try {
if (!isQuotedImage) return reply(`uma img mano!`)
var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var media = await zahra.downloadMediaMessage(enmedia)
var njay = await uploadImages(media)
var resu = `https://some-random-api.ml/canvas/triggered?avatar=${njay}`
sendStickerFromUrl(from,`${resu}`)	
} catch (e) {
reply(lang.err())
console.log(e)
}
break	


 


//Anime
case 'waifu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
anu = await fetchJson(`https://zahra-api.herokuapp.com/api/waifu2?&apikey=${apikey}`)
kon = await getBuffer(anu.image)
pll = `By : ${botname}`
sendButImage(from, pll, ``, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `PROXIMO ⏩`,
},
type: 1,
},
]); 
break

case 'loli':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
kon = await getBuffer(`https://zahraz.herokuapp.com/api/randomloli?apikey=${apikey}`)
pll = `By : ${botname}`
sendButImage(from, pll, ``, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `PROXIMO ⏩`,
},
type: 1,
},
]); 
break

case 'nfswloli':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
kon = await getBuffer(`https://zahraz.herokuapp.com/api/nfswloli?apikey=${apikey}`)
pll = `By : ${botname}`
sendButImage(from, pll, ``, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `PROXIMO ⏩`,
},
type: 1,
},
]); 
break

case 'hentai':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
kon = await getBuffer(`https://zahraz.herokuapp.com/api/henta2?apikey=${apikey}`)
pll = `By : ${botname}`
sendButImage(from, pll, ``, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `PROXIMO ⏩`,
},
type: 1,
},
]); 
break

  case 'hentaivideo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
data = await fetchJson(`https://zahraz.herokuapp.com/api/hentaivideo?apikey=${apikey}`)
sads = await getBuffer(data.resultado.video_1)   
 shaa = `*Random Hentai*
Titulo: ${data.resultado.titulo}
Categoria: ${data.resultado.categoria}
Views: ${data.resultado.views}
Tranf:️ ${data.resultado.share}
Formato: ${data.resultado.formato}`
  sendButVideo(from, shaa, 'Clique no botão abaixo para obter um video aleatório de Hentai\n©' + ownername + '', sads, [{buttonId: `${prefix}hentaivideo`, buttonText: {displayText: '⏩Proximo'}, type: 1}], {quoted: zahra2})			
  break	
    
case 'tiktokporn':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
data = await fetchJson(`https://zahraz.herokuapp.com/api/randomporn?apikey=zahraz`)
sads = await getBuffer(`https://tikporntok.com/${data.video}`)   
 shaa = `*Random Video*
Titulo: ${data.titulo}
Like: ${data.like}
Favorito: ${data.favorito}
Views: ${data.views}
Tags: ${data.tags}
Descrição: ${data.tags}  `
  sendButVideo(from, shaa, 'Clique no botão abaixo para obter um video aleatório\n©' + ownername + '', sads, [{buttonId: `${prefix}tiktokporn`, buttonText: {displayText: '⏩Proximo'}, type: 1}], {quoted: zahra2})			
  break	
    
  case 'saycat':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
data = await fetchJson(`https://zahraz.herokuapp.com/api/saycat?apikey=zahraz`)
sads = await getBuffer(data.resultado)   
 shaa = `*Random Saycat*`
  sendButVideo(from, shaa, 'Clique no botão abaixo para obter um video aleatório da Saycat\n©' + ownername + '', sads, [{buttonId: `${prefix}saycat`, buttonText: {displayText: '⏩Proximo'}, type: 1}], {quoted: zahra2})			
  break	
    

case 'simi': //@zahra ♡
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('Onde está o texto, Acha que sou vidente?😤')
teks = body.slice(5)
anu = await simih(teks) 
reply(anu)
break

case 'welcome':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return (mess.only.admin) 
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`${prefix}welcome on ativar\n${prefix}welcome di matikan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*bem vindo está ativo!!*')
 _welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Bem-vindo ativado com sucesso🌱`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*Está desligado*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Recurso de Bem vindo desativado🍂`)
} else {
reply('*on para habilitar, off para desabilitar*')
}
break
case 'antilink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup && !isOwner) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
if (!q) return reply(`....`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Está ativo`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Antilink ativo com sucesso🌱')
} else if (args[0].toLowerCase() === 'off'){
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Antilink desativado com sucesso🍂')
} else {
reply(`on/off`)
}
break


 case 'antifake':
  try {
  if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
  if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  if (args.length < 1) return reply('Hmmmm')
if ((args[0]) === 'on') {
  if (isAntiFake) return reply('Aktif')
  antifake.push(from)
  fs.writeFileSync('./database/antifake.json', JSON.stringify(antifake))
  reply('Berhasil mengaktifkan fitur antifake di grup ini✔️')
} else if ((args[0]) === 'off') {
if (!isAntiFake) return reply('*Mati*')
  antifake.splice(from, 1)
  fs.writeFileSync('./database/antifake.json', JSON.stringify(antifake))
	reply('Berhasil menonaktifkan fitur antifake di grup ini✔️')
  } else {
  reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
 }
 } catch {
 reply('Ada kesalahan, coba lagi :/')
 }
  break
  
case 'infogp':
  zahra.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
 try {
	 ppimg = await zahra.getProfilePicture(from)
  } catch {
	 ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
	}   
  let buf = await getBuffer(ppimg)
  teks = (args.length > 1) ? body.slice(8).trim() : ''
  teks += `*Nama Grup :* ${groupName}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}\n*Deskripsi Grup :* ${groupDesc}`
  zahra.sendMessage(from, buf, image, {quoted: mek, caption: teks})
  break   
  

case 'add': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (args.length < 1) return reply('Masukkan nomor target')
if (args[0].startsWith('08')) return reply('Gunakan kode negara')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zahra.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan tujuan, mungkin karena private')
}
break

case 'add2':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let ids of entah) {
mems_ids.push(ido)
}
zahra.groupAdd(from, memu_ido)
} else {
zahra.groupAdd(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
zahra.groupAdd(from, [entah])
}
break

case 'promover':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memi_idi = []
for (let ids of entah) {
memi_idi.push(idi)
}
zahra.groupMakeAdmin(from, memi_idi)
} else {
zahra.groupMakeAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
zahra.groupMakeAdmin(from, [entah])
}
break
case 'demitir':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let idk of entah) {
memk_idk.push(idk)
}
zahra.groupDemoteAdmin(from, memk_idk)
} else {
zahra.groupDemoteAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
zahra.groupDemoteAdmin(from, [entah])
}
break


  case 'kk':
  case 'kick': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
zahra.groupRemove(from, M_exe)
} else {
zahra.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
zahra.groupRemove(from, [exe1])
reply(`Membro removido`)
}
break

case 'linkgrup':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
zahra.groupInviteCode(from)
.then((res) => reply('https://chat.whatsapp.com/' + res))
break
case 'fotogp': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const mediaa = await zahra.downloadAndSaveMediaMessage(encmedia)
await zahra.updateProfilePicture (from, mediaa)
  reply('Berhasil mengubah ikon Grup✔️')

break     

case 'setdesc': case 'setdesk':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 desc = args.join(' ')			  
await zahra.groupUpdateDescription(from, `${desc}`)
zahra.sendMessage(from, `Berhasil mengubah deskripsi grup✔`, text, { quoted: mek })
			break   

   case 'setname':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
zahra.groupUpdateSubject(idgrup, `${body.slice(8)}`)
zahra.sendMessage(from, 'Berhasil mengubah nama grup✔', text, {quoted: mek})
break 

  case 'tiktok': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})    
if (args.length === 0) return reply(`Coloque url amigo`)
  var hay= args.join(' ')
const captionsss = `*Escolha um formato para baixar*`
var thumbyt = await getBuffer(`https://telegra.ph/file/47abb7bfdbb3e5cd61eb4.jpg`)
sendButImage(from, captionsss, '© ' + ownername, thumbyt, [{buttonId: `${prefix}tiktokvideo ${hay}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `${prefix}tiktokaudio ${hay}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: ftrol})			
  break
  
  case 'tiktokaudio':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})    
if (args.length === 0) return reply(`Coloque url amigo`)
  var hay= args.join(' ')
  anu = await fetchJson(`https://zahraz.herokuapp.com/api/tiktok2?url=${hay}&apikey=${apikey}`)    		
 lagu = await getBuffer(anu.audio)
 zahra.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break 

case 'tiktokvideo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (args.length === 0) return reply(`Coloque url amigo`)
  var hay= args.join(' ')
  anu = await fetchJson(`https://zahraz.herokuapp.com/api/tiktok2?url=${hay}&apikey=${apikey}`) 		
 lagu = await getBuffer(anu.video)
zahra.sendMessage(from, lagu, video, {mimetype: 'video/mp4', quoted: mek})
   break
   
 

case 'play': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length === 0) return reply(`Qual nome da música mn?`)
  var hay= args.join(' ')
  anu = await fetchJson(`https://zahraz.herokuapp.com/api/yturl?quero=${hay}&apikey=${apikey}`)					
const captions = `*Data berhasil diperoleh*

➞ *Judul* : ${anu.titulo}
➞ *Menit* : ${anu.minutos}
➞ *Views* : ${anu.views}
➞ *Url* : ${anu.url}`
var thumbyt = await getBuffer(anu.imagem)
sendButImage(from, captions, '© ' + ownername, thumbyt, [{buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: ftrol})			
  break
  
   case 'play2':  
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})   
var hay= args.join(' ')
  anu = await fetchJson(`https://zahraz.herokuapp.com/api/playaudio?quero=${hay}&apikey=${apikey}`)
 buffer = await getBuffer(anu.thumb)  
 Iagu = await getBuffer(anu.baixar)
 fdsz = `*Data berhasil diperoleh*

➞ *Autor* : ${anu.canal}
➞ *Views* : ${anu.views}
➞ *Postado* : ${anu.postado}

*_zahra está baixando_* 🎶🎶`
 zahra.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fakeimage, caption: fdsz })
zahra.sendMessage(from, Iagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.titulo}️`, 'jpegThumbnail': await getBuffer(anu.thumb)}}}})
   break		  


case 'ytmp3':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply("url")
url = args.join(' ')
anu = await fetchJson(`https://zahraz.herokuapp.com/api/ytmp33?link=${url}&apikey=${apikey}`)
ytmp3 = await getBuffer(anu.link_baixar)
zahra.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break

case 'ytmp4':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply("url")
url = args.join(' ')
anu = await fetchJson(`https://zahraz.herokuapp.com/api/ytmp44?link=${url}&apikey=${apikey}`)
ytmp4 = await getBuffer(anu.link_baixar)
zahra.sendMessage(from, ytmp4, video, {thumbnail:Buffer.alloc(0), quoted:mek})
break


case 'pinterest':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!c) return reply('Oq você está procurando?')
reply(mess.wait) 
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break


default:
//Antilink
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
if (budy.includes("https://")){
sendButMessage(from, ` *GROUPO LINK DETECTADO*\n\nDesculpe, você será expulso deste grupo!`, `Clique abaixo para desligar`, [
{
buttonId: `${prefix}antilink off`,
buttonText: {
displayText: `Desativar antilink 🌱`,
},
type: 1,
}]);
zahra.groupRemove(from, [sender])
}
 
if(budy.includes("@verif", "@verify","daftar")){
if (isUser) return reply('Lu udah kedaftar di database')
addRegisterUser(sender, pushname, bio_user)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `Berhasil Mendaftar\n\n${a}📛 Nama  : ${pushname}\n#️⃣ Nomor : @${sender.split('@')[0]}\n💌 Bio: ${bio_user}\n\n*Verifikasi basis data ${botname}*`
footeregis = `Terima Kasih Sudah Mendaftar 🤗\n© ${botname} By ${ownername}`
butregis = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }
 ]
sendButLocation(from, teks, footeregis, fakezahra, butregis, {contextInfo: { mentionedJid: [sender]
}
})
}

if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}

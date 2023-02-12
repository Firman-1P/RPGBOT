let handler = async (m, {conn, command, args, usedPrefix}) => {
var time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const sections = [
    {
	title: 'KeikoBot-Whatsapp | ${time}',
	rows: [
{title: "💬┊Semua Perintah", rowId: '.allmenu', description: 'Menampilkan semua perintah bot' },
{title: "🗯️┊Perintah 2", rowId: '.menu2', description: 'Gunakan ini jika perintah utama error' },
]
    },{
    title: '- Main Menu -'
    rows:[
{title: "⚡┊Speed Bot", rowId: '.ping', description: 'Menampilkan kecepatan respon Bot' },
{title: "💹┊Donasi", rowId: '.donasi', description: 'Belikan owner Kopi' },
{title: "⏱️┊Runtime", rowId: '.runtime', description: 'Menampilkan info Runtime Bot' },
]
},{
    title: '- Informasi Mengenai Bot -',
    rows: [
{title: "👤┊Owner Bot", rowId: '.owner' },
{title: "📚┊Script Bot", rowId: '.sc' },
{title: "☕┊Info Bot", rowId: '.info' },
{title: "📢┊Group Bot", rowId: '.groupbot' },
{title: "🏷️┊Credit Bot", rowId: '.tqto' },
]
    },{
   title: '- Sewa Bot -'
   rows: [
{title: "┊Harga Sewa", rowId: '.sewa' },
{title: "┊List Fitur", rowId: '.fitur' },
{title: "┊Beli Premium", rowId: '.buyprem' }
]
    }]

let teks =`*Hai Kak @${m.sender.split`@`[0]} 👋*

Nama saya *Keiko* ,saya adalah *bot whatsapp* yang bisa membantu kaka seperti *Mendownload video dari Tiktok Tanpa Watermart, membuat sticker dan lain-lain*

Silahkan pilih menu dibawah ini ya kak✨`
const keiko = {
  text: teks,
  footer: 'KeikoBot-Whatsapp',
  buttonText: `Touch me Senpai^_^`,
  sections
}
await conn.sendMessage(m.chat, keiko, {quoted: fkontak})
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^menu$/i 

export default handler

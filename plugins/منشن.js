let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*👾~الرساله:* ${pesan}`
let teks = `*منشن👾 🌸 جماعي* \n\n ${oi}\n\n*🌿┇الجروب :⇣*\n`
for (let mem of participants) {
teks += `*👾↫* @${mem.id.split('@')[0]}\n`}
teks += `*𝔹 𝕃 𝔸 ℂ 𝐊 ℂ 𝔸 𝕋 BOT*\n\n*𝔸 𝔽 ℝ 𝕋 𝕆*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['منشن'l <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن)$/i
handler.admin = true
handler.group = true
export default handler

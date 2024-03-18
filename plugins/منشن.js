let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*:الرساله*\n${text ? `${text}\n` : ''}\n*رساله لروم* \n\n\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛾「 *تم التحديد* 」⛾', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['owner']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler


const handler = async (m, { conn, command }) => {
  if (!m.quoted) throw 'فين رسااه ال عتوز تمسحها';
  try {
    let bilek = m.message.extendedTextMessage.contextInfo.participant;
    let banh = m.message.extendedTextMessage.contextInfo.stanzaId;
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: banh, participant: bilek } });
  } catch {
    return conn.sendMessage(m.chat, { delete: m.quoted.vM.key });
  }
};

handler.help = ['حذف'];
handler.tags = ['owner'];
handler.command = /^(حذف)$/i;
handler.admin = true;

export default handler;

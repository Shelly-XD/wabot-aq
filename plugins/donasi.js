let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [6281313293689]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay , Dana [081313293689]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

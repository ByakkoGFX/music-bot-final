const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Cambia el volumen de la música",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("No está reproduciéndose nada.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("Necesitas estar en un canal de voz primero!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 The current volume is: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Por favor, utiliza un número para establecer el volumen").catch(console.error);
    if (Number(args[0]) > 100 || Number(args[0]) < 0 )
      return message.reply("Por favor, utiliza un número entre 0 y 100").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Volumen fijado a: **${args[0]}%**`).catch(console.error);
  }
};

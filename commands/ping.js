module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Muestra el ping actual del bot",
  execute(message) {
    message.reply(`📈 Average ping to API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};

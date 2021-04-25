const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Para añadir o invitar a DERZIS MUSIC a tu servidor",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**Interested by the functions of our bot**`)
      .setDescription(
        `**Entonces, ¿a qué estas esperando? Invítame ya!** \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id={client_id}&permissions=${permissions}&scope=bot)`
      )
      .setURL(
        `https://discord.com/oauth2/authorize?client_id={client_id}&permissions=${permissions}&scope=bot`
      )
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};

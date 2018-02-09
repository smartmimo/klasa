const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			            runIn: ['text'],

			description: "Kicks someone from the server."
		});
	}
	async run(msg) {
		const arg = msg.content.slice("1").trim().split(/ +/g);
			const command = arg.shift().toLowerCase();
			if(!msg.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
			return msg.reply("Sorry, you don't have permissions to use this!");
 
			let member = msg.mentions.members.first();
			if(!member)
			return msg.reply("Please mention a valid member of this server");
			if(!member.kickable) 
			return msg.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
			let reason = arg.slice(1).join(' ');
			if(!reason)
			return msg.reply("Please indicate a reason for the kick!");
    
			await member.kick(reason)
			.catch(error => msg.reply(`Sorry ${msg.author} I couldn't kick because of : ${error}`));
			msg.reply(`${member.user.tag} has been kicked by ${msg.author.tag} because: ${reason}`);
}}
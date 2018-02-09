const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			            runIn: ['text'],

			description: "Bans someone from the server."
		});
	}
	async run(msg) {
		const arg = msg.content.slice("1").trim().split(/ +/g);
			const command = arg.shift().toLowerCase();
		if(!msg.member.roles.some(r=>["Administrator"].includes(r.name)) )
			return msg.reply("Sorry, you don't have permissions to use this!");
    
			let memberr = msg.mentions.members.first();
			if(!memberr)
			return msg.reply("Please mention a valid member of this server");
			if(!memberr.bannable) 
			return msg.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

			let reasonn = arg.slice(1).join(' ');
			if(!reasonn)
			return msg.reply("Please indicate a reason for the ban!");
    
			await memberr.ban(reasonn)
			.catch(error => msg.reply(`Sorry ${msg.author} I couldn't ban because of : ${error}`));
			msg.reply(`${memberr.user.tag} has been banned by ${msg.author.tag} because: ${reasonn}`);
}}
const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: "Deletes the provided number of messages."
		});
	}
	async run(msg) {
		const arg = msg.content.slice("1").trim().split(/ +/g);
			const command = arg.shift().toLowerCase();
const deleteCount = parseInt(arg[0], 10);
    
			if(!deleteCount || deleteCount < 2 || deleteCount > 100)
			return msg.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
		
			const fetched = await msg.channel.fetchMessages({count: deleteCount});
			msg.channel.bulkDelete(fetched)
			.catch(error => msg.reply(`Couldn't delete messages because of: ${error}`));
	}
}
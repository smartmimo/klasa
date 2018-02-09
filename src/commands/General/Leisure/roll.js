const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: "An infinite dice"
		});
	}
	async run(msg) {
			const arg = msg.content.slice("1").trim().split(/ +/g);
			const command = arg.shift().toLowerCase();
			let min = parseInt(arg[0]);
			let max = parseInt(arg[1]);
			if (!min || !max) return msg.reply("Please provide two numbers");

			else {
				var num = Math.floor(Math.random() * (max - min) + min); 
				msg.reply(num);
			}
}}
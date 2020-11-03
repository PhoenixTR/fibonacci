var Discord = require("discord.js");
const config = require('./config.json');
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
let prefix = config.prefix;

client.on("message", msg => {
      const args = msg.content.slice(prefix.length).split(" ");
      const command = args.shift().toLowerCase();
  if (msg.author.bot) return;
if (msg.content.startsWith(prefix)) {
var inputToProcess = input-2;
var i;
var newNumber=1;
var oldNumber=1;
var oldDuplicate;
for (i = 0; i < inputToProcess; i++) {
  oldDuplicate = oldNumber;
  oldNumber = newNumber;
  newNumber = newNumber+oldDuplicate;
}
console.log(newNumber)
}
});


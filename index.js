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
  if(command === "fibonacci"){
  let input = args[0]
  if(input == 0){
  msg.channel.send("0")
  }
    else if(input < 0){
    msg.channel.send("Input cannot be smaller than 0")
    }
    else{
  let inputToProcess = input-2;
  let i;
  let newNumber=1;
  let oldNumber=1;
  let oldDuplicate;
  for (i = 0; i < inputToProcess; i++) {
    oldDuplicate = oldNumber;
    oldNumber = newNumber;
    newNumber = newNumber+oldDuplicate;
  }
  msg.channel.send(newNumber)
 }
 }
 }
});


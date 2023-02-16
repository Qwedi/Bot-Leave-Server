const Discord = require("discord.js");
const config = require("./config.js")
const client = new Discord.Client({ intents: 98045 });

const token = config.token;
const members = config.members;

client.on("ready", async () => {
    client.guilds.cache.forEach(guild => {
        const memberCount = guild.members.cache.filter(member => !member.user.bot).size
    
        if (memberCount < members) {
            guild.leave()
            console.log(`Выхожу с ${guild.name}! Там было ${memberCount} участников.`)
        }
    })
});

client.login(token)
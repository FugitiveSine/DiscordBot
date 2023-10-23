require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})
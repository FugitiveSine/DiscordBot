require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

const roles = [
    {
        id: '1164960081314599034' ,
        label: 'Red',
    },
    {
        id: '1164960205939937291' ,
        label: 'Blue',
    },
    {
        id: '1164960265478078494' ,
        label: 'Green',
    },

]

client.on('ready' , async (c) => {
    try {
        const channel = await client.channels.cache.get('1164959329603031060');
        if(!channel){
            return;
        } 

        const row = new ActionRowBuilder();
        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )
        }
        )
        await channel.send({
            content: 'Claim or remove a role below.',
            components: [row],
        });
        process.exit();
    } catch (error) {
        console.log(error);
        
    }
})
client.login(process.env.TOKEN);

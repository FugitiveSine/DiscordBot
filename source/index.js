require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

eventHandler(client);

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()){
        return;
    }
    if (interaction.commandName === 'add'){//listens for the command add
         const num1 = interaction.options.get('first-number').value;
         const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The sum is ${num1 + num2}`);

    }
    if (interaction.commandName === 'ping'){//listens for the command ping
        interaction.reply('pong');
    }
    if (interaction.commandName === 'embed'){//listens for the /embed command and then creates an embed with the properties below
        const embed = new EmbedBuilder()
        .setTitle('Embed title')
        .setDescription('This is an embed description')
        .setColor('Random')
        .addFields(
            {name: 'Field title', 
            value: 'Some random value', 
            inline: true,
            },
            {name: '2nd Field title', 
            value: 'Some random value', 
            inline: true,

            },

            );

        interaction.reply({embeds: [embed] });
    }
});

client.on('messageCreate', (message) => {

    if(message.author.bot) {
        return;
    }
})

client.on('interactionCreate', async (interaction) => {//creates option to assign roles
   try {
    
    await interaction.deferReply({ ephemeral: true});

    const role = interaction.guild.roles.cache.get(interaction.customId);
    if(!role) {
        await interaction.editReply({
            content: 'I could not find that role',
        })
        return;
    }
    const hasRole = interaction.member.roles.cache.has(role.id);
    if(hasRole){
        await interaction.member.roles.remove(role);
        await interaction.editReply(`The role ${role} has been removed.`);
        return;
    }
    await interaction.member.roles.add(role);
    await interaction.editReply(`The role ${role} has been added.`);

   } catch (error) {
    console.log(error);
   }
});

client.login(process.env.TOKEN);


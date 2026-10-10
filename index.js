client.on("interactionCreate", async interaction => {
    if (interaction.commandName === "hello") {
        await interaction.reply("こんにちは");
    }
});

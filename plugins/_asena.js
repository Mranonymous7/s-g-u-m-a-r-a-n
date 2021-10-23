/* Copyright (C) 2020 Yusuf Usta.jid = message.isGroup
      ? message.reply_message == false && message.mention == false
        ? message.jid
        : !message.reply_message
        ? message.mention[0]
        : message.reply_message.jid
      : message.jid;
    if (match.startsWith("stop")) {
      let chat = await getLydia(jid);
      if (!chat)
        return await message.sendMessage(
          Lang.L_NOT_ACTIVATED.format(await getName(jid, message.client))
        );
      await setLydia(jid, false);
      return await message.sendMessage(
        Lang.L_DEACTIVATED.format(await getName(jid, message.client))
      );
    }
    await setLydia(jid, true);
    return await message.sendMessage(
      Lang.L_ACTIVATED.format(await getName(jid, message.client))
    );
  }
);

Asena.addCommand({ on: "text", fromMe: false }, async (message, match) => {
  let chat = await lydia(message);
  if (!chat) return;
  return await message.sendMessage(chat, { quoted: message.data });
});

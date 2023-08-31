export const newMessageHandler = (client) => {
  client.on("message", async (message) => {
    //check whether the current chat is the chit group
    const chat = await message.getChat();
    const groupNameRegex: RegExp =
      /^(?:[1-9]\d{0,3}|[1-9]\d{0,4}|[1-9]\d{0,5})M\*(?:[1-9]\d{0,4}|[1-9]\d{0,5})K=(?:[1-9]\d{0,5}|[1-9]\d{0,6})L-StDt-(?:[1-9]|[12]\d|3[01])-([1-9]|1[0-2])-(202[3-9]|2030)$/;

    if (groupNameRegex.test(chat)) {
      console.log("Received message in the group", chat.name);
      //match the message for number,number+'k'
      const bidAmountRegex = /^(\d+(\.\d+)?|(\d+(\.\d+)?)[kK])$/;
      const bidAmountValue = bidAmountRegex.test(message.body)
        ? parseFloat(message.body)
        : null;

      if (bidAmountValue) {
        console.log("Current bid is", bidAmountValue);
      }
    }
  });
};

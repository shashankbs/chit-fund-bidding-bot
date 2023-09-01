import { Chat, Client, Contact, Message } from "whatsapp-web.js";

let currentHighestBid: number = 0;
let bidding: boolean = true;

export const newMessageHandler = (client: Client) => {
  client.on("message", async (message: Message) => {
    const chat: Chat = await message.getChat();
    if (bidding) {
      await startBiddingProcess(chat, message);
    }
  });
};

const startBiddingProcess = async (chat: Chat, message: Message) => {
  const groupNameRegex: RegExp =
    /^(?:[1-9]\d{0,3}|[1-9]\d{0,4}|[1-9]\d{0,5})M\*(?:[1-9]\d{0,4}|[1-9]\d{0,5})K=(?:[1-9]\d{0,5}|[1-9]\d{0,6})L-StDt-(?:[1-9]|[12]\d|3[01])-([1-9]|1[0-2])-(202[3-9]|2030)$/;

  if (groupNameRegex.test(chat.name)) {
    console.log("Received message in the group", chat.name);

    const bidAmountRegex: RegExp = /^(\d+(\.\d+)?|(\d+(\.\d+)?)[kK])$/;
    const bidAmountValue: number = bidAmountRegex.test(message.body)
      ? parseFloat(message.body)
      : null;

    const bidAmount: number =
      bidAmountValue.toString().length >= 5 &&
      bidAmountValue.toString().indexOf(".") == -1
        ? bidAmountValue
        : bidAmountValue * 1000;

    if (bidAmount) {
      console.log("Current bid is", bidAmountValue);
      if (bidAmount < currentHighestBid) {
        message.reply(
          "Please ensure you bid" +
            bidAmount +
            " is greater than the highest bid amount of " +
            currentHighestBid
        );
        return;
      }
      currentHighestBid =
        bidAmount > currentHighestBid ? bidAmount : currentHighestBid;
      setTimeout(
        async () => await chat.sendMessage(currentHighestBid + " once"),
        120000
      );
      setTimeout(
        async () => await chat.sendMessage(currentHighestBid + " twice"),
        120000
      );
      await chat.sendMessage("Any more bid from anyone?");
      await chat.sendMessage("Will wait for 2 mins and then close");

      setTimeout(async () => {
        await chat.sendMessage(currentHighestBid + " thrice");
        bidding = false;
      }, 120000);

      const contact: Contact = await message.getContact();

      chat.sendMessage(`${contact.id.user}, this month's chit is yours.`, {
        mentions: [contact],
      });
    }
  }
  bidding = false;
};

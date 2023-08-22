const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return thankYouMessages;
}

const event = "surprise";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);

function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
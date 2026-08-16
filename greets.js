const greets = [
   "Today is your best day.",
  "You're closer to your goals than yesterday.",
  "Great things start with small actions.",
  "This is a good day to make progress.",
  "You've got everything you need to succeed.",
  "Every step you take moves you forward.",
  "Make today count.",
  "Your future starts with what you do today.",
  "what you do today can improve all your tomorrows.",
  "Believe in yourself and all that you are.",
  "You are capable of amazing things.",
  "Don't wait for opportunity. Create it.",
  "You are enough just as you are.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The best way to predict the future is to create it.",
  "Do not watch the clock. Do what it does. Keep going.",
  "The secret of getting ahead is getting started.",
  "do not wait to strike till the iron is hot; but make it hot by striking.",
  "great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "do not go where the path may lead, go instead where there is no path and leave a trail.",
  "",
];

function randomGreets() {
    const index = Math.floor(Math.random() * greets.length);
    return greets[index];
}

module.exports = { randomGreets, greets };


const messages = [
  "Sunbeam collector: currently charging tiny paws for optimal cuteness.",
  "Leaf-rolling champion just achieved a personal best (again).",
  "Tail fluffed to maximum capacity—handle with joy!",
  "Snack detective reports: bamboo stash secured, morale high.",
  "Micro-nap scheduled in 3... 2... just kidding, already snoozing.",
  "Went up the tree for the view, stayed for the dramatic tail swish.",
  "Found a new favorite rock to sit on. Vibes are immaculate.",
  "Practicing stealth mode: invisible in spirit, adorable in fact.",
  "Tea kettle whistle? Nope, that’s just the happy red panda chirp.",
  "Attempted a roly-poly. Spun. Dizzy. Would 10/10 do again.",
  "Mood forecast: 100% chance of cuddles with scattered bamboo crumbs.",
  "Tail serving as personal blanket. Comfort level: legendary.",
  "Zoomies achieved escape velocity. Mission: unstoppable glee."
];

function getRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

function updateMessage() {
  const messageBox = document.getElementById('message');
  messageBox.textContent = getRandomMessage();
}

const button = document.getElementById('mood-button');
button.addEventListener('click', updateMessage);

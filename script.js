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

const pandaImages = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Panda.JPG?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Red_pandas_playing.jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Panda_(29453245880).jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Panda_(27806275479).jpg?width=1200"
];

function getRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

function updateMessage() {
  const messageBox = document.getElementById('message');
  messageBox.textContent = getRandomMessage();
}

let currentImageIndex = -1;

function getRandomImageIndex() {
  if (pandaImages.length <= 1) return 0;

  let newIndex = Math.floor(Math.random() * pandaImages.length);
  while (newIndex === currentImageIndex) {
    newIndex = Math.floor(Math.random() * pandaImages.length);
  }
  return newIndex;
}

function updatePandaImage() {
  const pandaImg = document.getElementById('panda-img');
  const nextIndex = getRandomImageIndex();

  currentImageIndex = nextIndex;
  pandaImg.src = pandaImages[nextIndex];

  pandaImg.classList.remove('animate');
  // Force reflow to restart the animation
  void pandaImg.offsetWidth;
  pandaImg.classList.add('animate');
}

function handleMoodReveal() {
  updateMessage();
  updatePandaImage();
}

const button = document.getElementById('mood-button');
button.addEventListener('click', handleMoodReveal);

updatePandaImage();

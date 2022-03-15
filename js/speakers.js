const speakersData = [
  {
    id: 1,
    name: 'JOSH KING',
    photo: 'images/speakers/mini1.jpeg',
    description: 'CEO of King global energies',
    about: 'King is the CEO of the Biggest Energy supplier in the world',
  },
  {
    id: 2,
    name: 'Ahmed Shakur',
    photo: 'images/speakers/mini3.jpeg',
    description: 'Minister of Energy',
    about: 'He is the minister for energy in dubai',
  },
  {
    id: 3,
    name: 'Elsie White',
    photo: 'images/speakers/mini6.jpeg',
    description: 'President of Cyprus',
    about: 'She is the sitting president for Cyprus and has passed many bills for the country',
  },
  {
    id: 4,
    name: 'Abdi Abdul',
    photo: 'images/speakers/mini5.jpeg',
    description: 'CEO of Total enrgies',
    about: 'Abdi is the CEO of the biggest petrol station in the world',
  },
  {
    id: 5,
    name: 'Vanessa Maz',
    photo: 'images/speakers/mini8.jpeg',
    description: 'Minister of Energy U.K',
    about: 'Maz is the minister of enegy in UK',
  },
  {
    id: 6,
    name: 'Edie Abuda',
    photo: 'images/speakers/mini2.jpeg',
    description: 'Energy Ethics Professor',
    about: 'Edie is an Energy Ethics Professor at Havard',
  },
];

const speakersBody = document.querySelector('.speaker-list');
const seeMoreButton = document.querySelector('.see-more');
// add speakers dynamically to page
speakersData.forEach((speaker) => {
  speakersBody.innerHTML
  += `
    <div id = "${speaker.id}" class="speaker">
      <span class="speaker-img">
        <img src=${speaker.photo} alt="Paystack, CEO">
      </span>
      <div class="speaker-details">
        <h5 class="color-2 font-2">${speaker.name}</h5>
        <p class="color-1 font-1 description">${speaker.description}</p>
        <div class="dash"></div>
        <p class="about font-2 color-2">
          ${speaker.about}
        </p>
      </div>
    </div> `;
});

const seeLess = (hidespeaker) => {
  if (Number(hidespeaker.id) > 2) {
    hidespeaker.classList.add('see-less');
  }
};

const removeSeeMore = (openSpeaker) => {
  seeMoreButton.addEventListener('click', () => {
    openSpeaker.style.display = 'grid';
    seeMoreButton.style.display = 'none';
  });
};

const seeMore = () => {
  const speakerList = document.querySelectorAll('.speaker');
  speakerList.forEach((speaker) => {
    seeLess(speaker);
    removeSeeMore(speaker);
  });
};
seeMore();

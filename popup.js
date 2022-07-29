let ProjectDetails = [];
const MyProjects = document.querySelector('.cards');
let ShowProjects = '';
const PopupMenu = document.querySelector('.Main-Popup');
// array object containing data for the page rendering.
ProjectDetails = [
  {
    id: '0',
    name: 'School Management',
    live_version: 'http://eldiamontessori.com',
    description: 'A School Website build for Eldia Montessori.',
    featured_image: 'works-img/3.png',
    // eslint-disable-next-line no-dupe-keys
    live_version: 'http://eldiamontessori.com',
    source: 'https://github.com/afiamoah',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    id: '1',
    name: 'Frankgina Company',
    description:
              'A website build for Frankgina Company for their product advertizement.',
    featured_image: 'works-img/Placeholder.png',
    live_version: 'https://frankgina.com.gh',
    source: 'https://github.com/afiamoah',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    id: '2',
    name: 'HackWell Int.School',
    featured_image: 'works-img/cards.png',
    description: 'A website build for HackWell Int. School  for their School.',
    live_version: 'https://www.babylontruckingllc.com',
    source: 'https://github.com/learnwithalfred',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    id: '3',
    name: 'The Suayebi Project',
    featured_image: 'works-img/image.png',
    description: 'An Educational Website for Learning. ',
    live_version: 'https://www.suayebi.com',
    source: 'https://github.com/afiamoah',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    id: '4',
    name: 'babylontruck website',
    featured_image: 'works-img/2.png',
    description: 'A freelance project built for babylon logistics company. ',
    live_version: 'https://www.babylontruckingllc.com',
    source: 'https://github.com/afiamoah',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    id: '5',
    name: 'Christ Model Academy',
    live_version: 'http://christmodel.academy',
    description: 'A School Website build for Christ model Academy.  ',
    featured_image: 'works-img/3.png',
    source: 'https://github.com/learnwithalfred',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
  },
];

// the card section where data is rendered dynamically to show projects.his
//  section uses template driving to render the page.
ProjectDetails.forEach((data) => {
  ShowProjects += `
        <div class="work-title1">
        <div class="hide-card">
          <div>
            <h2>${data.name}</h2>
            <p class="work-description">
            ${data.description}
            </p>
          </div>
          <ul class="codes">
            <li class="box">${data.technologies[0]}</li>
            <li class="box">${data.technologies[1]}</li>
            <li class="box">${data.technologies[2]}</li>
          </ul>
        </div>
        <div class="button-area">
          <button id="${data.id}" type="button"  class="button">See Project</button>
        </div>
      </div>`;
  MyProjects.innerHTML = ShowProjects;
});

const showitem = document.querySelectorAll('.button');
const openitem = document.querySelector('.Main-Popup');
const overlay = document.querySelector('#overlay');

showitem.forEach((data) => {
  data.addEventListener('click', (event) => {
    const Index = Array.from(showitem).indexOf(event.target);
    PopupMenu.innerHTML = `
        <header class="head">
        <div class="top-items">
        <h1 class="header-1" id="hd-1">${ProjectDetails[Index].name}</h1>
        <h1 class="header-2" id="hd-2">${ProjectDetails[Index].name}</h1>
        <button onclick="closePopup()" class="remove-btn"><span  class="close-Icon">&times;</span></button>
        </div>
        <nav class="nav-bar">
        <ul>
        <li><a href="">html</a></li>
        <li><a href="">Bootstrap</a></li>
        <li><a href="">Ruby on rails</a></li>
        </ul>
        </nav>
       </header>
       <div class="main-section">
       <section class="section-mobile" style="background-image: url(${ProjectDetails[Index].featured_image});"></section>
        <section class="section-1"><img src="${ProjectDetails[Index].featured_image}" width=659 height=448 alt=""></section>
        
        <section class="section-2">
            <div class="description">
                <p class="details">${ProjectDetails[Index].description}</p>
                      <p class="details-2">${ProjectDetails[Index].description}</p>
            </div>
          
            
            <div class="live-section">             
                <ul>
                    <li><a href="${ProjectDetails[Index].live_version}">See Live</a>
                        <img class="icon-image" src="black-social/Export.png" alt="live view icon"></li>
                        <li><a href="">See Source</a>
                            <img class="icon-image" src="black-social/Vector.png" alt="live view icon"></li>
                    
                 
                </ul>                         
            </div>
        </section>
    
    </div>
        `;
    openitem.classList.add('show');
    overlay.classList.add('active');
  });
});

// this function closes the popup menu after clicking on the close button
// eslint-disable-next-line no-unused-vars
function closePopup() {
  const closeBtn = document.querySelector('.remove-btn');
  closeBtn.addEventListener('click', () => {
    openitem.classList.remove('show');
    overlay.classList.remove('active');
  });
}

// overlay removed after a click
overlay.addEventListener('click', () => {
  openitem.classList.remove('show');
  overlay.classList.remove('active');
});

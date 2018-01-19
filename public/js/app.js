const mainMenu = document.getElementById('mainMenu');
const main = document.getElementById('main');

buildNav(mainMenu);
function getReddit(url) {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
    let parseData = JSON.parse(this.response);
    buildSquares(parseData, main);
  });
  oReq.open("GET", url);
  oReq.send();
};

function buildNav(mainMenu) {
  let navContainer = document.createElement('div');

  let header = document.createElement('header');
  header.className = 'header';
  navContainer.appendChild(header);

  let menu = document.createElement('ul');
  menu.className = 'menu';
  navContainer.appendChild(menu);

  let menuA = document.createElement('li');
  menuA.className = 'menuA';
  menu.appendChild(menuA);
  menuA.innerText = 'POLAROID';
  menuA.addEventListener('click', function () {
    getReddit(
      'https://www.reddit.com/r/Polaroid.json')
  });

  let menuB = document.createElement('li');
  menuB.className = 'menuB';
  menu.appendChild(menuB);
  menuB.innerText = 'EYE CANDY';
  menuB.addEventListener('click', function () {
    getReddit(
      'https://www.reddit.com/r/EyeCandy.json')
  });

  let menuC = document.createElement('li');
  menuC.className = 'menuC';
  menu.appendChild(menuC);
  menuC.innerText = 'BANKSY';
  menuC.addEventListener('click', function () {
    getReddit(
      'https://www.reddit.com/r/Banksy.json')
  });

  mainMenu.appendChild(navContainer);
};

function buildSquares(data, parentElem) {

  let collection = document.createElement('div');
  collection.className = 'collection';

  let dataType = data.data.children;

  dataType.forEach(function (element) {

    let square = document.createElement('div');
    square.className = 'square';
    collection.appendChild(square);

    let picture = document.createElement('img');
    picture.className = 'picture';

    
    if (element.data && element.data.preview && element.data.preview.images[0] && element.data.preview.images[0].source && element.data.preview.images[0].source.url) {
      let pictureUrl = element.data.preview.images[0].source.url;
      picture.setAttribute('src', pictureUrl)
    } else {
      picture.setAttribute('src', 'https://placekitten.com/g/200/300')
    }

    square.appendChild(picture);

    let titleData = element.data.title;

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = titleData;
    square.appendChild(title);

    let authorData = element.data.author;

    let author = document.createElement('div');
    author.className = 'author';
    author.innerHTML = authorData;
    square.appendChild(author);

    let dataLink = element.data.url;

    let link = document.createElement('a');
    link.className = 'link';
    link.setAttribute('href', dataLink);
    square.appendChild(link);



  });
  parentElem.innerHTML = '';
  parentElem.appendChild(collection);
};


getReddit('https://www.reddit.com/r/Polaroid.json');






const main = document.getElementById('main');

function getReddit(url) {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
    let parseData = JSON.parse(this.response);
    info(parseData, main);
  })
  oReq.open("GET", url);
  oReq.send();
}

function info(data, parentElem) {
  let dataType = data.data.children;
  let header = document.createElement('div');
  header.className = 'header';
  main.appendChild(header);
  let menu = document.createElement('ul');
  menu.className = 'menu';
  main.appendChild(menu);
  menu.innerHTML = 'hello';
  

dataType.forEach(function (element) {
    let collection = document.createElement('div');
    collection.class = 'collection';
    main.appendChild(collection);
    let square = document.createElement('div');
  square.className = 'square';
  main.appendChild(square);
  
    
    const previewPic = element.data.preview;
  
    let picture = document.createElement('img');
    picture.className = 'picture';
    picture.setAttribute('src', element.data.preview.images[0].source.url);
    square.appendChild(picture);

    picture.onerror = function () {
      picture.src = 'https://i.pinimg.com/236x/f8/c4/26/f8c426b31441087f93b0f8d2cf48b266--happy-puppy-puppy-love.jpg';
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

  let link = document.createElement('div');
  link.className = 'link';
  link.innerHTML = element.data.url;
  square.appendChild(link);

  let post = document.createElement('div');
  post.className = 'post';
  post.innerHTML = element.data.post;
  square.appendChild(post);
  })
}


getReddit('https://www.reddit.com/r/Banksy/.json');


//     let title = element.data.title;
//     let link = element.data.url;
//     let post = document.createElement('div');
//     post.className = 'post';
//     document.getElementById('postList').appendChild(post);
//     post.innerHTML = title + author + link;
//     // rectangle.innerHTML = title + author;

// let menu = document.createElement('ul');
// menu.className = 'menu';
// main.appendChild(menu);
// menu.innerHTML;

// let menuA = document.createElement('il');
// menuA.className = 'menuA';
// menu.appendChild(menuA);
// menuA.innerHTML = 'RANDOM';

// let menuB = document.createElement('il');
// menuB.className = 'menuB';
// menu.appendChild(menuB);
// menuB.innerHTML = 'MY BOARDS';

// let menuC = document.createElement('il');
// menuC.className = 'menuC';
// menu.appendChild(menuC);
// menuC.innerHTML = 'GET THE APP';

// let container = document.createElement('div');
// container.className = 'container';
// main.appendChild(container);
// container.innerHTML;

// let square = document.createElement('div');
// square.className = 'square';
// container.appendChild(square);
// square.innerHTML = 'article';

// let square2 = document.createElement('div');
// square2.className = 'square2';
// container.appendChild(square2);
// square2.innerHTML = 'article2';

// let square3 = document.createElement('div');
// square3.className = 'square3';
// container.appendChild(square3);
// square3.innerHTML = 'article3';

// let square4 = document.createElement('div');
// square4.className = 'square4';
// container.appendChild(square4);
// square4.innerHTML = 'article4';

// let rectangle = document.createElement('div');
// rectangle.className = 'rectangle';
// square.appendChild(rectangle);
// rectangle.innerHTML = 'article';

// let rectangle2 = document.createElement('div');
// rectangle2.className = 'rectangle2';
// square.appendChild(rectangle2);
// rectangle2.innerHTML = 'article';

// let oReq = new XMLHttpRequest();
// // oReq.addEventListener('load', info);
// // oReq.open('GET', 'https://www.reddit.com/r/Banksy/.json');
// // oReq.send();

// function info() {
//   let info = JSON.parse(this.responseText);
//   let data = info.data.children;

//   data.forEach(function(element) {
//     let author = element.data.author;
//     let title = element.data.title;
//     let link = element.data.url;
//     let post = document.createElement('div');
//     post.className = 'post';
//     document.getElementById('postList').appendChild(post);
//     post.innerHTML = title + author + link;
//     // rectangle.innerHTML = title + author;
//     // rectangle2.innerHTML = link;
//     if(element.data && element.data.preview && element.data.preview.images && element.data.preview.images.source && element.data.preview.images.source.url) {
//       return element.data.preview.images[0].source.url
//     } else {

//     }
//     // let picture = document.createElement('img');
//     // picture.className = 'picture';
//     // picture.setAttribute('src', element.data.preview.images[0].source.url);

//   })

// };






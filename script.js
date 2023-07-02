let posts = [
    {
        'profileImg': 'img/img_person03.jpg',
        'author': 'Jenny Schmidt',
        'location': 'Oldenwald',
        'image': 'img/sunset01.jpg',
        'likes': 1789,
        'description': 'Wunderschöne Lanschaft und Sonnen Untergang!',
        'comments': [],
    },
    {
        'profileImg': 'img/img_person12.jpg',
        'author': 'Phong Ngweyan',
        'location': 'Hanoi',
        'image': 'img/img_food02.jpg',
        'likes': 900,
        'description': 'Delicious Seefoods in down town.',
        'comments': [],
    },
    {
        'profileImg': 'img/img_person10.jpg',
        'author': 'Guiseppe Martines',
        'location': 'Florenz',
        'image': 'img/img_sport03.jpg',
        'likes': 3000,
        'description': 'Enjoying jogging the whole morning long!',
        'comments': [],
    },
    {
        'profileImg': 'img/img_person15.jpg',
        'author': 'Dennis Lucian',
        'location': 'Ecuador',
        'image': 'img/banana.jpg',
        'likes': 1200,
        'description': 'Visited my relative at the farm in Ecuador.',
        'comments': [],
    },
    {
        'profileImg': 'img/img_person04.jpg',
        'author': 'Vivian Kapana',
        'location': 'Berlin',
        'image': 'img/img_food01.jpg',
        'likes': 2800,
        'description': 'Lecker Nudel auf dem Markt :)',
        'comments': [],
    },
];

function render() {
    let content = document.getElementById('postContainer');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content.innerHTML += /*html*/`
    <div class="card">
        <div class="cardHead">
            <img src="${post['profileImg']}" >
            <div class="cardTitle">
                <h2>${post['author']}</h2>
                <span>${post['location']}</span>
            </div>
        </div>
    
        <img class="postImage" src="${post['image']}">

        <div class="iconsContainer"> 
            <span class="leftIcons">
                <img class="clickableIcon" id="heartIcon${i}" src="img/heart.png" onclick="addLike('${i}')">
                <img src="img/message.png">
                <img src="img/sprechblase.png">
            </span>
            <span>
                <img class="clickableIcon" id="bookMark${i}" src="img/bookmark_black.png" onclick="addBookMark('${i}')">
            </span>
        </div>

        <div id="likes${i}" class="likes"><b>Gefällt ${post['likes']} Mal</b></div>

        <div class="description">
            <span><b>${post['author']}:</b> </span>
            <span>${post['description']}</span>
        </div>

        <div class="comments" id="commentContent${i}"></div>

        <div class="cardTextField">
            <input id="commentInput${i}" placeholder="Kommentar">
            <button onclick ="addComment('${i}')">Posten</button>
        </div>
    </div>
    `;

        let comments = document.getElementById(`commentContent${i}`);

        for (let j = 0; j < post[`comments`].length; j++) {
            const comment = post[`comments`][j];
            load(j);

            comments.innerHTML += `<div><b>Ye Htut Aung:</b> ${comment}</div>`;
        }
    }

}

function save(i) {
    let saveCommentsAsText = JSON.stringify(posts[i]['comments']);
    localStorage.setItem(`post[${i}]`, saveCommentsAsText);
}

function load(i) {
    let saveCommentsAsText = localStorage.getItem(`post[${i}]`);
    if(saveCommentsAsText) {
        posts[i]['comments'] = JSON.parse(saveCommentsAsText);
    }
}

function addComment(i) {
    let input = document.getElementById(`commentInput${i}`);
    posts[i]['comments'].push(input.value);
    save(i);
    render();
    input = '';
}


function addLike(i) {
    let heart = document.getElementById(`heartIcon${i}`);
    let heartEmpty = 'img/heart.png';
    let heartFilledRed = 'img/heart_red.png';
    
    let like = document.getElementById(`likes${i}`);

    if(heart.getAttribute("src") === heartEmpty) {
        heart.setAttribute("src", heartFilledRed);
         let updatedLikes = posts[i]['likes'] + 1;
         like.innerHTML = `<b>Gefällt ${updatedLikes} Mal</b>`;
    }else {
        heart.src = heartEmpty;
        let likesOldNumber = posts[i]['likes'] - 0;
        like.innerHTML = `<b>Gefällt ${likesOldNumber} Mal</b>`;
    }
}


function addBookMark(i) {
    let bookMarked = document.getElementById(`bookMark${i}`);
    let bookMarkEmpty = 'img/bookmark_black.png';
    let bookMarkFilled = 'img/bookmark_filled_red_orange.png';

    if(bookMarked.getAttribute("src") === bookMarkEmpty){
        //bookMarked.setAttribute("src", bookMarkFilled);
        bookMarked.src = bookMarkFilled;
    }else {
        bookMarked.src = bookMarkEmpty;
    }
}

// Buttons mit der Klasse "demo-button" auswählen
var buttons = document.getElementsByClassName("demo-button");
// Klickereignis-Listener für jeden Button hinzufügen
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    alert("Dies ist eine Demo-Version. Die Funktion ist in der Demo deaktiviert.");
  });
}
'use strict'

var PHOTOS_NUMBER = 25;

var MIN_COMMENTS_AMOUNT = 2;
var MAX_COMMENTS_AMOUNT = 10;

var MIN_LIKES_AMOUNT = 15;
var MAX_LIKES_AMOUNT = 200;

var COMMENTS_TEXT = [
"Всё отлично!",
"В целом все неплохо. Но не всё.",
"Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
"Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
"Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
"Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

var DESCRIPTION_TEXT = [
"Тестим новую камеру!",
"Затусили с друзьями на море",
"Как же круто тут кормят",
"Отдыхаем...",
"Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
"Вот это тачка!"
];

var NAMES = [
'Alex',
'Vadim',
'Sergey',
'Ilya',
'Alexander',
'Mark',
'Alina',
'Veronika',
'Vika',
'Karina',
'David',
'Evgeniy',
'Egor',
'Igor',
'Sasha',
'Vlad',
'Mikhail',
'Max',
'Artur',
'Artyom',
'Irina',
'Arseniy',
'Ivan',
'Uriy',
'Anna',
'Vladimir',
];

var photos = [];

var getRandomNumber = function(min, max) {
  return Math.floor(Math.random () * (max - min)) + min;
}

for (var i = 0; i < PHOTOS_NUMBER; i++) {
      var randomName = NAMES[getRandomNumber(0, NAMES.length)];
      var randomCommentsNumber = getRandomNumber(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT);

      function renderComments() {
         var comments = [];

         for (var x = 0; x < randomCommentsNumber;x++){
            comments.push(COMMENTS_TEXT[getRandomNumber(0,COMMENTS_TEXT.length)]);
         }

         return comments;
      } 
   

      var  randomDescription = [];
      var  randomDescriptionNumber = getRandomNumber();
   for (var J = 0; J < randomCommentsNumber; J++) {
      randomDescription[J] = DESCRIPTION_TEXT[getRandomNumber(0, DESCRIPTION_TEXT.length )];
   }
      var url = i + 1;

      photos[i] = {
         url: "photos/" + url + ".jpg",
         likes: getRandomNumber(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT),
         comments: renderComments(),
         name: randomName,
         description: randomDescription
      };
}

console.log(photos);


var template = document.querySelector('#picture').content.querySelector('.picture');
var fragment = document.createDocumentFragment();
var pictureWrap = document.querySelector('.pictures');

for (var i = 0; i < PHOTOS_NUMBER; i++) {
   var picture = template.cloneNode(true);

   picture.querySelector('.picture__img').src = photos[i].url;
   picture.querySelector('.picture__comments').textContent = photos[i].comments.length;
   picture.querySelector('.picture__likes').textContent = photos[i].likes;

   fragment.appendChild(picture);
}

pictureWrap.appendChild(fragment);

console.log(pictureWrap)


var bigPhotoNumber  = 0;
showBigPhoto(bigPhotoNumber);

function showBigPhoto(bigPhotoNumber){
   var bigPhotoData = document.querySelector('.big-picture');
   function renderPhotoData() {
      bigPhotoData.querySelector('.big-picture__img').src = photos[bigPhotoNumber].url;
      bigPhotoData.querySelector('.social__caption').textContent = photos[bigPhotoNumber].description;
      bigPhotoData.querySelector('.likes-count').textContent = photos[bigPhotoNumber].likes;
      bigPhotoData.querySelector('.comments-count').textContent = photos[bigPhotoNumber].comments.length;
   }
}
   function renderBigPhoto() {
      bigPhotoData.classList.remove('hidden');
      bigPhotoData.querySelector('.social__comment-count').classList.add('visually-hidden');
      bigPhotoData.querySelector('.comments-loader').classList.add('visually-hidden');
   }
   
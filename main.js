'use strict'

var PHOTOS_NUMBER = 25;

const MIN_COMMENTS_AMOUNT = 2;
const MAX_COMMENTS_AMOUNT = 10;

const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;

var COMMENTS_TEXT = [
"Всё отлично!",
"В целом все неплохо. Но не всё.",
"Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
"Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
"Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
"Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
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

for (let i = 0; i < PHOTOS_NUMBER; i++) {
  var randomName = NAMES[getRandomNumber(0, NAMES.length)];

  var randomComments = [];
for (let x = 0; x < getRandomNumber(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT); x++) {
  randomComments[x] = COMMENTS_TEXT[getRandomNumber(0, COMMENTS_TEXT.length )];
}

  var url = i + 1;

photos[i] = {
url: "photos/" + url + ".jpg",
likes: getRandomNumber(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT),
comments: randomComments,
name: randomName
    };
}

console.log(photos);





		

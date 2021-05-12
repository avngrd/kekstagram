'use strict'

var photosNumber = 25;

const minCommentsAmount = 2;
const maxCommentsAmount = 10;

const minLikesAmount = 15;
const maxLikesAmount = 200;

var commentsText = [
"Всё отлично!",
"В целом все неплохо. Но не всё.",
"Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
"Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
"Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
"Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];
var names = [
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
var getRandomNumber = function(min,max) {
  return Math.floor(Math.random() * (max - min  )) + min;
}

for(var i = 0; i < photosNumber; i++) {
 var randomComments = [];
 var randomName = names[getRandomNumber(0, names.length)];
for(let x = 0; x < getRandomNumber(minCommentsAmount,maxCommentsAmount); x++) {
  randomComments[x] = commentsText[getRandomNumber(0, commentsText.length )];
    }
 var url = i + 1;
  photos[i] = {
   url: "photos/" + url + ".jpg",
   likes: getRandomNumber(minLikesAmount,maxLikesAmount),
   comments: randomComments,
   name: randomName
    };
}

console.log(photos);





		

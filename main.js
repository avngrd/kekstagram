'use strict'



var photosNumber = 25;
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

function getRandomNumber(minNumber, maxNumber) {
    var min = Math.floor(minNumber);
    var max = Math.ceil(maxNumber);
    return Math.ceil(Math.random() * (max - min)) + min;
}

for(var i = 0; i < photosNumber; i++) {
    var randomComments = [];
    var randomName = names[getRandomNumber(0, names.length - 1)];
    for(var x = 0; x < getRandomNumber(2, 10); x++) {
        randomComments[x] = commentsText[getRandomNumber(0, commentsText.length - 1)];
    }
    var url = i + 1;
    photos[i] = {
        url: "photos/" + url + ".jpg",
        likes: getRandomNumber(15, 200),
        comments: randomComments,
        name: randomName
    };
}

console.log(photos);





		

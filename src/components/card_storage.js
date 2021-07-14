//import React, { useState, useEffect } from 'react';
import FetchImages from '../components/Unsplash';



const storage = [
    {id: 0, img: "img", key: 0, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 1, img: "img", key: 0, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 2, img: "img", key: 1, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 3, img: "img", key: 1, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 4, img: "img", key: 2, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 5, img: "img", key: 2, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 6, img: "img", key: 3, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 7, img: "img", key: 3, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 8, img: "img", key: 4, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 9, img: "img", key: 4, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 10, img: "img", key: 5, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 11, img: "img", key: 5, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 12, img: "img", key: 6, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 13, img: "img", key: 6, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 14, img: "img", key: 7, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 15, img: "img", key: 7, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 16, img: "img", key: 8, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 17, img: "img", key: 8, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 18, img: "img", key: 9, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 19, img: "img", key: 9, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 20, img: "img", key: 10, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 21, img: "img", key: 10, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 22, img: "img", key: 11, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 23, img: "img", key: 11, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 24, img: "img", key: 12, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 25, img: "img", key: 12, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 26, img: "img", key: 13, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 27, img: "img", key: 13, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 28, img: "img", key: 14, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 29, img: "img", key: 14, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 30, img: "img", key: 15, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 31, img: "img", key: 15, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 32, img: "img", key: 16, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 33, img: "img", key: 16, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 34, img: "img", key: 17, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 35, img: "img", key: 17, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 36, img: "img", key: 18, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 37, img: "img", key: 18, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 38, img: "img", key: 19, class: "wrap", classFlip: "wrap card-flip", match: false},
    {id: 39, img: "img", key: 19, class: "wrap", classFlip: "wrap card-flip", match: false}
];


setTimeout(function() {
    storage[0].img = FetchImages.src[0].img;
    storage[1].img = FetchImages.src[0].img;
    storage[2].img = FetchImages.src[1].img;
    storage[3].img = FetchImages.src[1].img;
    storage[4].img = FetchImages.src[2].img;
    storage[5].img = FetchImages.src[2].img;
    storage[6].img = FetchImages.src[3].img;
    storage[7].img = FetchImages.src[3].img;
    storage[8].img = FetchImages.src[4].img;
    storage[9].img = FetchImages.src[4].img;
    storage[10].img = FetchImages.src[5].img;
    storage[11].img = FetchImages.src[5].img;
    storage[12].img = FetchImages.src[6].img;
    storage[13].img = FetchImages.src[6].img;
    storage[14].img = FetchImages.src[7].img;
    storage[15].img = FetchImages.src[7].img;
    storage[16].img = FetchImages.src[8].img;
    storage[17].img = FetchImages.src[8].img;
    storage[18].img = FetchImages.src[9].img;
    storage[19].img = FetchImages.src[9].img;
    storage[20].img = FetchImages.src[10].img;
    storage[21].img = FetchImages.src[10].img;
    storage[22].img = FetchImages.src[11].img;
    storage[23].img = FetchImages.src[11].img;
    storage[24].img = FetchImages.src[12].img;
    storage[25].img = FetchImages.src[12].img;
    storage[26].img = FetchImages.src[13].img;
    storage[27].img = FetchImages.src[13].img;
    storage[28].img = FetchImages.src[14].img;
    storage[29].img = FetchImages.src[14].img;
    storage[30].img = FetchImages.src[15].img;
    storage[31].img = FetchImages.src[15].img;
    storage[32].img = FetchImages.src[16].img;
    storage[33].img = FetchImages.src[16].img;
    storage[34].img = FetchImages.src[17].img;
    storage[35].img = FetchImages.src[17].img;
    storage[36].img = FetchImages.src[18].img;
    storage[37].img = FetchImages.src[18].img;
    storage[38].img = FetchImages.src[19].img;
    storage[39].img = FetchImages.src[19].img;
    
    }, 2000)

  
  const newList = storage;
 
export const cardstorage =  newList;
  

export default cardstorage
//import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
//import { Components } from 'react';
 
      var i;
      var src = [];

      const unsplash = new Unsplash({
        accessKey: 'nZMoo6CXxgZhdviIyimtMIU9Y39KtyTCRpZo8TiRYds',
        // Optionally you can also configure a custom header to be sent with every request
        headers: {
          "X-Custom-Header": "foo"
        },
        
      });


function FetchImages() {
    new Promise(resolve => { 
        unsplash.search.collections("dogs", 2, 20)
        .then(toJson)
        .then(json => {
            for(i = 0; i < 20; i++){
                src[i] = {img:  json.results[i].cover_photo.urls.small}
            }
            //src = json.results[0].cover_photo.urls.small;
        });
    }); 
   
    return {src}
}



export default FetchImages()
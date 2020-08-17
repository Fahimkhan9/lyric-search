//selecting searchbutton
var searchBtn = document.querySelector("#search-btn");
//selecting input
var searchInput = document.querySelector("#search-input");
//selecting output list
var output = document.querySelector(".output");
//selevting lyric output
var lyric = document.querySelector(".lyric");
//selecting song list artist
var artist1 = document.querySelector("#artist1");
var artist2 = document.querySelector("#artist2");
var artist3 = document.querySelector("#artist3");
var artist4 = document.querySelector("#artist4");
var artist5 = document.querySelector("#artist5");
var artist6 = document.querySelector("#artist6");
var artist7 = document.querySelector("#artist7");
var artist8 = document.querySelector("#artist8");
var artist9 = document.querySelector("#artist9");
var artist10 = document.querySelector("#artist10");
//selecting song list title
var title1 = document.querySelector("#title1");
var title2 = document.querySelector("#title2");
var title3 = document.querySelector("#title3");
var title4 = document.querySelector("#title4");
var title5 = document.querySelector("#title5");
var title6 = document.querySelector("#title6");
var title7 = document.querySelector("#title7");
var title8 = document.querySelector("#title8");
var title9 = document.querySelector("#title9");
var title10 = document.querySelector("#title10");
//selecting get_lyrics button
var get_lyrics_data1 = document.querySelector(".get-lyrics-btn1");

var get_lyrics_data2 = document.querySelector(".get-lyrics-btn2");

var get_lyrics_data3 = document.querySelector(".get-lyrics-btn3");

var get_lyrics_data4 = document.querySelector(".get-lyrics-btn4");

var get_lyrics_data5 = document.querySelector(".get-lyrics-btn5");

var get_lyrics_data6 = document.querySelector(".get-lyrics-btn6");

var get_lyrics_data7 = document.querySelector(".get-lyrics-btn7");

var get_lyrics_data8 = document.querySelector(".get-lyrics-btn8");

var get_lyrics_data9 = document.querySelector(".get-lyrics-btn9");

var get_lyrics_data10 = document.querySelector(".get-lyrics-btn10");

//selecting lyric output heading
var heading = document.querySelector(".heading");




output.style.display = "none";
lyric.style.display = "none";
heading.style.display = "none";
searchBtn.addEventListener("click", () => {
  
  fetch(`https://api.lyrics.ovh/suggest/${searchInput.value}`)
    .then((res) => res.json())
    .then((info) => {
      artist1.innerHTML = info.data[0].artist.name;
      artist2.innerHTML = info.data[1].artist.name;
      artist3.innerHTML = info.data[2].artist.name;
      artist4.innerHTML = info.data[3].artist.name;
      artist5.innerHTML = info.data[4].artist.name;
      artist6.innerHTML = info.data[5].artist.name;
      artist7.innerHTML = info.data[6].artist.name;
      artist8.innerHTML = info.data[7].artist.name;
      artist9.innerHTML = info.data[8].artist.name;
      artist10.innerHTML = info.data[9].artist.name;

      title1.innerHTML = info.data[0].album.title;
      title2.innerHTML = info.data[1].album.title;
      title3.innerHTML = info.data[2].album.title;
      title4.innerHTML = info.data[3].album.title;
      title5.innerHTML = info.data[4].album.title;
      title6.innerHTML = info.data[5].album.title;
      title7.innerHTML = info.data[6].album.title;
      title8.innerHTML = info.data[7].album.title;
      title9.innerHTML = info.data[8].album.title;
      title10.innerHTML = info.data[9].album.title;



      output.style.display = "block";
      lyric.style.display = "block";
      heading.style.display = "block";
    });
});


get_lyrics_data1.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist1.innerHTML}/${title1.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
     
      });
  });
  get_lyrics_data2.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist2.innerHTML}/${title2.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
      
      });
  });
  get_lyrics_data3.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist3.innerHTML}/${title3.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
     
      });
  });
  get_lyrics_data4.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist4.innerHTML}/${title1.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
      
      });
  });
  get_lyrics_data5.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist5.innerHTML}/${title1.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
     
      });
  });
  get_lyrics_data6.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist6.innerHTML}/${title1.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time"
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
        
      });
  });
  get_lyrics_data7.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist7.innerHTML}/${title1.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
     
      });
  });
  get_lyrics_data8.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist8.innerHTML}/${title1.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
        
      });
  });
  get_lyrics_data9.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist9.innerHTML}/${title1.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
       
      });
  });
  get_lyrics_data10.addEventListener("click", () => {
    fetch(`https://api.lyrics.ovh/v1/${artist10.innerHTML}/${title1.innerHTML}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          lyric.innerHTML = "Ooops!Song lyrics is not available at this time";
        }
      })
      .then((d) => {
        lyric.innerHTML = d.lyrics;
    
      });
  });

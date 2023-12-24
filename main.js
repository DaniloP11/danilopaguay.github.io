let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },

    }
  });

  var currentIndex = 0; // Variable para rastrear la canción actual en la lista

  function prevSong() {
      currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      changeMusic(playlist[currentIndex]);
  }
  
  function nextSong() {
      currentIndex = (currentIndex + 1) % playlist.length;
      changeMusic(playlist[currentIndex]);
  }
  
  function togglePlayPause() {
    var iframe = document.getElementById('music-iframe');
    var player = iframe.contentWindow;

    if (player.getPlayerState() == 1) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
  }


  function changeMusic(url) {
      var iframe = document.getElementById('music-iframe');
      iframe.src = url;
      currentIndex = playlist.indexOf(url);
  }
  
  // Lista de reproducción
  var playlist = [
    'https://www.youtube.com/embed/nX5RnfuZ6sg',
    'https://www.youtube.com/embed/UicuDXSn1JM',
    'https://www.youtube.com/embed/F75TK-BXLlc',
    'https://www.youtube.com/embed/htQMR0kWAdU',
    'https://www.youtube.com/embed/cRaJiNWtClQ',
    'https://www.youtube.com/embed/tP1r_ABN8M8',
    'https://www.youtube.com/embed/TqprbNdC_CM',
    'https://www.youtube.com/embed/wkolMQpb9OE',
    'https://www.youtube.com/embed/DtLU5IT_250',
    'https://www.youtube.com/embed/oUs80Elw8qU',
    'https://www.youtube.com/embed/wwB3eOM6f1M',
    'https://www.youtube.com/embed/E6zAgXwpMgY',
    'https://www.youtube.com/embed/MZmfuaHBYEI',
    'https://www.youtube.com/embed/2xTIeKxWf38'
];
  
  // Asegurémonos de que las funciones previas estén implementadas
  function prevSong() {
      currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      changeMusic(playlist[currentIndex]);
  }
  
  function nextSong() {
      currentIndex = (currentIndex + 1) % playlist.length;
      changeMusic(playlist[currentIndex]);
  }
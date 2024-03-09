/// Intersection observer
const orbserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => orbserver.observe(el));

/// animaciones
gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('.work__title');
const h2 = gsap.utils.toArray('.work__title--cont h2');

gsap.set(h2, { xPercent: 100 });

let scrollTween = gsap.to(h2, {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".work__title",
    pin: ".work__title",
    scrub: 0.1,
    start: "-=500",
    end: "+=850",
    // snap: 1 / (h2.length - 1),
    // markers: true,
  }
});


/// pop up
// document.addEventListener('DOMContentLoaded', function() {
//   const articles = document.querySelectorAll('.work__items article');

//   articles.forEach(article => {
//     article.addEventListener('click', function() {
//       const imgSrc = this.querySelector('.article-img').getAttribute('src');
//       const title = this.querySelector('h3').innerText;
//       const subtitle = this.querySelector('h4').innerText;

//       showPopup(imgSrc, title, subtitle);
//     });
//   });

//   function showPopup(imgSrc, title, subtitle) {
//     const popup = document.createElement('div');
//     popup.classList.add('popup');
//     popup.innerHTML = `
//       <div class="popup-content">
//         <img src="${imgSrc}" alt="">
//         <h2>${title}</h2>
//         <h3>${subtitle}</h3>
//         <button class="close-popup">Cerrar</button>
//       </div>
//     `;

//     document.body.appendChild(popup);

//     const closePopupBtn = popup.querySelector('.close-popup');
//     closePopupBtn.addEventListener('click', function() {
//       document.body.removeChild(popup);
//     });
//   }
// });

////MODAL
// Abre el modal y muestra la imagen, el título, el subtítulo y el iframe de Spotify correspondientes del artículo
function openModal(imgSrc, title, subtitle, spotifyLink) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var modalTitle = document.getElementById("modalTitle");
    var modalSubtitle = document.getElementById("modalSubtitle");
    var modalSpotify = document.getElementById("modalSpotify");
  
    modal.style.display = "block";
    modal.classList.add('show');
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
    modalSpotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/' + spotifyLink + '?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    
}



// Cierra el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove('show');
}

// Obtén todas las imágenes dentro de los elementos .work__item
var workItems = document.querySelectorAll('.work__item');

// Agrega un evento click a cada artículo
workItems.forEach(function (workItem) {
    var img = workItem.querySelector('img');
    var title = workItem.querySelector('h3').textContent;
    var subtitle = workItem.querySelector('h4').textContent;
    var spotifyLink = workItem.querySelector('.spotify').dataset.spotifyLink;

    workItem.addEventListener('click', function () {
        openModal(img.src, title, subtitle, spotifyLink);
    });
});


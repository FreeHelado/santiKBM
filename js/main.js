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
// Abre el modal y muestra la imagen, el t�tulo, el subt�tulo y el iframe de Spotify correspondientes del art�culo
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
    
    setBackgroundFromImage(document.getElementById("modalImg").src);
}



// Cierra el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove('show');
}

// Obt�n todas las im�genes dentro de los elementos .work__item
var workItems = document.querySelectorAll('.work__item');

// Agrega un evento click a cada art�culo
workItems.forEach(function (workItem) {
    var img = workItem.querySelector('img');
    var title = workItem.querySelector('h3').textContent;
    var subtitle = workItem.querySelector('h4').textContent;
    var spotifyLink = workItem.querySelector('.spotify').dataset.spotifyLink;

    workItem.addEventListener('click', function () {
        openModal(img.src, title, subtitle, spotifyLink);
    });
});


const header = document.getElementById('cabe');

  // Funci�n para manejar el scroll
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
      // Cuando el scroll est� en la parte superior de la p�gina
      header.classList.add('scroll');
    } else {
      // Cuando el scroll no est� en la parte superior de la p�gina
      header.classList.remove('scroll');
    }
  }

  // A�adir un listener para el evento scroll
window.addEventListener('scroll', handleScroll);
  



// Funci�n para establecer el color de fondo promedio del modal basado en la imagen
function setBackgroundFromImage(imageSrc) {
    var img = new Image();
    img.src = imageSrc;
    img.onload = function() {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = this.width;
        canvas.height = this.height;
        ctx.drawImage(this, 0, 0);
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;
        var sumR = 0, sumG = 0, sumB = 0;
        for (var i = 0; i < data.length; i += 4) {
            sumR += data[i];
            sumG += data[i + 1];
            sumB += data[i + 2];
        }
        var avgR = sumR / (data.length / 4);
        var avgG = sumG / (data.length / 4);
        var avgB = sumB / (data.length / 4);
        document.querySelector(".modal-content").style.backgroundColor = "rgb(" + avgR + "," + avgG + "," + avgB + ")";
    };
}

// Llamamos a la funci�n con la URL de la imagen cargada din�micamente



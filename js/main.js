// ==========================
// Google Analytics (GTag)
// ==========================
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-QVXNBNRGT7');

// ==========================
// DOMContentLoaded Scripts
// ==========================
document.addEventListener('DOMContentLoaded', () => {
  // ==========================
  // Business Hours Highlight
  // ==========================
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const hoursList = document.querySelectorAll('.hours-box li');

  hoursList.forEach(li => {
    const liDay = parseInt(li.getAttribute('data-day'));
    const statusSpan = li.querySelector('.status');

    if (liDay === currentDay) {
      li.classList.add("today");

      const isWeekend = currentDay === 0 || currentDay === 6;
      const openHour = 9;
      const closeHour = 17;

      const isOpen = !isWeekend && currentHour >= openHour && currentHour < closeHour;

      li.classList.add(isOpen ? "open" : "closed");
      statusSpan.textContent = isOpen ? "(Open Now)" : "(Closed)";
    }
  });

  // ==========================
  // Glightbox Gallery Setup
  // ==========================
  const gallery = document.getElementById('gallery');
  if (gallery) {
    const imageList = [
      { file: "sample1.jpg", alt: "Custom iron driveway gate in Homeland CA" },
      { file: "sample2.jpg", alt: "Decorative wrought iron fence project in Southern California" },
      { file: "sample3.jpg", alt: "Ornamental metal railing installation" },
      { file: "sample4.jpg", alt: "Simple wrought iron fence project in Southern California" },
      { file: "sample5.jpg", alt: "Awning custom project in Southern California" },
      { file: "sample6.jpg", alt: "Simple side gate custom installation" },
      { file: "sample7.jpg", alt: "Decorative security screen in Southern California" },
      { file: "sample8.jpg", alt: "Patio railing fencing installation in Southern California" },
      { file: "sample9.jpg", alt: "Personalized gate design" },
      { file: "sample10.jpg", alt: "Wrought iron security gate" },
      { file: "sample11.jpg", alt: "Simple side gate project" },
      { file: "sample12.jpg", alt: "Custom built pool fencing" },
      { file: "sample13.jpg", alt: "Durable wrought iron perimeter fencing" },
      { file: "sample14.jpg", alt: "Stunning safety balcony railing" },
      { file: "sample15.jpg", alt: "Unique iron entryway" }
    ];

    imageList.forEach(file => {
      const link = document.createElement('a');
      link.href = `assets/images/${file.file}`;
      link.className = 'glightbox';
      link.setAttribute('data-gallery', 'iron-gallery');
      link.setAttribute('data-title', file.alt);

      const img = document.createElement('img');
      img.src = `assets/images/${file.file}`;
      img.alt = file.alt;
      img.loading = "lazy";

      const caption = document.createElement('p');
      caption.className = 'caption';
      caption.textContent = file.alt;

      const wrapper = document.createElement('div');
      link.appendChild(img);
      wrapper.appendChild(link);
      wrapper.appendChild(caption);
      gallery.appendChild(wrapper);
    });

    GLightbox({ selector: '.glightbox' });
  }
});


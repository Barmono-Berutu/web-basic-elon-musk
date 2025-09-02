// untuk posisi tetap scrool
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// untuk navbar
let nav = document.querySelectorAll(".navbar-nav a");
for (let i = 0; i < nav.length; i++) {
  if (i == 0) {
    nav[i].classList.add("active");
  }
  nav[i].addEventListener("click", (e) => {
    nav.forEach((val) => val.classList.remove("active"));

    e.target.classList.add("active");
  });
}

// untuk icon settings
const settings = document.querySelector(".settings");
const toggle = document.querySelector(".toggle-settings");

toggle.addEventListener("click", () => {
  settings.classList.toggle("active");
});

// untuk play musik
const audioEl = document.getElementById("bgm");
const toggleEl = document.getElementById("bgmToggle");

toggleEl.addEventListener("click", () => {
  if (audioEl.paused) {
    audioEl.play();
    audioEl.volume = 0.2;
    toggleEl.innerHTML = '<i data-feather="pause"></i>';
  } else {
    audioEl.pause();
    toggleEl.innerHTML = '<i data-feather="play"></i>';
  }
  feather.replace();
});

const mode = document.querySelector(".mode");
let dark = true;

mode.addEventListener("click", () => {
  if (dark) {
    document.documentElement.style.setProperty("--bg", "#010101");
    document.documentElement.style.setProperty("--bg-dua", "#09091c");
    document.documentElement.style.setProperty("--cr", "#fff");
    document.documentElement.style.setProperty("--bg-gr", "rgba(1, 1, 1, 0.8)");
    document.documentElement.style.setProperty("--fw", "200");

    mode.innerHTML = '<i data-feather="sun"></i>';
    feather.replace();

    dark = false;
  } else {
    document.documentElement.style.setProperty("--bg", "#fff");
    document.documentElement.style.setProperty("--bg-dua", "#dddddf");
    document.documentElement.style.setProperty("--cr", "#010101");
    document.documentElement.style.setProperty(
      "--bg-gr",
      "rgba(255, 255, 255, 0.8)"
    );
    document.documentElement.style.setProperty("--fw", "300");

    mode.innerHTML = '<i data-feather="moon"></i>';
    feather.replace();

    dark = true;
  }
});

// List menu
let menu = document.querySelector(".menu");
let listMenu = [
  "Semua",
  "Antariksa",
  "Energi",
  "Otomotif",
  "Teknologi",
  "Infrastruktur",
];

// Buat tombol menu
for (let i = 0; i < listMenu.length; i++) {
  const button = document.createElement("button");
  button.textContent = listMenu[i];
  if (i === 0) button.classList.add("active");
  menu.appendChild(button);
}

// Data article dengan kategori
let article = [
  {
    gambar: "gambar/falcon.jpg",
    alt: "Falcon Heavy",
    title: "Falcon Heavy",
    content:
      "Falcon Heavy adalah salah satu karya terbesar SpaceX. Roket ini membuktikan bahwa perjalanan luar angkasa bisa lebih murah dan efisien.",
    kategori: "Antariksa",
  },
  {
    gambar: "gambar/starship.jpg",
    alt: "Starship",
    title: "Starship",
    content:
      "Starship dirancang sebagai roket paling kuat di dunia, dengan misi membawa manusia ke Mars dan menjadikan manusia sebagai peradaban multiplanet.",
    kategori: "Antariksa",
  },
  {
    gambar: "gambar/tesla.jpg",
    alt: "Tesla Model S",
    title: "Tesla Model S",
    content:
      "Tesla Model S adalah mobil listrik yang mengubah standar otomotif global dengan performa tinggi dan ramah lingkungan.",
    kategori: "Otomotif",
  },
  {
    gambar: "gambar/cybertruck.jpg",
    alt: "Cybertruck",
    title: "Cybertruck",
    content:
      "Cybertruck adalah kendaraan futuristik dengan desain unik, bodi baja tahan karat, dan teknologi listrik penuh.",
    kategori: "Otomotif",
  },
  {
    gambar: "gambar/solar.jpg",
    alt: "Solar Roof",
    title: "Solar Roof",
    content:
      "Solar Roof adalah panel surya inovatif dari Tesla yang berbentuk genteng, memberikan energi terbarukan tanpa mengorbankan estetika rumah.",
    kategori: "Energi",
  },
  {
    gambar: "gambar/neuralink.jpg",
    alt: "Neuralink Prototype",
    title: "Neuralink Prototype",
    content:
      "Neuralink adalah chip otak-komputer yang bertujuan membantu manusia berinteraksi langsung dengan mesin.",
    kategori: "Teknologi",
  },
  {
    gambar: "gambar/hyperloop.jpg",
    alt: "Hyperloop Concept",
    title: "Hyperloop",
    content:
      "Hyperloop adalah konsep transportasi super cepat berbasis tabung vakum, yang dapat memangkas waktu perjalanan antarkota.",
    kategori: "Infrastruktur",
  },
];

// Render portfolio
let portfolio = document.querySelector(".card-portfolio");

function renderArticle(filter = "Semua") {
  portfolio.innerHTML = "";
  let filtered = article.filter(
    (val) => filter === "Semua" || val.kategori === filter
  );

  if (filtered.length === 0) {
    portfolio.innerHTML = `<p>Tidak ada karya pada kategori <b>${filter}</b>.</p>`;
  } else {
    filtered.forEach((val) => {
      portfolio.innerHTML += `
        <article class="card">
          <img src="${val.gambar}" alt="${val.alt}" />
          <h3>${val.title}</h3>
          <p>${val.content}</p>
        </article>
      `;
    });
  }
}

// pertama kali render semua
renderArticle("Semua");

// Event klik menu
let button = document.querySelectorAll(".menu button");
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    button.forEach((val) => val.classList.remove("active"));
    e.target.classList.add("active");

    let kategori = e.target.textContent;
    renderArticle(kategori);
  });
});

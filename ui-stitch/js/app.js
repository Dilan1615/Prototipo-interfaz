// Datos de ejemplo
const wishlistItems = [
  {
    titulo: "Jujutsu Kaisen",
    autor: "Gege Akutami",
    categoria: "Manga",
    color: "primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAObDXbt-_N_5y-sKzjUYFauZueOY92zqG061IjcrsaIjf72JYezye1-_1KCJ3iIOy2EzrEBS60UaENcT7aYDunO8WLBXMq7AJMTD4Xv7GGYtIPDwlMhiBSorN-my5Y-jKsc-njtH75Byc7aC5R2vMrEro1ITB9TUtvDT2uhoSsZGJghyn3tAnJArgj5loDFGNbNJX40Vg4GqsthWCWvVFCQ8NHDaQ3Z40FYhjnHoq95G8iCp4lwpTnAT8fP9LM_V-Dr5H79emJm8k"
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    categoria: "Novela",
    color: "purple",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa4BS24JlKyFcnCFTvmgm1jHAPxXFJaM5j_Ishu3X3lsQBkmIAksTbhHspWqe1yBSYXYFEGrCiniJg_vhI33a2tfm4Gpw5JRiAOFlkKVvvzzl7_Jrc4kbLDl_w-yX6gyEbjjS7V3z1g8nj7IsfdDRileHeUsobMpxyVSQmiQIlYi-ej_a2yqiH-_qFmqJ-PKy9KFsJ2opE83Mi8uU_NyG6Wz4WkNQJAbunjnJ5wyAo2xtT16wgq4HtIKFvd5BQEvZn_nT7Hb9RmGU"
  },
  {
    titulo: "El Señor de los Anillos",
    autor: "J.R.R. Tolkien",
    categoria: "Libro",
    color: "green",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXKMcZzScR9hh2a5DLrTWkLeBfedqUaRr7xKkHWqXORrPiYJ0VpmLnYGtl7-lgwXCLQrD_yifNjaMZmhB6lyeGRiWDte-Bab-EiL61ocv1NuuZdrJL--UyuQolK70hZMXOX1LjjoA45ah5sT0Pil_bkDKt0C7o2-NsGXGD4x35pQDKQfYaD8K7rHTM7U4lUIU8T9L1om1bAmLXfnJhGKb1qR-Z6nz9sxrGadzAtkt2Sz9aO8E10o1ZcyaqKzfzkjWtKt9LdsYn9j0"
  }
];

// Render del top bar
function renderTopBar() {
  const topBar = document.getElementById("topBar");
  topBar.innerHTML = `
    <div class="flex flex-col gap-2 p-4 pb-2 sticky top-0 z-10">
      <div class="flex items-center h-12 justify-between">
        <span class="material-symbols-outlined text-gray-800 dark:text-white text-2xl">search</span>
        <button class="rounded-full h-10 w-10 bg-primary/20 text-primary dark:text-white flex items-center justify-center">
          <span class="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
      <h1 class="text-gray-900 dark:text-white text-[28px] font-bold">Lista de Deseados</h1>
    </div>
  `;
}

// Render de la lista completa
function renderWishlist() {
  const container = document.getElementById("wishlistContainer");
  container.classList.add("flex", "flex-col", "px-4", "pt-2", "pb-24");

  container.innerHTML = wishlistItems
    .map((item) => createItemHTML(item))
    .join("");
}

// Genera cada item
function createItemHTML(item) {
  return `
    <div class="flex gap-4 py-3 justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <div class="flex items-start gap-4">
        <div class="bg-center bg-no-repeat bg-cover rounded-lg w-[70px] aspect-[3/4] shadow-lg"
          style="background-image:url('${item.img}')"></div>

        <div class="flex flex-1 flex-col gap-1">
          <p class="text-gray-900 dark:text-white text-base font-medium">${item.titulo}</p>
          <p class="text-gray-500 dark:text-gray-400 text-sm">${item.autor}</p>
          <span class="text-xs font-medium px-2 py-1 rounded-full bg-${item.color}-500/20 text-${item.color}-600 dark:text-${item.color}-400 mt-1">
            ${item.categoria}
          </span>
        </div>
      </div>

      <button class="text-gray-400 dark:text-gray-500 flex size-7 items-center justify-center">
        <span class="material-symbols-outlined">more_vert</span>
      </button>
    </div>
  `;
}

// Inicializar
renderTopBar();
renderWishlist();

const grid = document.getElementById("grid");

const items = [
  { title: "Chainsaw Man", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTR4jwSF2oe1..." },
  { title: "Solo Leveling", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDciEymmtxjEd..." },
  { title: "Dune", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3U1F6Jb0cl..." },
  { title: "The Lord of the Rings", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd6igmdBJE8..." },
  { title: "Attack on Titan", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBAIJTfLj7M..." },
  { title: "Mistborn", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2a2sUTEuQO..." }
];

items.forEach(item => {
  const card = `
    <div class="flex flex-col gap-2 relative">
      <div class="w-full aspect-[3/4] bg-cover bg-center rounded-lg shadow-md"
        style="background-image: url('${item.img}')"></div>

      <button class="absolute top-2 right-2 flex items-center justify-center size-8 bg-black/50 rounded-full backdrop-blur-sm">
        <span class="material-symbols-outlined text-white" style="font-size: 20px;">favorite</span>
      </button>

      <p class="text-gray-800 dark:text-gray-100 text-base font-medium">${item.title}</p>
    </div>
  `;
  grid.innerHTML += card;
});

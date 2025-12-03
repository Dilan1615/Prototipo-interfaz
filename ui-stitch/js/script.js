const comments = [
  {
    name: "Carlos R.",
    time: "hace 2 horas",
    text: "Increible! La trama es espectacular."
  },
  {
    name: "Ana G.",
    time: "hace 1 dia",
    text: "El desarrollo de personajes es de lo mejor que he leido."
  }
];

const container = document.getElementById("comments");

comments.forEach(c => {
  container.innerHTML += `
    <div class="flex items-start space-x-3 mb-6">
      <img class="avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO7qgTVBrB_m4Q0ScH-iQkm28BzsbRX153GlY8vb21VfDn4DL1D1AoOCB8ZspxKJryFAy15wuJfHeIWqw6ajmqK3luG8Du8fnejV6fUy80LG2HkAQFKXRZ_uGnmrBiysWxnabMLnG_XmoxrENU4M2Uv_TeqxstSEG3ROuvqnJq8pHHd7LxDNEiLcqOLM-o7JMe7nA3ESpUJXUbBoGdbw_wWKW1nk8_xk4ri70Ns4uQ5bBbNMOPgeUEeMlObmI9DTECWqWtJUds07M" />

      <div class="flex-1">
        <div class="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-3">
          <div class="flex justify-between">
            <p class="font-semibold text-white">${c.name}</p>
            <p class="text-xs text-slate-400">${c.time}</p>
          </div>
          <p class="text-slate-300 mt-1">${c.text}</p>
        </div>
      </div>
    </div>
  `;
});

function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  startFlowerRain(); // Mulai efek bunga banyak & terus-menerus
}

function startFlowerRain() {
  const interval = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      const flower = document.createElement("img");
      flower.src = "https://cdn-icons-png.flaticon.com/512/616/616408.png";
      flower.className = "flower";

      // Posisi acak di layar (X)
      flower.style.left = Math.random() * 100 + "vw";

      // Ukuran acak (20–50px)
      const size = 20 + Math.random() * 30;
      flower.style.width = `${size}px`;
      flower.style.height = `${size}px`;

      // Durasi dan delay animasi acak
      flower.style.animationDuration = (3 + Math.random() * 3) + "s";
      flower.style.animationDelay = (Math.random() * 1) + "s";

      document.body.appendChild(flower);

      // Hapus bunga setelah beberapa detik
      setTimeout(() => flower.remove(), 7000);
    }
  }, 300); // Buat bunga baru setiap 300ms (sekitar 16 bunga per detik)

  // Stop efek setelah 15 detik
  setTimeout(() => clearInterval(interval), 15000);
}

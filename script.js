function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  dropFlowers(); // efek bunga!
}

function dropFlowers() {
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("img");
    flower.src = "https://cdn-icons-png.flaticon.com/512/616/616408.png"; // ikon bunga
    flower.className = "flower";

    // posisi acak di sumbu X
    flower.style.left = Math.random() * 100 + "vw";
    // durasi acak agar natural
    flower.style.animationDuration = 2 + Math.random() * 3 + "s";

    document.body.appendChild(flower);

    // hapus setelah animasi selesai
    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}

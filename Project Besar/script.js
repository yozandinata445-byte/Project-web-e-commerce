// Fitur pencarian produk
const searchInput = document.getElementById("search");
const produkList = document.getElementById("produk-list");

if (searchInput) {
  searchInput.addEventListener("keyup", function() {
    const filter = searchInput.value.toLowerCase();
    const cards = produkList.getElementsByClassName("card");
    Array.from(cards).forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(filter) ? "block" : "none";
    });
  });
}

// Tombol beli dengan alert
const beliButtons = document.querySelectorAll(".btn-beli");
beliButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Terima kasih! Produk telah ditambahkan ke keranjang (simulasi).");
  });
});

// =========================
// MODAL FOTO
// =========================

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");


// Membuka foto
function openModal(imageSrc) {
    modal.style.display = "flex";

    modalImage.src = imageSrc;

    document.body.style.overflow = "hidden";
}


// Menutup foto
function closeModal() {
    modal.style.display = "none";

    modalImage.src = "";

    document.body.style.overflow = "auto";
}


// Jangan tutup modal ketika gambar diklik
modalImage.addEventListener("click", function(event) {
    event.stopPropagation();
});


// Tutup menggunakan tombol ESC
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});

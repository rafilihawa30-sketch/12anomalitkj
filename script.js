function scrollGallery() {
document.getElementById("gallery").scrollIntoView({
behavior: "smooth"
});
}

/* Klik foto untuk melihat ukuran besar */

const photos = document.querySelectorAll(".photo-card img");

photos.forEach(photo => {

```
photo.addEventListener("click", function () {

    const overlay = document.createElement("div");

    overlay.className = "image-viewer";

    overlay.innerHTML = `
        <div class="close-viewer">×</div>
        <img src="${this.src}" alt="Preview">
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", function(e) {

        if (
            e.target === overlay ||
            e.target.classList.contains("close-viewer")
        ) {
            overlay.remove();
        }

    });

});
```

});

/* Animasi muncul saat scroll */

const cards = document.querySelectorAll(".photo-card");

const observer = new IntersectionObserver(
entries => {

```
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold: 0.1
}
```

);

cards.forEach(card => observer.observe(card));

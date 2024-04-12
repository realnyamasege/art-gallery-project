const baseUrl = " http://localhost:3000";
const box = document.querySelector(".box");
const container = document.querySelector(".container");
const form = document.querySelector("#submit-form");

function fetchImages() {
  fetch(`${baseUrl}/images`)
    .then(function (res) {
      return res.json();
    })
    .then(function (images) {
      console.log(images);
      images.map(function (image) {
        const artCard = `<div class="box" id="box">
      <img src=${image.imageUrl} alt="art image" />
      <button>${image.genre}</button>
      <button onclick="deleteArtWork(${image.id})">delete art</button>
      </div>`;
        container.insertAdjacentHTML("beforeend", artCard);
      });
    });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formTarget = event.target;
  const artist = formTarget.artist.value;
  const genre = formTarget.genre.value;
  const imageUrl = formTarget.image.value;

  submitArtwork(artist, genre, imageUrl);
});

function submitArtwork(artist, genre, imageUrl) {
  const art = {
    artist: artist,
    genre: genre,
    imageUrl: imageUrl,
  };
  fetch(`${baseUrl}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(art),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Artwork Posted successfully");
    });

}

function deleteArtWork(id) {
  fetch(`${baseUrl}/images/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Art deleted!");
    });
}
fetchImages();

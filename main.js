const baseUrl = "http://localhost:4000";

const painters = {
  name: "Elon",
  age: "25",
  country: "USA",
  profession: "Painter",
};



function fetchPainters() {
  fetch(`${baseUrl}/painters`)
    .then((response) => response.json())
    .then((data) => {
        data.map((painters) => console.log(painters.name.toUpperCase()) )
    });
}

fetchPainters();

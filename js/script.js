const postsContainer = document.getElementById("posts-container");
const layoverContainer = document.getElementById("layover-container");
const layoverEl = document.querySelector(".layover");
const closeButtonEl = document.getElementById("close-button");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const posts = response.data;

  let cardsHtml = "";
  posts.forEach((post) => {
    cardsHtml += generatePostCard(post);
  });
  postsContainer.innerHTML += cardsHtml;

  const postsNodes = document.querySelectorAll(".card");

  postsNodes.forEach((postNode) => {
    postNode.addEventListener("click", () => {
      const img = postNode.querySelector("img");

      // Crea una nuova immagine per l'overlay
      const overlayImg = document.createElement("img");
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;

      // Svuota l'overlay prima di aggiungere una nuova immagine
      layoverContainer.innerHTML = "";

      // Aggiungi il bottone di chiusura
      layoverContainer.appendChild(closeButtonEl);

      // Aggiungi l'immagine
      layoverContainer.appendChild(overlayImg);

      // Mostra l'overlay
      layoverEl.classList.add("visible");
    });
  });
  closeButtonEl.addEventListener("click", () => {
    layoverEl.classList.remove("visible");
  });
});

const generatePostCard = (post) => {
  const cardHtml = `
        <div class="card" id="post-card-${post.id}">
            <div class="card-media">
              <img src="${post.url}" alt="${post.title}" />
            </div>
            <div class="card-content">
            <span>
             ${post.date}
            </span>
            <span>
             ${post.title}
            </span>
           
            </div>
          </div>
        `;
  return cardHtml;
};

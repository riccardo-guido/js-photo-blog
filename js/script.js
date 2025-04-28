const postsContainer = document.getElementById("posts-container");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const posts = response.data;

  let cardsHtml = "";
  posts.forEach((post) => {
    cardsHtml += generatePostCard(post);
  });
  postsContainer.innerHTML += cardsHtml;
});

const generatePostCard = (post) => {
  const cardHtml = `
        <div class="card">
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

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const posts = response.data;
  console.log(posts);

  posts.forEach((post) => {
    //...
  });
});

const generatePostCard = (post) => {
  const cardHtml = `
        
        `;
};

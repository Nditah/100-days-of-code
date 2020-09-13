const commentContainer = document.getElementById("comment-container");
const loading = document.querySelector(".loader");

let limit = 5;
let page = 1;

// Fetch comments
async function getComments() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}

// Show commentss
async function showComments() {
  const comments = await getComments();

  comments.forEach((comment) => {
    const commentEl = document.createElement("div");
    commentEl.classList.add("comment");
    commentEl.innerHTML = `
          <div class="comment-info">
            <h2 class="comment-name">${comment.name}</h2>
            <p class="comment-email">Email: ${comment.email}</p>
            <p class="comment-body">Comment: ${comment.body}</p>
          </div>
          `;

    commentContainer.appendChild(commentEl);
  });
}

showComments();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loading.classList.add("show");

    setTimeout(() => {
      loading.classList.remove("show");

      setTimeout(() => {
        page++;
        showComments();
      }, 300);
    }, 1000);
  }
});

const postContainer = document.querySelector(".postsContainer");
const postsBy = document.querySelector(".postsBy");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get("userId");
const userName = urlParams.get("name");

const userPosts = fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => response.json())
	.then((data) => filterPosts(data))
	.catch((err) => console.log(err));

function filterPosts(posts) {
	postsBy.textContent = `Posts by ${userName}`;
	postContainer.innerHTML = posts
		.filter((post) => post.userId == userId)
		.map(
			(post) =>
				`<div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>`
		)
		.join("");
}

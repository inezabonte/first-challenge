const userDetails = document.querySelector(".userDetails");

const userData = fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((data) => printData(data))
	.catch((err) => console.log(err));

function printData(data) {
	userDetails.innerHTML = data
		.map(
			(user) =>
				` <div id=${user.id} class="userDiv">
            <p> Name: ${user.name}</p>
            <p> Email: ${user.email}</p>
            <a href="./blog.html?userId=${user.id}&name=${user.name}" class="action-button">Get User's Posts</a>
            </div> `
		)
		.join("");
}

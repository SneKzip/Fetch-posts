const outputData = document.querySelector(".output-data");
let post = "";

const setData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}

setData().then(dataJSON => {
    dataJSON.forEach(data => {
        post +=
        `
        <div class = "post">
            <div class = "title">
                <h2 class = "title__header">${data.title}</h2>
            </div>
            <div class = "body">
                <p class = "body__text">${data.body}</p>
            </div>
        </div>
        `
    });
    outputData.insertAdjacentHTML('afterbegin', post);
});
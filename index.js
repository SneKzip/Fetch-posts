window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);

    const outputData = document.querySelector(".output-data");
    let post = "";

    const setData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            const message = `URL not found - ошибка`;
            const error = 
            `
            <div class = "error">
                <h1 class = "error__text">Ошибка при получении данных с сервера</h1>
            </div>
            `;
            outputData.insertAdjacentHTML('afterbegin', error);
            throw new Error(message);
        }
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
            `;
        });
        outputData.insertAdjacentHTML('afterbegin', post);
    });
}
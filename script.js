document.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
})


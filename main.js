
const quoteTag = document.querySelector("h1")
const authorTag = document.querySelector("p")

const randomTag = document.querySelector("footer img")

// let data = []


// fetch("https://api.superhi.com/api/test/quotes/random")
//     .then((response) => response.json()
// )
//     .then((jsonData) => {
//     data = jsonData
//     getQuote()
// })

const getQuote = () => {

//     if (data.length > 0) {
//         const randomNumber = Math.floor(Math.random() * data.length)
//         const randomQuote = data[randomNumber]
    
//         quoteTag.innerHTML = randomQuote.quote
//         authorTag.innerHTML = randomQuote.author
//     }

    fetch("https://api.superhi.com/api/test/quotes/random")
        .then(response => response.json())
        .then(jsonData => {
            quoteTag.innerHTML = "&ldquo" + jsonData.quote + "&rdquo"
            authorTag.innerHTML = "" + jsonData.author   
        })
}


getQuote()

// run getQuote on click of random image

randomTag.addEventListener("click", () => {
    console.log("click")
    getQuote()
})

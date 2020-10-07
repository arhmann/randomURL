let URLlink = document.querySelector(".link");
const urls = [
    "https://www.google.com/",
    "https://yandex.ru/"
    ]

URLlink.addEventListener('click',(event)=> {
    window.open(urls[Math.floor(Math.random() * urls.length)])
})

    

const links = document.querySelectorAll(".link a"),
nav = document.querySelector(".links"),
sections = document.querySelectorAll("section"),
md = document.querySelector(".mode"),
body = document.querySelector("body"),
h3 = document.querySelector(".mode h3"),
e = document.querySelectorAll(".e"),
cursor = document.querySelector(".cursor"),
ham = document.querySelector(".ham"),
header = document.querySelector("header"),
home = document.querySelector("section.home"),
hvr = document.querySelectorAll(".hvr"),
logo = document.querySelector(".brand img"),
favicon = document.querySelector(`link[rel~='icon']`)

md.addEventListener("click", () =>{
    h3.classList.toggle("moon")
    body.classList.toggle("dark")
    cursor.style.background = '#fff'
    if(body.className == "dark"){
        logo.src = "/img/favicons/favicon_dark/favicon.ico"
        favicon.href = "/img/favicons/favicon_dark/favicon.ico"
    }else{
        logo.src = "/img/favicons/favicon_white/favicon.ico"
        favicon.href = "/img/favicons/favicon_white/favicon.ico"
    }
})
ham.addEventListener("click", ()=>{
    nav.classList.toggle('active')
    links.forEach((link, index) =>{
        if (link.style.animation){
            link.style.animation = ""
        } else{
            link.style.animation = `linkMove 0.5s ease forwards ${index / 7 + 0.5}s`
        }
        ham.classList.toggle("x")
    })
}) 
window.onscroll = () =>{
    header.classList.add("active")
    sections.forEach(sect =>{
        let top = window.scrollY,
        offset = sect.offsetTop - 150,
        height = sect.offsetHeight,
        id = sect.getAttribute("id")
        if (top >= offset && top < offset + height) {
            links.forEach(link =>{
                link.classList.remove("active")
                const actived = document.querySelector(`header ul li a[href*=${id}]`)
                actived.classList.add('active')
            })
        }
    })
}
window.addEventListener("mousemove", (element) =>{
    cursor.style.left = `${element.pageX}px`
    cursor.style.top = `${element.pageY}px`
    
    e.forEach((item) =>{
        let value = item.getAttribute("data")
        let x = (element.clientX * value) / 50
        let y = (element.clientY * value) / 50

        item.style.transform = `translate(${x}px, ${y}px) rotate(${x * y}deg)`
    })
})

hvr.forEach((e) =>{
    e.addEventListener("mousemove", () =>{
        cursor.style.scale = "8"
    })
})
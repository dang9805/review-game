
// ---------------------------changetab------------------------

document.getElementById("minecraft").addEventListener("click",()=>{
    window.location.href = "minecraft-dungeon1.html"
})

document.getElementById("cs").addEventListener("click",()=>{
    window.location.href = "csgo1.html"
})

document.getElementById("lol").addEventListener("click",()=>{
    window.location.href = "lol1.html"
})

document.getElementById("genshin").addEventListener("click",()=>{
    window.location.href = "genshin1.html"
})

document.getElementById("AboutUs").addEventListener("click",()=>{
    window.location.href = "about_us.html"
})

document.getElementById("home").addEventListener("click",()=>{
    window.location.href = "index.html"
})

document.getElementById("sign-in").addEventListener("click",()=>{
    window.location.href = "signin.html"
})

// --------------------darkmode--------------------------------

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.getElementById("nav").classList.toggle('dark');
});

chk.addEventListener('change', () => {
	document.getElementById("under_nav").classList.toggle('dark');
});

chk.addEventListener('change', () => {
	document.getElementById("footer").classList.toggle('dark');
});

chk.addEventListener('change', () => {
	document.getElementById("our_info").classList.toggle('dark');
});

chk.addEventListener('change', () => {
	document.getElementById("review-bar").classList.toggle('dark');
});

chk.addEventListener('change', () => {
	document.getElementById("dropdown-content").classList.toggle('dark');
});



// --------------------change-font-size--------------------------------

// document.getElementById("size-change").addEventListener("click",() => {
//     let fontSize = document.getElementById("size").value
//     document.body.style.fontSize = fontSize.toString() + "px"
// })

// --------------------------------------save-posts-----------------------------------------

// lấy thông tin của cái post ra xong load lại vào đây

let post_cover_img = {
    "Counter-Strike: Global Offensive Review": "./img/csgo1.jpg"
}
let postName = JSON.parse(localStorage.getItem("saved_post"))

for (i = 0; i <= postName.length; i ++) {
    let posts = document.createElement("div")
    posts.innerHTML = `
        <a style = "text-decoration:none; color: #000;">${postName[i].name}</a>
    `
    document.getElementById("save-post-home-page-content").appendChild(posts)
}
console.log(postName)

// document.getElementById("save-post-home-page-content").innnerHTML = document.getElementsByClassName("savePosts").innerHTML
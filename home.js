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

// --------------------change-font-size--------------------------------

document.getElementById("size-change").addEventListener("click",() => {
    let fontSize = document.getElementById("size").value
    document.body.style.fontSize = 20 + "px"
    let Text = document.body
    Text.style.fontSize = fontSize.toString() + "px"
})
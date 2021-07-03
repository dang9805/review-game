document.addEventListener("DOMContentLoaded",()=>{
    let fontSize = localStorage.getItem("fontSize")
    if (fontSize != null){
        document.getElementById("review-bar").style.fontSize = fontSize + "px"
    }
    else{
        fontSize = Number(getComputedStyle(document.getElementById("review-bar")).fontSize.slice(0,-2))
    }
    document.getElementById("size").value = fontSize
    
})
// ---------------------------changetab------------------------
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
	document.getElementById("review-bar").classList.toggle('dark');
});

chk.addEventListener('change', () => {
	document.getElementById("our_info").classList.toggle('dark');
});

chk.addEventListener('change', () => {
	document.getElementById("dropdown-content").classList.toggle('dark');
});

// --------------------change-font-size--------------------------------


document.getElementById("size-change").addEventListener("click",() => {
    
    let fontSize = document.getElementById("size").value
    document.getElementById("review-bar").style.fontSize = fontSize.toString() + "px"   
    localStorage.setItem("fontSize",fontSize)

    // document.getElementById("size").style.fontSize = fontSize.toString() + "px"   
})

// --------------------------------------save-posts-----------------------------------------

document.getElementById("yes").addEventListener("click", ()=>{
    let post_name = document.getElementsByTagName("h1")[0].textContent.value
    let post =
        {
            "name" : post_name,
            "href" : window.location.href,
        }    
    let data = localStorage.getItem("saved_post")
    localStorage.clear(data)
    if (data == null){
        data = 
        {
            list : [post],
        }
    }

    // data.list.push(post)
    localStorage.setItem("saved_post", data)
    console.log(data)
})

document.getElementById("no").addEventListener("click",()=>{
    document.getElementById("save-post").style.display = "none"
})


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

chk.addEventListener('change', () => {
	document.getElementById("save-post-review-name").classList.toggle('dark');
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

    let post_name = document.getElementsByTagName("h1")[0].textContent
    let post =
    {
        "name" : post_name,
        "href" : window.location.href,
    }

    let data = localStorage.getItem("saved_post")

    if (data == null) {
        data = []
        // {
        //     "list" : [],
        //     []
        // }
        data.push(post)
        // data.list.push(post)
        localStorage.setItem("saved_post", JSON.stringify(data))
        console.log(data)
    } 

    else {
        data = JSON.parse(localStorage.getItem("saved_post"))

        // {
        //     // "list" : 
        //     [
        //         JSON.parse(data)
        //     ],
        // }

        let posts = 
        {
            "name" : post_name,
            "href" : window.location.href,
        }
        // data.list.push(posts)
        data.push(posts)
        localStorage.setItem("saved_post", JSON.stringify(data))
        console.log(data)
    }



    // console.log(data)
    // console.log(datas)
    // data.push(post)
    // datas.push(post)
    // localStorage.setItem("saved_post", JSON.stringify(data), JSON.stringify(datas))
})

document.getElementById("no").addEventListener("click",()=>{
    document.getElementById("save-post").style.display = "none"
})

var postName = JSON.parse(localStorage.getItem("saved_post"))

for (i = 0; i < postName.length; i ++) {
    let posts = document.createElement("div")
    posts.innerHTML = `
    <ul>
        <li><a href = "${postName[i].href}" id="save-post-review-name">${postName[i].name}</a></li>
    </ul>
    `
    document.getElementById("save-post-review-page-content").appendChild(posts)
}

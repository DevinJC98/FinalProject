document.body.addEventListener("load", printstringbyletter());


function printstringbyletter()
{
    console.log("qwert");
    
let text = "2024 was a wild time...";
let index = 0;

let typing = setInterval(function() {

    intro.innerHTML += text.charAt(index);
    index++;
    
    if(index == text.length)
        {
            console.log("fading");

            intro.style.animation = "fadeAnimation 1s linear 1s 1 normal forwards";
            mainPage.style.animation = "mainload 1.2s linear 2.8s 1 normal forwards"
        }

}, 75);

}

function change()
{
    document.body.style.animation = "fadeAnimation 1s linear 0s normal forwards"
    setTimeout(function(){

        window.location.href = "post1.html";

    }, 1000)
}

function changehome()
{
    document.body.style.animation = "fadeAnimation 1s linear 0s normal forwards"
    setTimeout(function(){

        window.location.href = "index.html";

    }, 1000)

}

function change2()
{
    document.body.style.animation = "fadeAnimation 1s linear 0s normal forwards"
    setTimeout(function(){

        window.location.href = "post2.html";

    }, 1000)

}

function change3()
{
    document.body.style.animation = "fadeAnimation 1s linear 0s normal forwards"
    setTimeout(function(){

        window.location.href = "post3.html";

    }, 1000)

}
function change4()
{
    document.body.style.animation = "fadeAnimation 1s linear 0s normal forwards"
    setTimeout(function(){

        window.location.href = "post4.html";

    }, 1000)

}



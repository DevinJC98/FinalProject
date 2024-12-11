document.getElementById("hogShack").addEventListener("mouseenter", function imgSwap()
{
   
    console.log("Swap");
    let pictures = ["Images/Porkies.jpg", "Images/misc-hogstuff.jpg", "Images/porkSite.jpg"];
    let picCount = 0;
    
    let swap = setInterval(function()
    {
        picCount++;

        if(picCount >= pictures.length )
        {
            picCount -= picCount;
        }
        
        hogShack.src = pictures[picCount];
    
    }, 2000)

    document.getElementById("hogShack").addEventListener("mouseleave", function imgSwap()
    {
        clearInterval(swap);
    })

})




function change()
{
           window.location.href = "post1.html";

}

function changehome()
{
    
        window.location.href = "index.html";
   
}

function change2()

{  
        window.location.href = "post2.html";

}

function change3()
{
    
        window.location.href = "post3.html";

}
function change4()
{
        window.location.href = "post4.html";
}



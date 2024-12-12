

document.getElementById("hogShack").addEventListener("mouseenter", function()
{
   
    
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
    
    }, 1500)

    document.getElementById("hogShack").addEventListener("mouseleave", function()
    {
        clearInterval(swap);
    })

})




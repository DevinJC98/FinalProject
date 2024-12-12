document.getElementById("hotSauce").addEventListener("mouseenter", function()
{
   
    
    let pictures = ["Images/pineapple.jpg", "Images/birdsEye.jpg", "Images/ghostPepper.jpg"];    
    let picCount = 0;
    
    let swap = setInterval(function()
    {
        picCount++;
        
        if(picCount >= pictures.length )
        {
            picCount -= picCount;
        }
        
        hotSauce.src = pictures[picCount];
    
    }, 1500)

    document.getElementById("hotSauce").addEventListener("mouseleave", function()
    {
        clearInterval(swap);
    })

})
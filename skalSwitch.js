document.getElementById("skalTavern").addEventListener("mouseenter", function()
{
    let carousel = ["Images/skal.jpg", "Images/skalIcons.jpg", "Images/skalAssets.jpg"]   
    let picCounter = 0;
    
    let picswap = setInterval(function()
    {
        picCounter++;
        
        if(picCounter >= carousel.length )
        {
            picCounter -= picCounter;
        }
        
        skalTavern.src = carousel[picCounter];
    
    }, 1500)

    document.getElementById("skalTavern").addEventListener("mouseleave", function()
    {
        clearInterval(picswap);
    })

})
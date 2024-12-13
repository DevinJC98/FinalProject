//All my js pages have essentially the same function. I am keeping them seperate rather than on one js file so no console errors appear due to missing id's

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

    // I'm not sure if nesting this function inside the other is the best way to do it. When written as seperate eventListeners the mouse leaving
    // the image did not stop the interval.
    document.getElementById("hotSauce").addEventListener("mouseleave", function()
    {
        clearInterval(swap);
    })

})
/**
 * Created by Godai Yuusaku on 9/24/2016.
 */
var modal = document.getElementById("myNewModal");
var modalImg = document.getElementById("img01");

function myFunction(obj)
{
    modal.style.display = "block";
    modalImg.src = obj.src;
}

window.onclick = function(event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
    else if (event.target == modalImg)
    {
        modal.style.display = "none";
    }
}
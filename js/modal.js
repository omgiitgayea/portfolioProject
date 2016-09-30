/**
 * Created by Godai Yuusaku on 9/24/2016.
 */
var modal = document.getElementById("myNewModal");
var modalImg = document.getElementById("img01");
var body = document.body;

function myFunction(obj)
{
    modal.style.display = "block";
    modalImg.src = obj.src;
    body.style.overflow = "hidden";
    TweenMax.from(modalImg, 1, {scale: 4, ease:Back.easeOut.config(2)});
}

window.onclick = function(event)
{
    if (event.target == modal || event.target == modalImg)
    {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}
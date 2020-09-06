// WHEN TASKS ARE BEEN ADDED...CATEGORY COMING AT THE RIGHT SIDE OF TASK ADDED HAVING DIFFERENT BACKGROUND COLORS.......badge
// JS for removing the default bg color

var x=document.getElementsByClassName("badge");
for(var i=0; i<x.length; i++)
{
    
    if(x[i].innerText=="")
    {

        x[i].style.display="none";
        
    }
}

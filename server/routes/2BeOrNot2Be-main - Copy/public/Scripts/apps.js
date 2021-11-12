  /*  
    File Name: app.js
    Group 2: 2BeOrNot2Be
    
     */

//IIFE -- Immediately Invoked Fucntion Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for (button of deleteButtons)
        {
            button.addEventListener('click', (event) =>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/survey-list');
                }
            });
        }
        
    }
    window.addEventListener("load", Start);
})();



$(document).ready(function(){
    
    $("#displayName").hover(function(){
        $("#slide").slideDown("fast");
        clearTimeout(debounce);
    });
    $("#slide").hover(function(){
        $("#slide").slideDown("fast");
        clearTimeout(debounce);
    });
    $("#displayName").mouseleave (function() {
        debounce = setTimeout(closeMenu,200);
    });
    $("#slide").mouseleave (function() {
        debounce = setTimeout(closeMenu,200);
    });
    
    var debounce;
    var closeMenu = function(){
        $("#slide").slideUp("fast");
        clearTimeout(debounce);
    }
  });
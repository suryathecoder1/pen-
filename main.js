var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var width = screen.width;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    //Define "new_width" and "new_height" variables to store new screen width and height.


    /*If the screen size is less than 992 (means 992px), then change the width and height of 
    the canvas with the new width and new height */


    //Change 'mousedown' event to 'touchstart'
    canvas.addEventListener("mousedown", my_mousedown);  
    //Change the function to 'my_touchstart'  
    function my_mousedown(e)
    {
        //Log my_toustart in console.


        //Addictonal Activity start
       
       
        //Addictonal Activity ends

        //Update the last_position_of_x_touch and last_position_of_y_touch here.
       



    }

    //Replace the 'mousemove' event with 'touchmove'.
    canvas.addEventListener("mousemove", my_mousemove);
    //Replace the "my_mousemove()" function with "my_touchmove()" function.
    function my_mousemove(e)
    {
        //Log the "my_touchMove" in the console.
        console.log("my_touchMove");

        /*Update the "current_position_of_touch_x" and "current_position_of_touch_y" 
        with the touched points on canvas.*/
        current_position_of_touch_x = 
        current_position_of_touch_y = 

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
    
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    //Additional activity to clear area.

    


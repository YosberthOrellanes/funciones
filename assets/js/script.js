function pintar(ele, color = 'green'){
    ele.style.color = color;
    ele.style.fontSize = "100px"
    
    }

    const ele = document.getElementById("ele1");
pintar(ele);


ele.addEventListener("click", function(){
    pintar(this, 'yellow');
});
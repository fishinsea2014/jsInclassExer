
$(function(){
    console.log('week3');
    var createWindow = (function() {
        let div;         
        return function(){
            
            debugger;
            if (!div){
                div =document.createElement("div");
                div.innerHTML = "hello world";
                div.style.display = 'none';
                document.body.appendChild(div);
            };
            return div;
        }        
    })();
    document.getElementById('btn').onclick = function() {
        var str = createWindow();
        str.style.display = 'block';
    }
})

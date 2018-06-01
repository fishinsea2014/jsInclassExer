//JSON
var data ={
    "name":"lily",
    "hobby":["sing","dance","game"],
    "work":{
        "job":"web开发",
        "address":"wulan"
    },
    "member":[{
            "name":"ben1",
            "hobby":["game","sing"],
            "member":[{
                "name":"ben1-1",
                "hobby":["game","sing"]
            },{
                "name":"ben1-2",
                "hobby":["game","sing"]
            }]
        },
        {
            "name":"ben2",
            "hobby":["game","sing"],
            "member":[{
                "name":"ben2-1",
                "hobby":["game","sing"]
            },{
                "name":"ben2-2",
                "hobby":["game","sing"]
            }]
        },
        {
            "name":"ben3",
            "hobby":["game","sing"],
            "member":[{
                "name":"ben3-1",
                "hobby":["game","sing"]
            },{
                "name":"ben3-2",
                "hobby":["game","sing"]
            }]
        }]
}
console.log(JSON.stringify(data,['name','hobby','member']));

//Ajax

// var xhr;
// if (window.XMLHttpRequest){
//     xhr = new XMLHttpRequest();
// }else {
//     xhr = new ActiveXObject("Microsoft, XMLHTP"); // For IE5 and IE6
// };

// xhr.open('get', 'http://localhost:3000/info', true);  //type of request, true is async, false is sync
// xhr.setRequestHeader("Content-Type","application/json")
// xhr.send(JSON.stringify({"name":"sonia"}));
// xhr.onreadystatechange =function(){
//     if (xhr.readyState == 4 && xhr.status == 200){
//         console.log(xhr.responseText)
//         //TODO something
//     }
// };

//Jquery Ajax
var x=function () {
    $.ajax({
        type:'post',
        url:'http://localhost:3000/info',
        async: true,
        data: {username:"aaa", content:"bbb"},
        dataType:'jsonp',
        success: function(){
            var obj = msg;
            console.log(JSON.stringify(msg));

        },
        error:function(error){

        }
    })
}

x();




// function a3(){
//     var n = 0;
//     function add() {
//         n++;
//         console.log(n);
//     }

//     add();
//     return add;
    


// };

// a3()();
// a3();

// var a = (function(){
//     let n=0;
//     function add(){
//         n++;
//         console.log(n);
//     };
//     return add;
// }());

// a();

// var x=1;

// function f(x){
//     var i=0;
//     let x=2;
//     return function(){
        
//         return x[++i];
//     }    
// }

// var ff= f(['a','b','b']);
// console.log(ff());
// console.log(x);

// var f= function(){
//     console.log()
// }
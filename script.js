let box=document.querySelectorAll(".box");
let set=document.querySelector("#reset");
let hide= document.querySelector("#hide");




let text0=true;
box.forEach(function(val){
    val.addEventListener("click",function(){
        if(text0===true){
            val.innerHTML="0";
            text0=false;
            val.disabled="text0";
            
        }
        else{
            val.innerHTML="X";
            val.disabled="text0";
            text0=true;
        }
        win();

    });
});

let disable=() =>{
    for(let val of box){
        val.disabled="true"
    }
}
let enable=() =>{
    for(let val of box){
        val.disabled="false";
        box.innerText="";

    }
}


let pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
function win(){
for(let ptn of pattern){
//    console.log(ptn[0],ptn[1],ptn[2]);
let p1= box[ptn[0]].innerText;
let p2= box[ptn[1]].innerText;
let p3= box[ptn[2]].innerText;

if(p1 !="" && p2 !="" && p3 !=""){
    if(p1===p2 && p2===p3){
        console.log("winner")
       let a= hide.style.display="block";
       hide.style.display="flex";

     disable();

       hide.innerText=(`${p1} is winner`);




    }
    
}

}
};



set.addEventListener("click", function newgame(){
    text0=true;
    hide.innerText="";
    enable();

});

let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turnO=true;
const winingpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetgame=()=>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");

}

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disablebox=()=>{
    for(let box of box){
        
box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of box){
        
box.disabled=false;
    
    }
}

const showwinner=(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();

}

const checkwinner=()=>{
    for(let pattern of winingpatterns){
       
          let pos1val=  box[pattern[0]].innerText;
           let pos2val= box[pattern[1]].innerText;
          let pos3val=  box[pattern[2]].innerText;
          
          if(pos1val!="" && pos2val!=""&& pos3val!=""){
            if(pos1val=== pos2val&& pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
          }
     


    }

};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
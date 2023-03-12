const elements = document.querySelectorAll("input[type=checkbox]")
const elemArr=Array.prototype.slice.call(elements);
const doneElem=document.getElementById("done")
const writeElem=document.getElementById("write")
let checkeds=[]
doneElem.innerText=`Виконано ${checkeds.length}/${elements.length}`
elements.forEach((v)=>{ 
    v.addEventListener("click",(e)=>{  
        console.log(e.target.checked)
        checkeds=elemArr.filter(r=>r.checked)
        console.log(checkeds)
        doneElem.innerText=`Виконано ${checkeds.length}/${elements.length}`
    })
})

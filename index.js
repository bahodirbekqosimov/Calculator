let kvd = document.querySelector("#kvd")
let sqrt = document.querySelector("#sqrt")
let sin = document.querySelector("#sin")
let cos = document.querySelector("#cos")
let tan = document.querySelector("#tan")
let n0 = document.querySelector("#num0")
let n1 = document.querySelector("#num1")
let n2 = document.querySelector("#num2")
let n3 = document.querySelector("#num3")
let n4 = document.querySelector("#num4")
let n5 = document.querySelector("#num5")
let n6 = document.querySelector("#num6")
let n7 = document.querySelector("#num7")
let n8 = document.querySelector("#num8")
let n9 = document.querySelector("#num9")
let clr = document.querySelector("#clear")
let bol = document.querySelector("#bol")
let pow = document.querySelector("#pow")
let draw = document.querySelector("#draw")
let dot = document.querySelector("#dot")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let del = document.querySelector("#delete")
let foiz = document.querySelector("#foiz")
let out = document.querySelector("#qiym")
let javob = document.querySelector("#javob")
var arr = ""
let x
let m = Math
function misol(){

    n0.addEventListener("click",()=>{
        arr+="0"
        out.textContent = arr  
    })
    n1.addEventListener("click",()=>{
    arr+="1"
    out.textContent = arr
    })
    n2.addEventListener("click",()=>{
    arr+="2"
    out.textContent = arr
    })
    n3.addEventListener("click",()=>{
        arr+="3"
        out.textContent = arr
    })
    n4.addEventListener("click",()=>{
        arr+="4"
        out.textContent = arr
    })
    n5.addEventListener("click",()=>{
        arr+="5"
        out.textContent = arr
    })
    n6.addEventListener("click",()=>{
        arr+="6"
        out.textContent = arr
    })
    n7.addEventListener("click",()=>{
        arr+="7"
        out.textContent = arr
    })
    n8.addEventListener("click",()=>{
        arr+="8"
        out.textContent = arr
    })
    n9.addEventListener("click",()=>{
        arr+="9"
        out.textContent = arr

    })
    dot.addEventListener("click",()=>{
        arr+="."
        out.textContent = arr
    })
    plus.addEventListener("click",()=>{
        arr+="+"
        out.textContent = arr
    })
    minus.addEventListener("click",()=>{
        arr+="-"
        out.textContent = arr
    })
    pow.addEventListener("click",()=>{
        arr+="×"
        out.textContent = arr
    })
    bol.addEventListener("click",()=>{
        arr+="÷"
        out.textContent = arr
    })
    clr.addEventListener("click",()=>{
        arr=""
        out.textContent = arr
        javob=""
    })
    del.addEventListener("click",()=>{
        arr=arr.slice(0, -1)
        out.textContent = arr
    })
    foiz.addEventListener("click",()=>{
        arr+="%"
        out.textContent = arr
    })
}
misol()

function old(){

    function yechim(a){
        let arg = ["÷", "×", "-", "+","%"];
        for (let el of arg) {
            if (a.includes(el)) {
                if (el === "+") {
                    let out = a.split(el, 2); 
                    x = Number(out[0]) + Number(out[1]);
                    return x
                }
                if (el === "-") {
                    let out = a.split(el, 2); 
                    x= Number(out[0]) - Number(out[1]);
                    return x
                    
                }
                if (el == "÷") {
                    let out = a.split(el, 2); 
                    x = Number(out[0]) / Number(out[1]);
                    if(x==Infinity || x==-Infinity){
                        return "Misolda matematik xato"
                    }else{
                    return Number(x.toFixed(5))
                    }
                    
                }
                if (el == "×") {
                    let out = a.split(el, 2); 
                    x = Number(out[0]) * Number(out[1]);

                    
                    return x                    
                }
                if (el =="%") {
                    let out = a.split(el,2)
                    x = (Number(out[0])*Number(out[1]))/100
                    return x
                }
                return a
              
            
                
                
            }
        }
        
    }

    return yechim(arr)
  
} 

    
old()


draw.addEventListener("click",()=>{

    out.textContent += `=${old(arr)}`
    
})

kvd.addEventListener("click",()=>{
    out.textContent =`(${arr})²=${Number(old())**2}`
})
sqrt.addEventListener("click",()=>{
    out.textContent = `√${arr}=${Math.sqrt(Number(old()))}`
})
sin.addEventListener("click",()=>{
    out.textContent = `sin(${arr})=${Math.sin(Number(old(arr))).toFixed(5)}`
})
cos.addEventListener("click",()=>{
    out.textContent = `cos(${arr})=${Math.cos(Number(old(arr))).toFixed(5)}`
})
tan.addEventListener("click",()=>{
    out.textContent = `tan(${arr})=${Math.tan(Number(old(arr))).toFixed(5)}`
})

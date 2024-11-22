

const result=document.getElementsByClassName("nayeem")

console.log(result[2].innerText)

const title= document.getElementsByClassName("shanto")
// console.log(title.innerText)
for(let ti of title){
    console.log(ti.innerText)
}


const docum=document.getElementById("lorem")
console.log(docum)

const first=document.getElementById("first")
first.innerText="my name is munni.next"
first.style.backgroundColor="blue"
first.style.color="whiet"
first.style.borderRadius="15px"
first.style.padding="25px"
first .style.margin="50%"

const div=document.getElementById(container)
console.log(div.parentNode.parentNode)
div.setAttribute("class","ridoy")
div.classList.add("element",'get')
div.classList.remove("get")
// console.log(div.childnodes[2].childnodes[0].innerText)


const some=document.getElementById("some")
some.getAttribute("id")
some.setAttribute("class","smell")
some.removeAttribute("class")
console.log(some)


const select=document.getElementsByClassName("select")

const h2=document.createElement("h2")
h2.innerText="amar sonar bangla ami tmay valobashi"
select.appendchild(h2)
console.log(select)

const ul=document.createElement("ul")
const li=document.createElement("li")
li.innerText="chirodin tmar akash"
ul.appendchild("li")
select.appendchild("ul")
console,log("select")






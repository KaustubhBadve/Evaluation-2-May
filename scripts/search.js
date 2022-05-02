// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar()






let query=localStorage.getItem("query")

async function Search(){
    try{
      
let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

let data=await res.json()
console.log(data.articles)
appendd(data.articles)
// return data
    }catch(err){
        console.log(err)
    }
}

Search()



function appendd(data){

    document.getElementById("results").innerHTML=null

    data.forEach(({title,urlToImage,description})=> {
        let news=document.createElement("div")
        news.setAttribute("class","news")

        let t=document.createElement("h3")
        t.innerText=title
        
        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("id","imgdiv")
        let img=document.createElement("img")
        img.src=urlToImage

        imgdiv.append(img)

        let p=document.createElement("p")
        p.innerText=description
        
         let mix=document.createElement("div")
         mix.setAttribute("id","mix")
         mix.append(t,p)

        news.append(imgdiv,mix)

        document.getElementById("results").append(news)
    })
}

import {search,append} from "./fetch.js"

let searchhh=(e)=>{
    if(e.key=="Enter")
    {
        let query=document.getElementById("search_input").value

        search(query).then((data) => {
            console.log(data)
            append(data.articles)
        })
    }
}

document.getElementById("search_input").addEventListener("keydown",searchhh)




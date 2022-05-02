// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar()

import {search,append} from "./fetch.js"



// async function search(query){
//     try{
      
// let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

// let data=await res.json()
// console.log(data)
// return data
//     }catch(err){
//         console.log(err)
//     }
// }

// search()





// function funcONsearchbar(e){
    
//    if(e.key==="Enter")
//    {
//     let query=document.getElementById("search_input").value

//     search(query)

//     localStorage.setItem("query",query)
//    window.location.href="search.html"

    
//    } 
// }

// document.getElementById("search_input").addEventListener("keydown",funcONsearchbar)






let searchhh=(e)=>{
    if(e.key=="Enter")
    {
        let query=document.getElementById("search_input").value

        search(query).then((data) => {
            console.log(data)
            append(data.articles)

            localStorage.setItem("query",query)
        })
        window.location.href="search.html"
    }
}

document.getElementById("search_input").addEventListener("keydown",searchhh)















let countries=document.getElementById("sidebar").children

for(let el of countries){
    el.addEventListener("click",Sidebarcountry)
}

async function Sidebarcountry(){
     
try{
let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`) 
let data=await res.json()

console.log(data.articles)
appendd(data.articles)
}catch(err){
    console.log(err)
}
}



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






async function indiadefault(){
     
    try{
    let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`) 
    let data=await res.json()
    
    console.log(data.articles)
    appenddd(data.articles)
    }catch(err){
        console.log(err)
    }
    }
    
    indiadefault()
    
    function appenddd(data){
    
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








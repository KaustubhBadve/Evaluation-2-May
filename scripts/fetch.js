async function search(query){
    try{
      
let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

let data=await res.json()
console.log(data)
return data
    }catch(err){
        console.log(err)
    }
}

function append(data){

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

        news.addEventListener("click",function(){
                      fundetailednews(elem)
        })

        document.getElementById("results").append(news)
    })
}

export {search,append}
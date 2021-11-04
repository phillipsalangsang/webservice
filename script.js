"use strict"

let img = document.createElement("img")
document.body.appendChild(img)

async function fetchData(url) {  //Uniform Resource Locator
    let headers = await fetch(url);   //Get the headers 
    let data = await headers.text();  //get the document 'payload'

    let randomDog = JSON.parse(data)
    img.src = randomDog.url
  }


function dogPics(){
fetchData("https://random.dog/woof.json") //Hit the endpoint of the service
}




 


async function fetchData(url) {  //Uniform Resource Locator
    let headers = await fetch(url);   //Get the headers 
    let data = await headers.text();  //get the document 'payload'
    
    let obj=JSON.parse(data)

    alert(obj.setup) 

    /*if (joke.flags.nsfw || joke.flags.racist || joke.flags.sexist   ){
        let tooRude=document.createElement("H2")    
        document.body.appendChild(tooRude)
        tooRude.innerHTML="Too Rude to tell"
    }
    else{

        let setup=document.createElement("H2")
        document.body.appendChild(setup)
        setup.innerHTML=joke.setup

        let delivery = document.createElement("H2")
        document.body.appendChild(delivery)
        delivery.innerHTML=joke.delivery
    }
    */
   
  }

  
  fetchData("https://open.er-api.com/v6/latest/USD") //Hit the endpoint of the service
  



 


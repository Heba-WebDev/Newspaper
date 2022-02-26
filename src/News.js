import React, { useEffect } from "react";

export default function News() {

    const [headlines, setHeadlines] = React.useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=27c9e748acd248c4981c2ab8eec5285e')
        .then(response =>  response.json())
        .then(data => setHeadlines(data.articles))
        .catch(error => console.error("error"))
    }, [])


    
 

    
    return (
        <div className="news-wrapper">
            
      
           
             
             {headlines.map((headline, index) => { 
                 return (
                    <div className="headlines-wrapper">

                    <h2 key={index}>{headline.title}</h2>
                    <img src={headline.urlToImage} />
                    <p>{console.log(headline)}</p>
                    <p>{headline.description}</p>
                    
                  
                    </div>
                 )
             
             })}
                
                
           
       
        </div>
    )
}
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function News() {

    
        
    // const [width, setWidth] = React.useState(0);
    // const imagesWidth = useRef();

    

    const [mainHeadline, setMainHeadlines] = React.useState([]);
    const [headlines, setHeadlines] = React.useState([]);
    const [economy, setEconomy] = React.useState([]);
    const [images, setImages] = React.useState([]);
    
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=27c9e748acd248c4981c2ab8eec5285e')
        .then(response =>  response.json())
        .then(data => {
            setMainHeadlines(data.articles.slice(0,1))
            setHeadlines(data.articles.slice(1,9))
        })
        .catch(error => console.error("error"))
    }, [])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=economy&apiKey=27c9e748acd248c4981c2ab8eec5285e')
        .then(response =>  response.json())
        .then(data => {
            setEconomy(data.articles.slice(0,4))
        })
        .catch(error => console.error("error"))
    }, [])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=images&apiKey=27c9e748acd248c4981c2ab8eec5285e')
        .then(response =>  response.json())
        .then(data => {
            setImages(data.articles.slice(2,8))
        })
        .catch(error => console.error("error"))
    }, [])
    
 

    
    return (
        <div className="news-wrapper">
            
      
           
             
             {mainHeadline.map((headline, index) => { 
                 return (
                    <div className="mainheadline-wrapper">

                    
                    <img src={headline.urlToImage} />
                    <h2 className="headline-title" key={index}>{headline.title}</h2>
                    <p className="headline-description">{headline.description}</p>
                    <small className="headline-time">{headline.publishedAt}</small>
                    
                  
                    </div>
                 )
             
             })}
                
                <hr></hr>
                <h3 className="latest">Latest News</h3>
           {headlines.map((headline) => {
               
                return (
             <div className="headlines-wrapper">
                 <div className="headline-text">
                 <li>{headline.title}</li>
                 </div>
            </div>)
                
         })}
       

       <hr></hr>

       <div className="economy-wrapper">
           <h2 className="economy"> ECONOMY</h2>
          <div className="economy-inner-wrapper">
                {economy.map((headline) => {
                 return (
                   <div className="economy-item">
                   <img src={headline.urlToImage} />
                    <h2 className="economy-title">{headline.title}</h2>
                   </div>
               )}
               )}
            </div>
       </div>

       <hr></hr>

       <motion.div className="images-wrapper">

      <motion.div drag="x" dragConstraints={{right: 0}} className="inner-images">

       {images.map((image) => {
        return(
            <motion.div className="item">
            <img src={image.urlToImage} />
            </motion.div>
        
        )
       })}
      </motion.div>

       </motion.div>
      
        </div>
        
    )
}
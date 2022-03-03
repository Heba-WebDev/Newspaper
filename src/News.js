import React, { useEffect } from "react";
import { motion } from "framer-motion";


export default function News() {

    
        
    const [width, setWidth] = React.useState(0);
    const imagesWrapper = React.useRef();


    useEffect(() => {
       
      
        setWidth(imagesWrapper.current.scrollWidth - imagesWrapper.current.offsetWidth)
           
        },[])


    const [mainHeadline, setMainHeadlines] = React.useState([]);
    const [headlines, setHeadlines] = React.useState([]);
    const [economy, setEconomy] = React.useState([]);
    const [tech, setTech] = React.useState([]);
    const [sports, setSports] = React.useState([]);
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
            setEconomy(data.articles.slice(5,9))
        })
        .catch(error => console.error("error"))
    }, [])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tech&apiKey=27c9e748acd248c4981c2ab8eec5285e')
        .then(response =>  response.json())
        .then(data => {
            setTech(data.articles.slice(0,4))
        })
        .catch(error => console.error("error"))
    }, [])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=sports&apiKey=27c9e748acd248c4981c2ab8eec5285e')
        .then(response =>  response.json())
        .then(data => {
            setSports(data.articles.slice(0,4))
        })
        .catch(error => console.error("error"))
    }, [])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=travel&apiKey=27c9e748acd248c4981c2ab8eec5285e')
        .then(response =>  response.json())
        .then(data => {
            setImages(data.articles.slice(2,8))
        },[])
        .catch(error => console.error("error"))
    }, [])
    
 

    


    return (
        <div className="news-wrapper">
            
      
           
             
             {mainHeadline.map((headline, index) => { 
                 return (
                    <div className="mainheadline-wrapper">

                    
                    <img src={headline.urlToImage} alt={headline.description}/>
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
                   <img src={headline.urlToImage} alt={headline.description}/>
                    <h2 className="economy-title">{headline.title}</h2>
                   </div>
               )}
               )}
            </div>
       </div>

       <hr></hr>

       <div className="tech-wrapper">
           <h2 className="tech">Tech</h2>
          <div className="tech-inner-wrapper">
                {tech.map((headline) => {
                 return (
                   <div className="tech-item">
                   <img src={headline.urlToImage} alt={headline.description}/>
                    <h2 className="tech-title">{headline.title}</h2>
                   </div>
               )}
               )}
            </div>
       </div>

       <hr></hr>


       <div className="sports-wrapper">
           <h2 className="sports">Sports</h2>
          <div className="sports-inner-wrapper">
                {sports.map((headline) => {
                 return (
                   <div className="sports-item">
                   <img src={headline.urlToImage} alt={headline.description}/>
                    <h2 className="sports-title">{headline.title}</h2>
                   </div>
               )}
               )}
            </div>
       </div>

       <hr></hr>

       <motion.div className="images-wrapper" ref={imagesWrapper}>
       <motion.h2 className="photosOfTheDay">Photos of the day</motion.h2>
      <motion.div 
      drag="x" 
      dragConstraints={{right:0, left:-width}} 
      className="inner-images"  
      whileTap={{cursor: "grabbing"}} >

       {images.map((image) => {
        return(
            <motion.div className="item">
            <img src={image.urlToImage} alt={image.description}/>
            </motion.div>
        
        )
       })}
      </motion.div>

       </motion.div>
      
        </div>
        
    )
}
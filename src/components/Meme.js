import React from "react"
// import memesData from "../memesData.js"

export default function Meme() {
    // const [memeImage,setmemeImage]=React.useState("https://i.imgflip.com/1g8my4.jpg");
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1ur9b0.jpg"
    })
    
    const [allMemeImages,setallMemeImages]=React.useState({})
    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(x => setallMemeImages(x))
    },[])/////////useEffect will run at last
    
    function getMemeImage(){
        const memeArray=allMemeImages.data.memes
        const randomnumber=Math.floor(Math.random()*memeArray.length)
        const url=memeArray[randomnumber].url
        
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage:url
            }
        })
    }
    
    console.log(allMemeImages)
    function handleChange(event){
        setMeme(prevmeme => {
            return {
                ...prevmeme,
                [event.target.name]:event.target.value
            }
        })
    }
    
    
    
    
    
     
    return (
        <main>
            <div className="form"> 
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
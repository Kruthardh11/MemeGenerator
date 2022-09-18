import React from "react";
import memesdata from "./memesdata";
import './style.css';

export default function Form(){
    let url
    const [meme, setmeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage :"http://c.files.bbci.co.uk/13643/production/_99372497_whatsubject.jpg",
    })
    const [allMemeImages, setallMemeImages] = React.useState([])
    function getNewImage(){
       const randomNumber = Math.floor(Math.random()*allMemeImages.length)
       const url = allMemeImages[randomNumber].url
       setmeme(prevMeme =>({
            ...prevMeme,
            randomImage: url,
       }))
    }
    function handleChange(event){
        const {name, value}= event.target
        setmeme( prevMeme =>({
            ...prevMeme,
            [name]: value
        })
        )
    }
    const [textColor, setTextColor] = React.useState('black');
    const [isBlack, setIsBlack] = React.useState(true);

    const handleChnageTextColor = (e) => {
        setIsBlack(!isBlack);
        setTextColor(isBlack ? 'white' : 'black ');
    }
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data=> setallMemeImages(data.data.memes))
    }, [])
//nothing important
   return(
        <main className="main-form">
            <div className="form">
                <input type="text" placeholder="upper text" className="upper-text" name="topText" onChange={handleChange} value={meme.topText}></input>
                <input type="text" placeholder="lower text" name="bottomText" className="lower-text" onChange={handleChange} value={meme.bottomText}></input>
                <button  className="font-color-btn" onClick={handleChnageTextColor} >Change Font Color</button>
                <button className="form-btn"  name="randomImage" onClick={getNewImage}>Get a new image</button>
                <div>
                <header className="meme-top-text" style={{ color:textColor}}>{meme.topText}</header>
                <header className="meme-bottom-text" style={{ color:textColor}}>{meme.bottomText}</header>
                <img  className="meme-image" src={meme.randomImage}/>
                </div>
            </div>
        </main>
    )
}
import React from 'react'
import memeData from '../memeData';

export default function Meme(){
   
    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url);
    }
    return (
        <main>
            <div className='form'>
                <div>
                    <label htmlFor='top-text'>Top Text
                        <input 
                            id='top-text'
                            type='text' 
                            placeholder="Top text"
                            className='form-input'
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='top-text'>Bottom Text
                        <input 
                            id='bottom-text'
                            type='text' 
                            placeholder="bottom text"
                            className='form-input'
                        />
                    </label>
                </div>
                <button 
                    className='form-button'
                    onClick={getMemeImage}
                >
                        Get a new meme image  🖼
                </button>
            </div>
            <img src={memeImage} alt="meme" className='meme-image'/>
        </main>
    )
}
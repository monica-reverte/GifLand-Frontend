import React from 'react'
import "./Storie.css"


export const Storie = ({ gifsArray }) => {

    const getGif = () => {
        let randomIndex = Math.floor(Math.random ()* 15) + 0;
        let randomGif = gifsArray.data[randomIndex];
        console.log(gifsArray)

        if(randomGif) {
            return randomGif;
        }
    }


    const GifTitle = ({giphy}) => {
        let gifUrl = giphy ? giphy.images.downsized.url : "";
        
        return(
            <div className="title">
            <div className="gif-title">
                <div className='text-title'>
                    <p>{giphy?.title}</p>
                </div>
                <img src={gifUrl} />
                <div className="line-box">
                    <div className="line-top-green"></div>
                    <div className="line-top-midgreen"></div>
                    <div className="line-top-blue"></div>
                

                </div>
                
                
            </div>
            </div>
        )
    }

    const gridGifsConfig = [
        ["landscape-left-row", 3],
        ["landscape-right-row", 3],
        ["no-landscape-row", 4]
    ]

    const  createTitles = (numTitles) => {
        let title = []
        for (let i = 0; i< numTitles; i++) {
            title.push(<GifTitle giphy={getGif()} key={i}/>)
        }
        return title
    }


  return (
    <div className="stories-section">
        {gridGifsConfig.map(([layoutClass, numTitles], index)=> {
            const titles = createTitles(numTitles);
            return (
                <div className={layoutClass} key={index}>
                    {titles}
                </div>
            )
        })}

    </div>
  )
}

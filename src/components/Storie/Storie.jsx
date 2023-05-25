import React from 'react';
import "./Storie.css";

export const Storie = ({ gifsArray }) => {
    const getGif = () => {
        if (gifsArray && gifsArray.length > 0) {
            let randomIndex = Math.floor(Math.random() * gifsArray.length);
            let randomGif = gifsArray[randomIndex];

            if (randomGif) {
                return randomGif;
            }
        }
        return null;
    }

    const GifTitle = ({ giphy }) => {
        let gifUrl = giphy ? giphy.images.downsized.url : "";

        return (
            <div className="title">
                <div className="gif-title">
                    <div className='text-title'>
                        <p>{giphy?.title}</p>
                    </div>
                    <img src={gifUrl} alt="" />
                </div>
                <div className="line-box">
                    <div className="line-top-green"></div>
                    <div className="line-top-midgreen"></div>
                    <div className="line-top-blue"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="stories-section">
            <div className="landscape-left-row">
                <GifTitle giphy={getGif()} />
                <GifTitle giphy={getGif()} />
                <GifTitle giphy={getGif()} />
            </div>
            <div className="landscape-right-row">
                <GifTitle giphy={getGif()} />
                <GifTitle giphy={getGif()} />
                <GifTitle giphy={getGif()} />
            </div>
            <div className="no-landscape-row">
                <GifTitle giphy={getGif()} />
                <GifTitle giphy={getGif()} />
                <GifTitle giphy={getGif()} />
                <GifTitle giphy={getGif()} />
            </div>
        </div>
    )
}



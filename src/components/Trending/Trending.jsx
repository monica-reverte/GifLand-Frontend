import React from 'react'
import "./Trending.css";
import { Splide, SplideSlide} from "@splidejs/react-splide"


export const Trending = ({ trend }) => {
  return (
    <SplideSlide className="trending-gif" key={trend.id}>
        <img src={trend.images.downsized.url} alt={trend.title} />
    </SplideSlide>
  )
}

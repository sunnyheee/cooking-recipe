import Carousel from "react-multi-carousel";
import {FoodCard} from "../FoodCard/FoodCard";
import './FoodSlider.style.css'
import 'react-multi-carousel/lib/styles.css';
import {responsive} from '../constant/reponsive'

export const FoodSlider = ({title, data}) => {

    return (
        <div>
            <h3 className="titleWord">{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="food-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={10000}
            >
                {data?.map((food,idx)=><FoodCard  food={food} key={idx}/>)}
            </Carousel>
        </div>
    )
}
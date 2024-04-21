import Carousel from "react-multi-carousel";
import {FoodCard} from "../FoodCard/FoodCard";
import './FoodSlider.style.css'
import 'react-multi-carousel/lib/styles.css';
import {responsive} from '../constant/reponsive'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const FoodSlider = ({title, data}) => {
    AOS.init();
    return (
        <div>
            <h3 data-aos="slide-left" data-aos-duration="2000" className="titleWord d-inline">{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="food-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={10000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                renderDotsOutside={true}
            >
                {data?.map((food,idx)=><FoodCard  food={food.food} key={idx}/>)}
            </Carousel>
        </div>
    )
}
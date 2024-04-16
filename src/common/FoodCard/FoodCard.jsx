import {Badge} from "react-bootstrap";
import "./FoodCard.style.css"
// import {usefoodGenreQuery} from "../../hooks/UsefoodGenre";
import {useNavigate} from "react-router-dom";

export const FoodCard = ({food}) => {

    // const {data: genreData} = usefoodGenreQuery();
    // const showGenre = (genreIdList) => {
    //     if (!genreData) return [];
    //     const genreNameList = genreIdList.map((id) => {
    //         const genreObejct = genreData.find((genre) => genre.id === id)
    //         return genreObejct.name;
    //     });
    //
    //     return genreNameList;
    // }
    //
    const navigator = useNavigate();
    const handleClick = (event,food) =>{
        event.preventDefault();
        navigator(`/recipe?q=${food.label}`);
    }

    return (
        <div
            className="food-card"
            style={{
                backgroundImage: `url("${food?.image}")`
            }}
            onClick={(event)=>handleClick(event,food)}
        >
            <div className="overlay">
                <h1 className="food-title">{food?.label}</h1>
                <div className="food-info">
                    <div>calories : {Math.round(food?.calories * 100) / 100}</div>
                    <div>Cooking Time : {Math.round(food?.totalTime)}</div>
                    {/*<div>{food?.adult ? 'ADULT' : 'ALL'}</div>*/}
                    {/*//<div>{showGenre(food?.genre_ids).map((id) => <Badge bg="danger">{id}</Badge>)}</div>*/}
                </div>
            </div>
        </div>
    )
}
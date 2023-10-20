import { useLoaderData } from "react-router-dom";
import Cards from "../cards/Cards";
import Slider from "../slider/Slider";





const AllCards = () => {
    const singleCards = useLoaderData();
    //    console.log(singleCards);

    return (
        <div >

            <div className=" mb-10">
                <Slider></Slider>
            </div>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                {
                    singleCards.map(item => <Cards key={item._id} item={item} ></Cards>)
                }

            </div>

        </div>


    );
};

export default AllCards;
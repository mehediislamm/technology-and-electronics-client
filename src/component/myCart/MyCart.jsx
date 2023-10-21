import { useLoaderData } from "react-router-dom";
import AddMyCard from "../addMyCard/AddMyCard";
// import { useState } from "react";

const MyCart = () => {
    const cardData = useLoaderData();
    // const [update, setUpdate] = useState(cardData)
   
    console.log(cardData);
    return (
        <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                cardData.map(mycard => <AddMyCard key={mycard._id} mycard={mycard} ></AddMyCard>)
            }
        </div>
    );
};

export default MyCart;
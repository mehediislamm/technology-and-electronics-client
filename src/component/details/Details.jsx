import {  useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Details = () => {

    const details = useLoaderData();
    const { image_one, name, description } = details;
    const addToCard = () => {
        const myData = {
            image_one, name, description
        }
        fetch("https://brand-shop-a5v2vn1az-mehediislamm.vercel.app/addCard",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.acknowledged == true){
                    swal("Good job!", "Add To Products Successfull", "success");
                }
            });

    }

    return (
        <div className="mb-10">

            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-[32vh] md:h-[64vh]" src={image_one} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-slate-400 card-title flex justify-center font-bold text-2xl pb-5">Product : {name}</h2>
                    <p className="flex justify-center">{description}</p>
                    <div className="card-actions justify-center">
                        <button onClick={addToCard} className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Details;

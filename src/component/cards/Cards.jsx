import { Link } from "react-router-dom";

const Cards = ({ item }) => {
    // console.log(item);
    const { _id, image_one, type, price, rating, name, brand_name } = item;
    return (
        <div className="mb-10"> 
            <div className="card card-compact h-[66vh] bg-base-100 shadow-xl">
                <figure><img className="h-[32vh]" src={image_one} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-slate-400">{brand_name}</h2>
                    <p className="text-xl font-medium text-slate-400">Name: {name}</p>
                    <div className="flex justify-between">
                        <h1 className=" text-xl font-medium text-slate-400">Type: {type}</h1>
                        <h1 className="text-xl font-mono text-slate-400">price : ${price}</h1>
                    </div>
                    <h1 className=" text-lg font-mono ">{rating}</h1>
                    <div className="card-actions flex justify-between">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">details</button></Link>
                        <Link to={`/updateproducts/${_id}`}><button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
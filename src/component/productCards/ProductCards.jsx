/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ProductCards = ({ products }) => {
    // console.log(products);
    const { image, brand_name,  } = products;
    return (
        <NavLink to={`/allcards/${brand_name}`}>
            <div className=" h-[40vh] card card-compact  shadow-xl ">
                <figure><img src={image} alt="error" /></figure>
                <div className="card-body">
                    <h2 className="card-title flex justify-center text-slate-400">{brand_name}</h2>
                
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCards;       

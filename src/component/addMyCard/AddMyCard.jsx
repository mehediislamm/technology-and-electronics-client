/* eslint-disable react/prop-types */

// import { useState } from "react";
import swal from "sweetalert";

const AddMyCard = ({ mycard }) => {
    const { image_one, name, } = mycard;
    console.log(mycard);
    

    // const [updateProduct, setUpdatedProduct] = useState(mycard);
    const handleDelete = (_id) => {


        fetch(`https://brand-shop-a5v2vn1az-mehediislamm.vercel.app/addCard/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.acknowledged == true) {
                    // const filterdata = updateProduct.filter((item) => item._id !== _id);
                    // setUpdatedProduct(filterdata)
                    swal("Delete!", "Delete Products Successfull", "error");
                }
            });
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image_one} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(mycard._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMyCard;
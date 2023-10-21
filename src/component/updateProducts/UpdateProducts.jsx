import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';



const UpdateProducts = () => {

    const singleProducts = useLoaderData();
    console.log(singleProducts);

    const handleUpdate = (e) => {

        e.preventDefault();
        const form = e.target;
        const image_one = form.image_one.value;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updateData = {
             name, type, price, description, rating, brand_name,image_one
        }
        console.log(updateData);


        fetch(`https://brand-shop-ky46ie1gc-mehediislamm.vercel.app/productsBrand/${singleProducts._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.modifiedCount>0){
                    swal("Good job!", "Update Producted Successfull", "success");
                }
            });



    };

    return (
        <div className="mb-10">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Update a Products</h2>
            <form onSubmit={handleUpdate}>
                {/* form image and name row */}
                <div className="md:flex mb-8 gap-5">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" defaultValue={singleProducts?.name} className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name" defaultValue={singleProducts?.brand_name} name="brand_name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Type and Price row */}
                <div className="md:flex mb-8 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Type" defaultValue={singleProducts?.type} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" defaultValue={singleProducts?.price} className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form Short description and Rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Short description" name="description" defaultValue={singleProducts?.description} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" defaultValue={singleProducts?.rating} className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>

                <div className="form-control md:w-full mb-10">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Image Url" defaultValue={singleProducts?.image_one} name="image_one" className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Update a Products" className=" text-white bg-slate-700 btn btn-block" />

            </form>
        </div>
    );
};

export default UpdateProducts;
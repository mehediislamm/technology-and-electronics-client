import swal from "sweetalert";


const AddProducts = () => {

    const handleAddProducts = (e) => {
        e.preventDefault();
        const form = e.target;
        const image_one = form.image_one.value;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const formData = {
            image_one, name, type, price, description, brand_name, rating
        }
        console.log(formData);
        fetch("https://brand-shop-a5v2vn1az-mehediislamm.vercel.app/productsBrand", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged == true) {
                    swal("Good job!", "Added Producted Successfull", "success");
                }
            });
    };



    return (

        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Add a Products</h2>
            <form onSubmit={handleAddProducts} >
                {/* form image and name row */}
                <div className="md:flex mb-8 gap-5">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name" name="brand_name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Type and Price row */}
                <div className="md:flex mb-8 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        {/* <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label> */}
                        <select name="type" className="select select-bordered w-full ">
                            
                            <option>Headphone</option>
                            <option>Smart phone</option>
                            <option>Accessories</option>
                            <option> Desktop</option>
                            <option>Laptop</option>
                            <option>Gadget</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form Short description and Rating row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Short description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input w-full input-bordered" />
                        </label>
                    </div>

                </div>

                <div className=" mb-8 form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Image Url" name="image_one" className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Add Products" className=" text-white bg-slate-700 btn btn-block" />

            </form>

        </div>
    );
};

export default AddProducts;
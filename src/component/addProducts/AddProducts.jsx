

const AddProducts = () => {

    const handlePostProducts = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const formData = {
            image, name, type, price, description, rating
        }
        console.log(formData);
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };



return (

    <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Add a Products</h2>
        <form onSubmit={handlePostProducts} >
            {/* form image and name row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Image Url" name="image" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="input w-full input-bordered" />
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
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
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
            <div className="md:flex mb-8">
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



            <input type="submit" value="Add Products" className=" text-white bg-slate-700 btn btn-block" />

        </form>

    </div>
);
};

export default AddProducts;
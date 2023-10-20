import { useLoaderData } from "react-router-dom";
import ProductCards from "../productCards/ProductCards";
import Banner from "../banner/Banner";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";


const Home = () => {
    const product = useLoaderData();
    // console.log(product);
    return (
        <div>
            <div>
                <Banner></Banner>
                <div>
                    <h1 className="text-center text-3xl font-bold mb-6 text-yellow-500">ALL BRANDS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-16" >
                        {
                            product.map(products => <ProductCards key={products._id} products={products}>

                            </ProductCards>)
                        }
                    </div>

                </div>

            </div>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;
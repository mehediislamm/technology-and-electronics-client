import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">GADGET GALAXY</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

{/* <div className=' relative mb-10'>
<img src={banner} alt="" />
</div>
<div className='absolute top-[30%] md:top-[40%] lg:top-[55%] '>
<h1 className='text-white ml-36 text-2xl font-medium md:ml-60 lg:ml-[550px] md:text-4xl md:font-bold'>GADGET GALAXY</h1>
</div> */}
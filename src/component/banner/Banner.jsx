import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div>
            <div className=' relative mb-10'>
                <img src={banner} alt="" />
            </div>
            <div className='absolute top-[30%] md:top-[40%] lg:top-[55%] '>
                <h1 className='text-white ml-36 text-2xl font-medium md:ml-60 lg:ml-[550px] md:text-4xl md:font-bold'>GADGET GALAXY</h1>
            </div>
        </div>
    );
};

export default Banner;
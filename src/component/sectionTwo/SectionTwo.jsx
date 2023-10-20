import sec2 from '../../assets/sec2.jpg'
import sec3 from '../../assets/sec3.jpg'
const SectionTwo = () => {
    return (
        <div className=' h-[45vh] grid grid-cols-1 md:grid-cols-3 mb-[72vh] md:mb-10 gap-5'>
            <div>
                <img className='md:h-[44vh]' src={sec2} alt="" />
            </div>
            <div>
                <table className=" bg-[#82d382] h-[44vh] border">
                    <tbody>
                        <tr>
                            <th className="border text-white w-[64vh]">Phone name</th>
                            <th className="border text-white w-32">Views</th>
                        </tr>
                        <tr className="text-center">
                            <td className="border text-white">1.Apple </td>
                            <td className="border text-white">145,538</td>
                        </tr>
                        <tr className="text-center">
                            <td className="border text-white">2. Samsung</td>
                            <td className="border text-white">80,879</td>
                        </tr>
                        <tr className="text-center">
                            <td className="border text-white">3.Sony</td>
                            <td className="border text-white">43,588</td>
                        </tr>
                        <tr className=" text-center">
                            <td className="border text-white">4.Google</td>
                            <td className="border text-white">63,630</td>
                        </tr>
                        <tr className=" text-center">
                            <td className="border text-white">5. Intel</td>
                            <td className="border text-white">42,655</td>
                        </tr>
                        <tr className="text-center">
                            <td className="border text-white">6. Lava</td>
                            <td className="border text-white">56,899</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div>
                <img className='md:h-[48vh]' src={sec3} alt="" />
            </div>
        </div>
    );
};

export default SectionTwo;
import Banner_Pic from '../assests/banner.jpg'

const Banner = (): JSX.Element => {
    return (
        <div className="flex justify-center flex-col items-center bg-[#E0D9CF] rounded-md p-[1.5rem] shadow-md">
            <div className="w-full">
                <img src={Banner_Pic} alt="banner" className="w-[100%] bg-no-repeat bg-contain rounded-md h-[350px] object-cover object-bottom" />
            </div>
            <div className="w-full mt-[1rem] flex justify-start flex-col items-start">
                <h1 className="text-[1.4rem]">Discover Your Inner Peace</h1>
                <p className="text-[0.9rem] mt-[0.6rem]">Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation</p>
            </div>
        </div>
    )
}

export default Banner;

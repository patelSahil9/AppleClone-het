import "./Content_body.css";

function Content_body() {
    return <>
        <div className="w-[100%] h-[70px] sm:h-[55px] lg:h-[45px] bg-[#1D1D1F] flex justify-center ">
            <div className="w-[85%] md:w-[90%] h-[100%] flex flex-col flex-wrap lg:flex-row items-center justify-center">
                <p className="text-white  text-xs sm:text-sm text-center">Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks.*
                    <span className="text-blue-500 ml-3 text-center text-sm"> Shop now : </span>
                </p>
            </div>
        </div>


        <div className="flex flex-col justify-center items-center">
            <img src="https://www.apple.com/v/home/bk/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg" alt="" className="w-[100%] h-[500px] -z-10 object-cover sm:hidden" />
            <div className="w-[400px] h-[125px] absolute -translate-y-[160px] flex flex-col  items-center text-white sm:hidden">
                <div className="font-bold text-[34px]">iPhone 15 Pro</div>
                <div className="text-xl">Titanium.So strong.So light.So Pro</div>
                <div className="flex flex-row gap-8 mt-4">
                    <div className="text-[18px] text-blue-500">Learn more: </div>
                    <div className="text-[18px] text-blue-500">Buy : </div>
                </div>
            </div>
        </div>


        <div className="flex flex-col justify-center items-center">
            <img src="https://www.apple.com/v/home/bk/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg" alt="" className="w-[100%] h-[500px] object-cover sm:hidden" />
            <div className="w-[400px] h-[125px] absolute -translate-y-[160px] flex flex-col  items-center sm:hidden">
                <div className="font-bold text-[34px]">iPhone 15</div>
                <div className="text-xl">New camera.New design.Newphoria</div>
                <div className="flex flex-row gap-8 mt-4">
                    <div className="text-[18px] text-blue-500">Learn more: </div>
                    <div className="text-[18px] text-blue-500">Buy : </div>
                </div>
            </div>
        </div>


        <div className="flex flex-col justify-center items-center">
            <img src="https://www.apple.com/v/home/bk/images/heroes/valentines-day-2024/hero_valentines_day_2024__dyne8c2no3ki_small_2x.jpg" alt="" className="w-[100%] h-[500px] object-cover sm:hidden" />
            <div className="w-[400px] h-[125px] absolute translate-y-[145px] flex flex-col  items-center sm:hidden">
                <div className="font-bold text-[34px]">Valentine's Day</div>
                <div className="text-xl">Last chance for last-minute gifts. </div>
                    <div className="text-[18px] text-blue-500 mt-4">Shop : </div>
            </div>
        </div>
    </>
}

export default Content_body;
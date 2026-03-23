import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import slides from "./SliderData"

function Hero() {

return (

<section className="relative w-full h-screen overflow-hidden">

{/* SLIDER BACKGROUND */}

<Swiper
modules={[Autoplay, Pagination]}
autoplay={{ delay: 4000 }}
loop={true}
pagination={{
el: ".hero-pagination",
clickable: true
}}
className="absolute inset-0 w-full h-full"
>

{slides.map((slide, index) => (

<SwiperSlide key={index}>

<div
className="w-full h-screen bg-cover bg-center"
style={{ backgroundImage: `url(${slide.image})` }}
>

<div className="absolute inset-0 bg-black/5"></div>

</div>

</SwiperSlide>

))}

</Swiper>


{/* CONTENT LAYER */}

<div className="absolute inset-0 z-10 flex items-center">

<div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-12 items-center">

{/* LEFT CONTENT */}

<div className="col-span-12 lg:col-span-8 text-white relative">



<h1 className="text-4xl md:text-6xl font-brand  font-normal leading-tight mb-6">

<span className="block mb-6">
    <p className="tracking-[4px] text-sm">
VGN MERIDIAN HEIGHTS
</p>
BUILD YOUR FUTURE
</span>

<span className="block ">
ON ELEVATED GROUND
<p className="text-sm tracking-widest mb-6">
DTCP & RERA APPROVED PREMIUM PLOTS AT GERUGAMBAKKAM
</p>
</span>

</h1>



<button className="border border-yellow-400 px-6 py-3 rounded-full mb-5">
BOOK NOW
</button>


{/* PAGINATION */}

<div className="hero-pagination absolute bottom-[-5px] left-0 flex gap-2 mt-4"></div>

</div>


{/* RIGHT FORM */}

<div className="hidden lg:flex col-span-4 justify-end relative">

{/* FORM */}

<div className="relative">

{/* ORANGE BAR RIGHT EDGE */}

<div className="absolute right-[-12px] top-0 h-full w-[8px] bg-[#D6A44C]"></div>

<div className="bg-[#0c1345] p-8 w-[360px]">

<input
className="w-full mb-3 p-3 text-black"
placeholder="Enter your Name"
/>

<input
className="w-full mb-3 p-3 text-black"
placeholder="Enter your Number"
/>

<input
className="w-full mb-3 p-3 text-black"
placeholder="Enter your E-Mail"
/>

<textarea
className="w-full mb-3 p-5 text-black"
placeholder="Enter Your Comment"
/>

<label className="text-xs text-white flex gap-2 mb-4">
<input type="checkbox"/>
I agree to be contacted by Jain’s Homes regarding my inquiry
</label>

<button className="border border-yellow-400 px-6 py-2 rounded-full text-white">
Submit
</button>

</div>

</div>

</div>

</div>

</div>

</section>

)

}

export default Hero
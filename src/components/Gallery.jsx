import Slider from "react-slick";

import img1 from "../assets/images/hallimage.png";
import img2 from "../assets/images/resortimage.png";
import img3 from "../assets/images/gardenimage.png";

function Gallery(){

const settings = {
dots:false,
infinite:true,
speed:500,
slidesToShow:3,
slidesToScroll:1,
centerMode:true,
centerPadding:"120px",
autoplay:true,
autoplaySpeed:2500,
arrows:false,
pauseOnHover:false,
responsive:[
{
breakpoint:1024,
settings:{
slidesToShow:3,
centerPadding:"60px"
}
},
{
breakpoint:768,
settings:{
slidesToShow:1,
centerMode:true,
centerPadding:"40px"
}
}
]
}

const images=[img1,img2,img3,img1,img2]

return(

<section className="py-20 bg-[#F5F2ED] overflow-hidden">

<h2 className="font-brand font-normal text-[28px] md:text-[40px] lg:text-[48px] leading-[1] tracking-[0.005em] text-center capitalize text-[#1f1a3c] mb-14">

  PROJECT GALLERY
</h2>

<div className="max-w-8xl mx-auto">

<Slider {...settings}>

{images.map((img,index)=>(

<div key={index} className="px-3">

<img
src={img}
className="w-full h-[420px] object-cover rounded-lg transition-transform duration-500"
/>

</div>

))}

</Slider>

</div>

</section>

)

}

export default Gallery
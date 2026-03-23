import { useRef } from "react";
import leftimg from "../assets/images/pillar.png";
import rightimg from "../assets/images/gate.png";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function MeridianSection() {

const fileInput = useRef(null);

const openUpload = () => {
  fileInput.current.click();
};

const uploadFile = (e) => {
  const file = e.target.files[0];
  if (file) alert(file.name);
};

return (

<section className="relative bg-[#efefef] py-24 overflow-hidden">

{/* LEFT IMAGE */}
<img
src={leftimg}
className="absolute left-0 top-16 w-[300px] hidden lg:block"
/>

{/* RIGHT IMAGE */}
<img
src={rightimg}
className="absolute right-0 top-[260px] w-[360px] hidden lg:block"
/>

<div className="max-w-7xl mx-auto px-2 lg:pl-[260px] lg:pr-[320px]">

{/* HEADING */}
<h1 className=" font-brand text-5xl md:text-7xl  text-[#1b1e3c] leading-[1] tracking-normal font-normal">
WHERE LIFE FINDS
</h1>

<h1 className=" font-brand text-5xl md:text-6xl  text-[#1b1e3c] leading-[1] tracking-normal  font-normal">
<span className="text-3xl mr-2">ITS</span>
TRUE COORDINATES
</h1>

{/* SUB HEADING */}
<h3 className=" font-brand text-xl font-normal text-[#1b1e3c] mt-10 mb-6">
WHY VGN MERIDIAN HIGHT
</h3>

{/* POINTS */}
<ul className="font-poppins font-light text-[16px] leading-[33px] tracking-normal space-y-3 text-gray-700 text-sm md:text-base list-disc ml-6">
<li>Elevated Plots at Gerugambakkam</li>
<li>
341 premium plots ranging from 750 to 1300 sq.ft. spread
across a sprawling 13.18-acre layout + 50+ World-Class Amenities
</li>
<li>38,000 sq.ft. park with multifunctional amenities</li>
<li>100% Vaastu-Compliant Plots with Individual Ramps</li>
<li>
Experience elite living at Club De' Meridian, our expansive
11,000 sq. ft. premium clubhouse peaceful low-density
neighbourhood ideal for villa living
</li>
<li>
15 mins from Chennai International Airport & well-connected
to Metro
</li>
<li>10 mins from Porur and Pallavaram</li>
</ul>

{/* BUTTON */}
<button
onClick={openUpload}
className="font-poppins font-semibold text-[12.9px] leading-[1.2] tracking-[0.005em] text-center mt-8 flex items-center gap-3 border border-[#c4934d] text-[#c4934d] px-6 py-3 rounded-full hover:bg-[#c4934d] hover:text-white transition"
>
<span className="w-8 h-8 rounded-full bg-[#c4934d] text-white flex items-center justify-center">
<FaCloudUploadAlt />
</span>

Receive A Digital Copy Of Our Brochure

</button>

<input
type="file"
ref={fileInput}
className="hidden"
onChange={uploadFile}
/>

</div>

</section>

);
}
import { useRef } from "react";
import layout from "../assets/images/layout.png";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function BrochureSection() {

const fileInput = useRef(null);

const openUpload = () => {
  fileInput.current.click();
};

const uploadFile = (e) => {
  const file = e.target.files[0];
  if (file) {
    alert("Uploaded: " + file.name);
  }
};

return (

<section className="relative w-full py-32 bg-[#0b1445] overflow-hidden">

{/* ORANGE CENTER STRIP */}
<div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-[#c4934d]"></div>

{/* LEFT ORANGE BLOCK */}
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-[#c4934d]"></div>

{/* RIGHT ORANGE BLOCK */}
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-32 bg-[#c4934d]"></div>

{/* CENTER CONTAINER */}
<div className="relative max-w-6xl mx-auto px-4">

<div className="relative rounded-xl overflow-hidden shadow-2xl">

{/* IMAGE */}
<img
src={layout}
alt="layout"
className="w-full object-cover"
/>

{/* BLUR LAYER */}
<div className="absolute inset-0 backdrop-blur-sm bg-white/40"></div>

{/* TEXT CONTENT */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

<h2 className="font-poppins font-bold text-[28px] md:text-[40px] lg:text-[48.63px] leading-[31px] text-black mb-6">
  Why VGN Meridian Hight
</h2>

<button
onClick={openUpload}
className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-black hover:scale-105 transition"
>

<span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm">
<FaCloudUploadAlt className="text-[16px]" />
</span>

<span className="text-sm md:text-base font-medium">
Receive A Digital Copy Of Our Brochure
</span>

</button>

<input
type="file"
ref={fileInput}
className="hidden"
onChange={uploadFile}
/>

</div>

</div>

</div>

</section>

);
}
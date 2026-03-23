import { useState } from "react";

export default function FAQ() {

const [open,setOpen] = useState(0)

const faq = [

{
q:"What kinds of plots are available?",
a:"VGN Meridian Heights offers well-planned residential plots ranging from 750 to 1300 sq.ft. Each plot is thoughtfully laid out, 100% Vaastu-compliant, and designed to support airy, well-lit homes with ample space for future growth."
},

{
q:"Where is it located?",
a:"VGN Meridian Heights is located at Gerugambakkam, Chennai with excellent connectivity to Porur, Airport and major IT hubs."
},

{
q:"What amenities can residents enjoy?",
a:"Residents enjoy clubhouse, parks, jogging tracks, landscaped gardens and modern lifestyle amenities."
},

{
q:"How big is the community?",
a:"The community is spread across large acres with premium plotted development and modern infrastructure."
},

{
q:"Why choose Prince Blossom?",
a:"Prince Blossom provides well planned residential plots with strong appreciation potential and excellent connectivity."
}

]

const toggle = (index)=>{
setOpen(open === index ? null : index)
}

return (

<section
className="py-20 px-6 bg-[linear-gradient(0deg,#F5F2EDCC_0%,#FFFFFF00_50%)]"

>

<h2 className="font-brand font-normal text-[28px] md:text-[40px] lg:text-[48px] leading-[43px] uppercase text-center text-[#1f1a3c] mb-12">
  FAQ
</h2>

<div className="max-w-[900px] mx-auto">

{faq.map((item,index)=>(

<div key={index} className="border-b">

{/* QUESTION */}

<button
onClick={()=>toggle(index)}
className="w-full flex justify-between items-center py-6 text-left font-semibold text-lg"
>

<span className="font-poppins font-semibold text-[18px] md:text-[18px] leading-[1.2]">
  {item.q}
</span>
<span className="text-xl">
{open === index ? "×" : "+"}
</span>

</button>

{/* ANSWER */}

{open === index && (

<p className="pb-6 text-gray-600 leading-relaxed">
{item.a}
</p>

)}

</div>

))}

</div>

</section>

)

}
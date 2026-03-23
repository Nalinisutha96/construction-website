import { useState } from "react";

import connectivityIcon from "../assets/icons/connectivityicon.png";
import schoolIcon from "../assets/icons/schoolicon.png";
import hospitalIcon from "../assets/icons/hospitalicon.png";
import lifestyleIcon from "../assets/icons/lifestyleicon.png";
import supermarketIcon from "../assets/icons/supermarketicon.png";
import entertainmentIcon from "../assets/icons/entertainmenticon.png";

import busIcon from "../assets/icons/schoolsmallicon.png";
import collegeIcon from "../assets/icons/hospitalicon.png";

export default function Location() {

const [open,setOpen] = useState(null)

const toggle = (index)=>{
setOpen(open === index ? null : index)
}

const sections = [

{
title:"CONNECTIVITY",
icon:connectivityIcon,
items:[
{icon:busIcon,text:"2 Mins from Kathir Engineering College"},
{icon:busIcon,text:"RAK's Pallikoodam"},
{icon:busIcon,text:"Chandrakanti Public School"},
{icon:busIcon,text:"Suguna Pips"},
{icon:busIcon,text:"PSG College of Arts & Science"}
]
},

{
title:"SCHOOLS",
icon:schoolIcon,
items:[
{icon:collegeIcon,text:"PSG College of Arts & Science"},
{icon:collegeIcon,text:"Rathinam International Public School"},
{icon:collegeIcon,text:"Coimbatore Institute of Technology"}
]
},

{
title:"HOSPITALS",
icon:hospitalIcon,
items:[
{icon:hospitalIcon,text:"KMCH Hospital"},
{icon:hospitalIcon,text:"Ganga Hospital"}
]
},

{
title:"LIFESTYLE",
icon:lifestyleIcon,
items:[
{icon:lifestyleIcon,text:"Brookfields Mall"},
{icon:lifestyleIcon,text:"Prozone Mall"}
]
},

{
title:"SUPER MARKETS",
icon:supermarketIcon,
items:[
{icon:supermarketIcon,text:"Reliance Smart"},
{icon:supermarketIcon,text:"More Supermarket"}
]
},

{
title:"ENTERTAINMENT",
icon:entertainmentIcon,
items:[
{icon:entertainmentIcon,text:"PVR Cinemas"},
{icon:entertainmentIcon,text:"INOX"}
]
}

]

return (

<section className="bg-[#f5f5f5] py-20 px-6">
<h2 className="font-brand font-normal text-[28px] md:text-[40px] lg:text-[48px] leading-[1] uppercase text-center text-[#1f1a3c] mb-16">
  LOCATION & CONNECTIVITY
</h2>

<div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-8">

{/* MAP */}

<div className="md:col-span-8 w-full h-[420px] overflow-hidden rounded">

<iframe
title="map"
src="https://maps.google.com/maps?q=gerugambakkam%20chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-full border-0"
/>

</div>

{/* RIGHT PANEL */}

<div className="md:col-span-4 bg-gray-100 shadow rounded h-[500px] flex flex-col">

<div className="bg-[#21173B] text-white text-sm px-5 py-3 flex items-center gap-2">
Nearby Locations
</div>

{sections.map((sec,index)=>(

<div key={index} className="border-b">

<button
onClick={()=>toggle(index)}
className="w-full flex items-center gap-3 px-5 py-4 bg-gray-100 text-gray-800 font-semibold"
>

<img src={sec.icon} className="w-5 h-5"/>

<span className="flex-1 text-left">
{sec.title}
</span>

<span>
{open===index ? "-" : "+"}
</span>

</button>

{open===index && (

<ul className="px-6 py-4 space-y-3 text-sm text-gray-600">

{sec.items.map((item,i)=>(
<li key={i} className="flex items-center gap-3">

<img src={item.icon} className="w-4 h-4"/>

<span>{item.text}</span>

</li>
))}

</ul>

)}

</div>

))}

</div>

</div>

</section>

)

}
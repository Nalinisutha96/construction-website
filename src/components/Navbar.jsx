import { useState } from "react";
import logo from "../assets/images/logo.png";

function Navbar() {

const [menu,setMenu]=useState(false)

return (

<nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 text-white">

<div className="text-2xl font-semibold">
<img
            src={logo}
            alt="logo"
         
          />
</div>

<ul className="hidden md:flex gap-10 text-sm">
<li className="cursor-pointer">Home</li>
<li className="cursor-pointer">Rooms</li>
<li className="cursor-pointer">About Us</li>
<li className="cursor-pointer">Contact Us</li>
</ul>

<button className="border border-yellow-400 px-4 py-1 rounded-full text-sm hidden md:block">
Enquire Now
</button>

<button 
className="md:hidden text-2xl"
onClick={()=>setMenu(!menu)}
>
☰
</button>

{menu && (

<div className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 md:hidden">

<li>Home</li>
<li>Rooms</li>
<li>About Us</li>
<li>Contact Us</li>

</div>

)}

</nav>

)

}

export default Navbar
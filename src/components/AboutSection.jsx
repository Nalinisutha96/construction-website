import aboutImg from "../assets/images/about.png";
import vectorPattern from "../assets/images/Vector.png";

function AboutSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row">

      {/* LEFT SIDE (COL-4) */}

      <div className="lg:w-5/12 bg-[#0b1240] text-white relative flex items-center">

        {/* gold vertical bar */}
        <div className="absolute left-0 top-0 h-full w-4 bg-[#c89b3c]" />

        {/* curve pattern background */}
        <div
  className="absolute inset-0 opacity-4 bg-contain bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${vectorPattern})` }}
></div>

        <div className="relative px-10 lg:px-14 py-16">

          <p className=" font-poppins font-light text-sm md:text-base leading-7 text-gray-200">

            VGN Meridian Heights is a premium plotted community at
            Gerugambakkam, thoughtfully planned on elevated land for
            better ventilation, cleaner air, and long-term value.
            Backed by 83+ years of VGN expertise, this development
            offers the freedom to build your home while ensuring
            strong appreciation and peace of mind.

          </p>


          <button className=" font-poppins font-normal mt-8 border border-[#c89b3c] text-[#c89b3c] px-8 py-3 rounded-full text-sm tracking-wide hover:bg-[#c89b3c] hover:text-black transition duration-300">

            BOOK NOW

          </button>

        </div>

      </div>


      {/* RIGHT SIDE (COL-8 IMAGE) */}

      <div className="lg:w-8/12">

        <img
          src={aboutImg}
          alt="VGN Meridian Heights"
          className="w-full h-full object-cover"
        />

      </div>

    </section>
  );
}

export default AboutSection;
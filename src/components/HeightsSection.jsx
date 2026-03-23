import image from "../assets/images/nature.png";

export default function HeightsSection() {
  return (
    <section className="w-full bg-[#f2f2f2] py-20 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}

        <div className="space-y-10">

          <img
            src={image}
            alt="nature"
            className="w-[280px] md:w-[350px] object-cover fade-up"
          />

       <h1 className="font-brand font-normal text-[60px] md:text-[110px] lg:text-[110px] leading-[1] text-[#1d2143] fade-up-delay">
  WITH LIFE
</h1>

        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-6">

  <h1 className="font-brand font-normal text-[60px] md:text-[110px] lg:text-[110px] leading-[1] text-[#1d2143] fade-up">
  HEIGHTS
</h1>

       <div className="font-poppins font-light text-[18px] md:text-[26px] leading-[32px] md:leading-[42px] text-gray-700 space-y-2 fade-up-delay">
            <p className="font-medium">Price Details</p>
            <p>Plot sizes: 750 – 1300 sq.ft</p>
            <p>Pricing: ₹XX Lakhs* onwards</p>
          </div>

        </div>

      </div>

    </section>
  );
}
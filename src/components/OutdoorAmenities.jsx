import park1 from "../assets/images/park1.png";
import park2 from "../assets/images/park2.png";
import park3 from "../assets/images/park3.png";

const parks = [
  { img: park1, title: "PARK 1" },
  { img: park2, title: "PARK 2" },
  { img: park3, title: "PARK 3" },
];

function OutdoorAmenities() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">

      {/* Title */}
 <h2 className="font-brand font-normal text-[28px] md:text-[40px] lg:text-[48px] leading-[1] text-center text-[#261C3E] mb-16">
  OUTDOOR LIFESTYLE AMENITIES
</h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {parks.map((park, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-md"
          >
            {/* Image */}
            <img
              src={park.img}
              alt={park.title}
              className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl font-serif tracking-widest">
                {park.title}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default OutdoorAmenities;
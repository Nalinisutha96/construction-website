import {
  FaDumbbell,
  FaSwimmer,
  FaBasketballBall,
  FaTableTennis,
  FaTree,
  FaWalking,
  FaChild,
} from "react-icons/fa";

import {
  GiSteam,
  GiCricketBat,
  GiPartyPopper,
  GiMeditation,
} from "react-icons/gi";

import { MdSportsGymnastics, MdTheaterComedy } from "react-icons/md";

function Amenities() {

  const amenities = [
    { icon: <MdSportsGymnastics size={28} />, name: "CLUB HOUSE" },
    { icon: <FaDumbbell size={28} />, name: "GYM" },
    { icon: <GiSteam size={28} />, name: "STEAM ROOM" },
    { icon: <GiCricketBat size={28} />, name: "CRICKET NET" },

    { icon: <MdSportsGymnastics size={28} />, name: "AEROBICS ROOM" },
    { icon: <GiMeditation size={28} />, name: "YOGA ROOM" },
    { icon: <MdSportsGymnastics size={28} />, name: "BILLIARDS ROOM" },
    { icon: <GiPartyPopper size={28} />, name: "PARTY HALL" },

    { icon: <FaSwimmer size={28} />, name: "SWIMMING POOL" },
    { icon: <FaBasketballBall size={28} />, name: "BASKET BALL COURT" },
    { icon: <MdTheaterComedy size={28} />, name: "OPEN AIR THEATER" },
    { icon: <FaBasketballBall size={28} />, name: "PICKLE BALL" },

    { icon: <FaChild size={28} />, name: "CHILDREN'S PLAY AREA" },
    { icon: <FaWalking size={28} />, name: "WALK WAY" },
    { icon: <FaTree size={28} />, name: "LANDSCAPE AREA" },
    { icon: <FaTableTennis size={28} />, name: "T.T. ROOM" },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">

      {/* Title */}
    <h2 className="font-brand font-normal text-[48px] leading-[43.2px] tracking-normal uppercase text-center text-[#21173B] mb-12">
  50+ AMENITIES
</h2>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto border border-[#21173B] rounded-[40px] p-10">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 text-center">

          {amenities.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Icon Circle */}
              <div className="bg-[#261C3E] text-white w-16 h-16 flex items-center justify-center rounded-full mb-3">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-sm tracking-wide text-gray-700">
                {item.name}
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Amenities;
import Slider from "react-slick";

import img1 from "../assets/images/hallimage.png";
import img2 from "../assets/images/resortimage.png";
import img3 from "../assets/images/gardenimage.png";

function Gallery() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "120px",
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
          dots: true,
          infinite: true
        }
      }
    ]
  };

  const images = [img1, img2, img3, img1, img2];

  return (
    <section className="py-16 bg-[#F5F2ED] overflow-hidden">

      <h2 className="text-[28px] md:text-[40px] lg:text-[48px] text-center text-[#1f1a3c] mb-8">
        PROJECT GALLERY
      </h2>

      <div className="w-full overflow-hidden">

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>

              {/* 🔥 IMPORTANT wrapper */}
              <div className="gallery-card">

                <img
                  src={img}
                  alt=""
                />

              </div>

            </div>
          ))}
        </Slider>

      </div>

    </section>
  );
}

export default Gallery;
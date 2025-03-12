"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";

const featuredProperties = [
  {
    id: 1,
    image: "/assets/property1.png",
    title: "Pinecrest Villa",
    location: "Tagaytay",
    price: "₱9,000,000",
  },
  {
    id: 2,
    image: "/assets/property2.png",
    title: "Cedarview House",
    location: "Baguio",
    price: "₱12,000,000",
  },
  {
    id: 3,
    image: "/assets/property3.png",
    title: "Voora Villas",
    location: "Boracay",
    price: "₱5,000,000",
  },
  {
    id: 4,
    image: "/assets/property1.png",
    title: "Amaze Seashore House",
    location: "Batanes",
    price: "₱25,000,000",
  },
  {
    id: 5,
    image: "/assets/property2.png",
    title: "Birchwood Estate",
    location: "Siargao",
    price: "₱7,000,000",
  },
  {
    id: 6,
    image: "/assets/property3.png",
    title: "Maple Heights",
    location: "El Nido, Palawan",
    price: "₱15,000,000",
  },
];

const Featured = () => {
  return (
    <div id="featured">
      <div className="w-full py-10 pb-[10rem]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Properties
        </h2>

        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{property.title}</h3>
                  <p className="text-gray-600">{property.location}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold">{property.price}</span>
                    <button className="bg-black text-white px-4 py-2 rounded-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;

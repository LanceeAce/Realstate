import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jayvee Ramos',
    position: 'Operating Manager',
    image: '/assets/jayvee.png',
    feedback: `Living at Bliss Residency has truly been a delightful experience. The attention to detail in the design and the amenities provided make it more than just an apartment; it's a lifestyle.`
  },
  {
    name: 'Jayvee Ramos',
    position: 'IT Engineering Manager',
    image: '/assets/jayvee.png',
    feedback: `Bliss Residency offers the perfect blend of comfort and luxury. The modern interiors and well-thought-out spaces make it an ideal place to call home.`
  },
  {
    name: 'Jayvee Ramos',
    position: 'IT Engineering Manager',
    image: '/assets/jayvee.png',
    feedback: `I love how close this place is to everything! The peaceful surroundings combined with top-notch amenities make it the best investment I've made.`
  }
];

const Feedback = () => {
  return (
    <div id='feedback'>
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-4xl font-bold mb-8 text-center">What Our Residents Say</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full max-w-4xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center max-w-sm">
            <FaQuoteLeft className="text-4xl text-gray-400 mb-4" />
            <p className="italic text-lg">"{testimonial.feedback}"</p>
            <div className="mt-6 flex flex-col items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-gray-400 mb-2" />
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </div>
  );
};

export default Feedback;
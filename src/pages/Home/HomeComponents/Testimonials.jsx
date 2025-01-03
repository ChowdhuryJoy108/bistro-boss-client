import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../../globalComponents/SectionTitle";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { RiDoubleQuotesL } from "react-icons/ri";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <div>
        <SectionTitle
          heading={"Testimonials"}
          subHeading={"What Our Client Says"}
        />
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col gap-4 items-center justify-center text-center mx-24">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <RiDoubleQuotesL className="text-6xl" />
              <p>{review.details}</p>
              <h3 className="text-xl mb-8 text-orange-600 uppercase">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

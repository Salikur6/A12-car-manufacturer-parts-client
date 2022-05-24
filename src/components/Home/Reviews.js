import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Keyboard } from 'swiper';
import client from '../../img/client.png'

import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div style={{ backgroundColor: '#1089E7' }}>
            <div className='container mx-auto my-20 pb-10'>
                <h2 className='text-center py-10 pt-14 text-3xl font-semibold'>What others Say</h2>

                <h3 className='text-2xl font-bold text-white text-center'>Client Reviews</h3>
                <Swiper


                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}

                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide>
                            <div className='lg:w-1/2 mx-auto my-10'>
                                <div class="card glass card-side shadow-xl">
                                    <div className='shrink-0'>
                                        <figure><img className='p-5 w-[150px] sm:w-full rounded-full' src={review?.img || client} alt="Client img" /></figure>
                                    </div>
                                    <div>
                                    </div>
                                    <div class=" px-2 table">

                                        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                                            <p className='text-justify'>{review?.description}</p>
                                            <div class="card-actions">
                                                <p className='my-8 font-bold'>{review?.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
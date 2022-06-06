import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Keyboard } from 'swiper';
import client from '../../img/client.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from 'react-query';
import Spinner from '../Hooks/Spinner';

const Reviews = () => {

    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetch('reviews.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://shielded-reef-19583.herokuapp.com/reviews', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div style={{ backgroundColor: '#1089E7' }}>
            <div className='container mx-auto my-20 pb-10'>
                <h2 className='text-center py-10 pt-14 text-3xl font-semibold text-secondary'>What others Say</h2>

                <h3 className='text-2xl font-bold text-white text-center'>Client Reviews</h3>
                <Swiper

                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    onSwiper={(swiper) => {
                        // console.log(swiper)
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >


                    {
                        reviews?.map((review, index) => <SwiperSlide key={index}>
                            <div className='lg:w-1/2 mx-auto my-10'>
                                <div className="card glass card-side shadow-xl">
                                    <div className='shrink-0'>
                                        <figure><img className='p-5 w-[150px] h-[210px] sm:w-[210px] rounded-full' src={review?.img || client} alt="Client img" /></figure>
                                    </div>
                                    <div>
                                    </div>
                                    <div className=" px-2 table">

                                        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                                            <p className='text-justify text-white'>{review?.comment}</p>
                                            <p className='font-semibold text-yellow-400'>Rating: {review?.rating}</p>
                                            <div className="card-actions">
                                                <p className='my-8 font-bold text-secondary'>{review?.name}</p>
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
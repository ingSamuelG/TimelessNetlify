
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import styles from '../styles/ProductGallery.module.css'

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Navigation, Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);


export default function ProductGallery({ images }) {


    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div className={styles.container}>
            <Swiper style={{ '--swiper-navigation-color': '#ff69b4', '--swiper-pagination-color': '#ff69b4', '--swiper-navigation-size': '27px' }} loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className={styles.mySwiper2}>

                {images.map(image =>
                    <SwiperSlide key={`${image.src}${image.id}`}>
                        <Image src={image.src}
                            layout="fill"
                            objectFit="contain"
                            alt={image.alt}
                        />
                    </SwiperSlide>)
                }

            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className={styles.mySwiper}>
                {images.map(image =>
                    <SwiperSlide key={`${image.src}${image.id}`}>
                        <Image src={image.src}
                            layout="fill"
                            objectFit="contain"
                            alt={image.alt}
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}
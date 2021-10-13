
import { useGlobalContext } from "../context";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import hero1 from '../public/hero/hero1.jpeg'
import hero2 from '../public/hero/hero2.jpeg'
import hero3 from '../public/hero/hero3.jpg'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import styles from '../styles/Slider.module.css'


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function Slider() {

    const { setSubmenuClosed } = useGlobalContext()


    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={30} centeredSlides={true} loop={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={false} className={styles.mySwiper} >
                <SwiperSlide onMouseOver={setSubmenuClosed} className={styles['swiper-slide']}>
                    <Image
                        src={hero1}
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                    />
                </SwiperSlide>
                <SwiperSlide onMouseOver={setSubmenuClosed}>
                    <Image
                        src={hero2}
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                    /></SwiperSlide>

                <SwiperSlide onMouseOver={setSubmenuClosed}>
                    <Image
                        src={hero3}
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
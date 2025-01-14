'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

export interface ImgProps {
  imgs: string[]
}

export default function CarouselProject({ imgs }: ImgProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {imgs.map((img: string, index: number) => (
        <Image
          key={index}
          src={img}
          alt={`Image ${index}`}
          height={1200}
          width={1200}
          quality={100}
          loading="lazy"
          className=" object-cover aspect-[100/150] object-top "
        />
      ))}
    </Slider>
  )
}

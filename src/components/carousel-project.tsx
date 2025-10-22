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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 0,
    arrows: true,
    fade: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
        },
      },
    ],
  }

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {imgs.map((img: string, index: number) => (
          <div key={index} className="w-full flex place-items-center">
            <Image
              src={img}
              alt={`Image ${index}`}
              height={1200}
              width={1200}
              quality={100}
              loading="lazy"
              className="w-full   object-contain max-w-[700px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

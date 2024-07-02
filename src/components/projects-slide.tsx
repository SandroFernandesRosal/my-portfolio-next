'use client'
import { ProjectProps, ProjectArray } from '@/data/types/projects'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

export default function ProjectSlide({ projects }: ProjectArray) {
  return (
    <div className="flex w-full my-5">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          A11y,
          EffectFade,
          Scrollbar,
          Autoplay,
        ]}
        spaceBetween={50}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        className="w-full flex justify-center"
      >
        {projects &&
          projects.map((item: ProjectProps) => (
            <SwiperSlide key={item.id} className="overflow-hidden w-[200px]">
              <Link key={item.id} href={`/projetos/${item.slug}`}>
                <Image
                  src={item.img}
                  priority
                  width={200}
                  height={500}
                  className=" h-full  object-fill"
                  alt="..."
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

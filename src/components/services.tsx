'use client'
import {
  MonitorSmartphone,
  ShoppingCart,
  Rss,
  Speech,
  Settings,
  Globe,
} from 'lucide-react'
import { ServicesProps } from '@/data/types/services'
import { servicesData } from '@/data/serviceData'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export default function Services() {
  const el = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.context(() => {
      servicesData.forEach((service) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: `.service-${service.id}`,
              scrub: true,
              markers: false,
              start: 'top 80%',
              end: 'bottom 100%',
            },
          })
          .fromTo(
            `.service-${service.id}`,
            {
              opacity: 0,
              y: -50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2.5,
              ease: 'power2.out',
            },
          )
      })
    }, el)

    return () => {
      gsap.killTweensOf('.service')
    }
  }, [])

  return (
    <section className="z-10 px-5 flex flex-col items-center dark:bg-bgdarksecondary bg-bglightsecondary pb-40 bg-[url(../assets/bg-light2.webp)] dark:bg-[url(../assets/bg-dark2.webp)] w-full bg-bottom bg-repeat-x">
      <h1
        id="servicos"
        className="md:text-4xl text-2xl flex items-center  gap-2 justify-center rounded-md px-2  mb-10"
      >
        <span className="text-primary text-2xl md:text-4xl">&#123;</span> Todos
        os serviços
        <span className="text-primary text-2xl md:text-4xl">&#125;</span>
      </h1>

      <div
        className="grid w-full md:grid-cols-3 md:grid-rows-2 gap-3 justify-center lg:w-[70vw]"
        ref={el}
      >
        {servicesData.map((service: ServicesProps, index) => {
          const isLargeItem = index === 0
          return (
            <div
              key={service.id}
              className={`service service-${service.id} group flex justify-between p-4 ${
                isLargeItem
                  ? 'md:col-span-2 md:row-span-2'
                  : 'md:col-span-1 md:row-span-1'
              } w-full  md:h-auto flex-col items-center text-center border-[1px] dark:border-zinc-700 border-transparent rounded-md hover:border-primary dark:hover:border-primary border-zinc-400`}
            >
              <div className="flex h-[50%] justify-center mx-2 py-4 flex-col gap-2 items-center bg-[url(../assets/bg-dot.svg)] w-full">
                {service.icon === 'site' && (
                  <MonitorSmartphone className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {service.icon === 'loja' && (
                  <ShoppingCart className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {service.icon === 'blog' && (
                  <Rss className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {service.icon === 'landing' && (
                  <Speech className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {service.icon === 'suporte' && (
                  <Settings className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {service.icon === 'hospedagem' && (
                  <Globe className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
              </div>
              <div className=" h-full flex flex-col justify-center gap-4 ">
                <h1 className="text-lg font-bold">{service.title}</h1>
                {service.description}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

'use client'
import {
  Monitor,
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
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      servicesData.forEach((service) => {
        tl.current = gsap
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
              x: 360,
            },
            {
              opacity: 1,
              x: 0,
            },
          )
      })
    }, el)

    return () => {
      gsap.killTweensOf('.service')
    }
  }, [])
  return (
    <section className=" z-10 px-5  flex flex-col items-center  dark:bg-bgdark bg-bglight pb-40 bg-[url(../assets/bg-lightsecondary.png)] dark:bg-[url(../assets/bg-darksecondary.png)]   w-full bg-bottom bg-repeat-x">
      <h1 className="text-3xl font-Rubiki font-bold">Meus serviços</h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5"></span>

      <div className="flex flex-wrap gap-3 justify-center" ref={el}>
        {servicesData.map((service: ServicesProps) => {
          return (
            <div
              key={service.id}
              className={`service service-${service.id} flex justify-between  w-[45%] max-w-[230px] h-[230px] flex-col items-center text-center border-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-md py-2 hover:border-primary dark:hover:border-primary shadow-shadowlight dark:shadow-none`}
            >
              <div className="flex flex-col gap-2 items-center">
                {service.icon === 'site' && (
                  <Monitor className="text-primary size-10 md:size-14" />
                )}
                {service.icon === 'loja' && (
                  <ShoppingCart className="text-primary size-10 md:size-14" />
                )}
                {service.icon === 'blog' && (
                  <Rss className="text-primary size-10 md:size-14" />
                )}
                {service.icon === 'landing' && (
                  <Speech className="text-primary size-10 md:size-14" />
                )}
                {service.icon === 'suporte' && (
                  <Settings className="text-primary size-10 md:size-14" />
                )}
                {service.icon === 'hospedagem' && (
                  <Globe className="text-primary size-10 md:size-14" />
                )}
                <h1 className="text-lg font-bold">{service.title}</h1>
              </div>
              <p className="px-1 text-zinc-700 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

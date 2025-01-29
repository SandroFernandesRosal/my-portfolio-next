'use client'
import {
  Globe,
  MonitorSmartphone,
  Rocket,
  Search,
  Eye,
  LifeBuoy,
} from 'lucide-react'
import { BenefitsProps } from '@/data/types/benefits'
import { benefitsData } from '@/data/benefitsData'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export default function Benefits() {
  const el = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.context(() => {
      benefitsData.forEach((benefit) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: `.service-${benefit.id}`,
              scrub: true,
              markers: false,
              start: 'top 80%',
              end: 'bottom 100%',
            },
          })
          .fromTo(
            `.service-${benefit.id}`,
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
    <section className="z-10 px-5 flex flex-col items-center dark:bg-bgdark bg-bglight pb-40 bg-[url(../assets/bg-lightsecondary2.webp)] dark:bg-[url(../assets/bg-darksecondary2.webp)] w-full bg-bottom bg-repeat-x">
      <h1
        id="servicos"
        className="md:text-4xl text-2xl flex items-center  gap-2 justify-center rounded-md px-2  mb-10"
      >
        <span className="text-primary text-2xl md:text-4xl">&#123;</span>{' '}
        Benefícios para seu site
        <span className="text-primary text-2xl md:text-4xl">&#125;</span>
      </h1>

      <div
        className="grid w-full md:grid-cols-3 md:grid-rows-2 gap-3 justify-center lg:w-[70vw]"
        ref={el}
      >
        {benefitsData.map((benefit: BenefitsProps, index) => {
          const isLargeItem = index === 0
          return (
            <div
              key={benefit.id}
              className={`service service-${benefit.id} group flex justify-between p-4 ${
                isLargeItem
                  ? 'md:col-span-2 md:row-span-2'
                  : 'md:col-span-1 md:row-span-1'
              } w-full  md:h-auto flex-col items-center text-center border-[1px] dark:border-zinc-700 border-transparent rounded-md hover:border-primary dark:hover:border-primary border-zinc-400`}
            >
              <div className="flex h-[50%] justify-center mx-2 py-4 flex-col gap-2 items-center bg-[url(../assets/bg-dot.svg)] w-full">
                {benefit.icon === 'expanda' && (
                  <Globe className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {benefit.icon === 'responsivo' && (
                  <MonitorSmartphone className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {benefit.icon === 'desempenho' && (
                  <Rocket className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {benefit.icon === 'seo' && (
                  <Search className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {benefit.icon === 'acessibilidade' && (
                  <Eye className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
                {benefit.icon === 'suporte' && (
                  <LifeBuoy className="text-primary size-20 transform group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                )}
              </div>
              <div className=" h-full flex flex-col justify-center gap-4 ">
                <h1 className="text-lg font-bold">{benefit.title}</h1>
                {benefit.description}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

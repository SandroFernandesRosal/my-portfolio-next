import Link from 'next/link'

import {
  FaHandsHelping,
  FaMobileAlt,
  FaPaintBrush,
  FaRobot,
  FaRocket,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaTools,
  FaWhatsapp,
  FaWrench,
} from 'react-icons/fa'

import Image from 'next/image'
import SkillScroll from './skills-scroll'

export default function HighLight() {
  return (
    <section className="flex flex-col relative w-[100vw] overflow-hidden">
      <section className="relative flex flex-wrap items-center pt-8  justify-center md:justify-around bg-bglight dark:bg-bgdark md:items-start min-h-[80vh]">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-40 bg-gradient-to-r from-green-500/20 via-emerald-500/30 to-green-500/20 blur-[120px] rounded-full" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500/10 blur-[60px] rounded-full" />

        {/* Hero Image */}
        <div className="my-8 flex px-6 md:px-8 flex-col items-center justify-center w-[100%] md:w-[45%] relative z-10">
          <div className="relative group">
            <Image
              src={'/highlight2.webp'}
              alt="imagem de um notebook"
              width={350}
              height={350}
              priority
              className="max-w-[350px] w-full transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col justify-center items-center self-center mb-12 w-[100%] md:max-w-[50%] z-20 md:py-8 px-6">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Sites modernos e personalizados para{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                impulsionar
              </span>{' '}
              seu negócio.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                href={'https://api.whatsapp.com/send?phone=5521935009933'}
                target="blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl dark:bg-bgdark bg-white border-[1px] border-zinc-400 dark:border-zinc-700 hover:border-primary dark:hover:border-primary  font-semibold text-lg shadow-lg  hover:text-primary"
                aria-label="Entre em contato"
              >
                <span>Entrar em contato</span>
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaSearch className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                SEO Otimizado
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaRocket className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Alta Performance
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaMobileAlt className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Multi Dispositivos
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaShieldAlt className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Segurança
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaPaintBrush className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Design Moderno
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaWrench className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Personalizável
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaHandsHelping className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Suporte Total
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaTools className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Manutenção
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaServer className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Hospedagem
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaRobot className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Integração com IA
              </span>
            </div>

            <div className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bglightsecondary dark:bg-bgdarksecondary backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <FaWhatsapp className="text-lg text-green-500" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Automação WhatsApp
              </span>
            </div>
          </div>
        </div>

        <SkillScroll />

        <div
          id="serviços"
          className="h-[120px] w-full bg-[url(../assets/bg-lightsecondary2.webp)] dark:bg-[url(../assets/bg-darksecondary2.webp)]   bg-bottom bg-repeat-x"
        />
      </section>
    </section>
  )
}

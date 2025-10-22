'use client'
import { useState, useRef, FormEvent, useLayoutEffect } from 'react'
import { BiHappyAlt } from 'react-icons/bi'
import Socials from './socials'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { api } from '@/data/api'

export default function Contato() {
  const form = useRef<HTMLFormElement | null>(null)

  const [nameInput, setNameInput] = useState<string>('')
  const [emailInput, setEmailInput] = useState<string>('')
  const [assuntoInput, setAssuntoInput] = useState<string>('')
  const [textInput, setTextInput] = useState<string>('')
  const [alert, setAlert] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('🚀 FORMULÁRIO ENVIADO!')
    setLoading(true)
    setError('')

    try {
      console.log('Enviando dados:', {
        nameInput,
        emailInput,
        assuntoInput,
        textInput,
      })

      // Teste simples primeiro
      console.log('🧪 Testando conexão com API...')
      const testResponse = await api('/health')
      console.log('🏥 Health check:', testResponse.status)

      const response = await api('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameInput,
          email: emailInput,
          subject: assuntoInput,
          message: textInput,
        }),
      })

      console.log('📡 Resposta recebida:', response.status)

      console.log('Resposta da API:', response.status)

      const result = await response.json()
      console.log('Resultado:', result)

      if (result.success) {
        console.log('Sucesso! Mostrando alerta')
        setAlert(true)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
          setAlert(false)
        }, 3000)

        // Limpar formulário
        setNameInput('')
        setEmailInput('')
        setAssuntoInput('')
        setTextInput('')
      } else {
        console.log('Erro:', result.message)
        setError(result.message || 'Erro ao enviar mensagem')
      }
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err)
      setError('Erro de conexão. Tente novamente.')
    } finally {
      console.log('Finalizando, loading:', false)
      setLoading(false)
    }
  }

  const el = useRef<HTMLDivElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            scrub: true,
            markers: false,
            start: 'top 80%',
            end: 'bottom 80%',
          },
        })
        .fromTo(
          '.contato',
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
    }, el)

    return () => {
      gsap.killTweensOf('.contato')
    }
  }, [])

  return (
    <section
      id="contato"
      className="flex flex-col justify-center items-center  py-5  pb-40 dark:bg-[url(../assets/bg-darksecondary2.webp)] bg-[url(../assets/bg-lightsecondary2.webp)]   bg-bottom bg-repeat-x px-5 relative pt-[68px] -mt-[68px]"
    >
      <h1
        id="servicos"
        className="md:text-4xl text-2xl flex items-center  gap-2 justify-center rounded-md px-2  mb-10"
      >
        <span className="text-primary text-2xl md:text-4xl">&#123;</span> Entre
        em contato
        <span className="text-primary text-2xl md:text-4xl">&#125;</span>
      </h1>

      {alert && (
        <div className="fixed top-4 right-4 z-50 flex items-center justify-center font-bold bg-green-500 text-white rounded-lg p-4 shadow-lg animate-pulse">
          ✅ Mensagem enviada com sucesso!{' '}
          <BiHappyAlt className="text-[30px] text-white ml-2" />
        </div>
      )}

      {error && (
        <div className="fixed top-4 right-4 z-50 flex items-center justify-center font-bold bg-red-500 text-white rounded-lg p-4 shadow-lg animate-pulse">
          ❌ {error}
        </div>
      )}

      <div className="w-full flex justify-center" ref={el}>
        <form
          ref={form}
          onSubmit={onSubmit}
          name="form"
          className="flex contato  flex-col w-[100%] max-w-[500px] rounded-md p-[15px]   border-zinc-400 border-[1px] dark:border-zinc-700"
        >
          <Socials />
          <h1 className="text-center text-xl my-5 font-bold">
            Ou envie um email
          </h1>
          <input
            className="m-1 p-2 text-center border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark  focus:ring-0 outline-none  hover:border-primary dark:hover:border-primary bg-transparent"
            required={true}
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />

          <input
            className="m-1 p-2 text-center border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none  hover:border-primary dark:hover:border-primary bg-transparent"
            required={true}
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />

          <input
            className="m-1 p-2 text-center border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none  hover:border-primary dark:hover:border-primary bg-transparent"
            required={true}
            type="text"
            name="assunto"
            id="assunto"
            placeholder="Digite o assunto"
            value={assuntoInput}
            onChange={(e) => setAssuntoInput(e.target.value)}
          />

          <textarea
            className="m-1 p-2 text-center border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none  hover:border-primary dark:hover:border-primary bg-transparent"
            required={true}
            name="mensagem"
            id="mensagem"
            cols={30}
            rows={10}
            placeholder="Digite sua mensagem"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          ></textarea>

          <button
            type="submit"
            name="submit"
            disabled={loading}
            onClick={() => console.log('🔘 Botão clicado!')}
            className={`p-2 w-[25%] rounded-md self-center mt-2 border-[1px] border-zinc-400 dark:border-zinc-700 font-bold hover:border-primary dark:hover:border-primary ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
      <div id="faq" />
    </section>
  )
}

'use client'
import { useState, useRef, FormEvent, useLayoutEffect } from 'react'
import emailjs from '@emailjs/browser'
import { BiHappyAlt } from 'react-icons/bi'
import Socials from './socials'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contato() {
  const form = useRef<HTMLFormElement | null>(null)

  const [nameInput, setNameInput] = useState<string>('')
  const [emailInput, setEmailInput] = useState<string>('')
  const [assuntoInput, setAssuntoInput] = useState<string>('')
  const [textInput, setTextInput] = useState<string>('')
  const [alert, setAlert] = useState<boolean>(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      const emailjsId = process.env.NEXT_PUBLIC_EMAILJS_ID as string
      const emailjsTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string
      const emailjsPublicKey = process.env.NEXT_PUBLIC_PUBLICKEY as string

      if (emailjsId && emailjsTemplate && emailjsPublicKey) {
        emailjs
          .sendForm(emailjsId, emailjsTemplate, form.current, emailjsPublicKey)
          .then(
            () => {
              setAlert(true)
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
              }
              timeoutRef.current = setTimeout(() => {
                setAlert(false)
              }, 2000)
            },
            (error) => {
              setAlert(error.message)
            },
          )
      } else {
        console.error('Environment variables are missing')
      }
    }

    setNameInput('')
    setEmailInput('')
    setAssuntoInput('')
    setTextInput('')
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
    <section className="flex flex-col justify-center items-center bg-bglight dark:bg-bgdark py-5  pb-40 dark:bg-[url(../assets/bg-darksecondary2.png)] bg-[url(../assets/bg-lightsecondary2.png)]   bg-bottom bg-repeat-x px-5">
      <h1 className="text-3xl font-bold">Entre em contato</h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5"></span>

      {alert && (
        <div className="flex items-center justify-center z-40 font-bold bg-bglightsecundary dark:bg-bgdarksecundary border-[1px] border-primary  rounded-md p-4">
          Mensagem enviada com sucesso!{' '}
          <BiHappyAlt className="text-[30px] text-primary" />
        </div>
      )}

      <div className="w-full flex justify-center" ref={el}>
        <form
          ref={form}
          onSubmit={onSubmit}
          name="form"
          className="flex contato  flex-col w-[100%] max-w-[500px] rounded-md p-[15px]  bg-bglight dark:bg-bgdark border-zinc-400 border-[1px] dark:border-zinc-700"
        >
          <Socials />
          <h1 className="text-center text-xl my-5 font-bold">
            Ou envie um email
          </h1>
          <input
            className="m-1 p-2 text-center border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark  focus:ring-0 outline-none bg-bglight dark:bg-bgdark hover:border-primary dark:hover:border-primary"
            required={true}
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />

          <input
            className="m-1 p-2 text-center border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none bg-bglight dark:bg-bgdark hover:border-primary dark:hover:border-primary"
            required={true}
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />

          <input
            className="m-1 p-2 text-center border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none bg-bglight dark:bg-bgdark hover:border-primary dark:hover:border-primary"
            required={true}
            type="text"
            name="assunto"
            id="assunto"
            placeholder="Digite o assunto"
            value={assuntoInput}
            onChange={(e) => setAssuntoInput(e.target.value)}
          />

          <textarea
            className="m-1 p-2 text-center border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none bg-bglight dark:bg-bgdark hover:border-primary dark:hover:border-primary"
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
            className="p-2 w-[25%] rounded-md self-center mt-2 border-[1px] border-zinc-400 dark:border-zinc-700 font-bold hover:border-primary dark:hover:border-primary"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

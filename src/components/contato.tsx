'use client'
import { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { BiHappyAlt } from 'react-icons/bi'
import Socials from './socials'

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
      emailjs
        .sendForm(
          'gmailsfr',
          'template_mumsd62',
          form.current,
          'n_VePloj0wX6t-MH9',
        )
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
    }

    setNameInput('')
    setEmailInput('')
    setAssuntoInput('')
    setTextInput('')
  }

  return (
    <section className="flex flex-col justify-center items-center bg-bglightsecundary dark:bg-bgdarksecundary py-5">
      <h1 className="text-3xl">
        Entre em contato
      </h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5">
       
      </span>

      {alert && (
        <div className="flex items-center justify-center z-40 font-bold bg-bglightsecundary dark:bg-bgdarksecundary border-[1px] border-primary  rounded-md p-4">
          Mensagem enviada com sucesso!{' '}
          <BiHappyAlt className="text-[30px] text-primary" />
        </div>
      )}

      <Socials />

      <form
        ref={form}
        onSubmit={onSubmit}
        name="form"
        className="flex flex-col w-[75%] max-w-[500px] rounded-md p-[15px]  bg-bglight dark:bg-bgdark shadow-shadowlight dark:shadow-shadow-none mt-5 dark:border-[1px] dark:border-zinc-800"
      >
        <h1 className="text-center text-xl mb-5 font-bold">Envie um email</h1>
        <input
          className="m-1 p-2 text-center border-[2px] border-primary rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark  focus:ring-0 outline-none bg-bglightsecundary dark:bg-bgdarksecundary "
          required={true}
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite seu nome"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <input
          className="m-1 p-2 text-center border-[2px] border-primary rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none bg-bglightsecundary dark:bg-bgdarksecundary"
          required={true}
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />

        <input
          className="m-1 p-2 text-center border-[2px] border-primary rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none bg-bglightsecundary dark:bg-bgdarksecundary"
          required={true}
          type="text"
          name="assunto"
          id="assunto"
          placeholder="Digite o assunto"
          value={assuntoInput}
          onChange={(e) => setAssuntoInput(e.target.value)}
        />

        <textarea
          className="m-1 p-2 text-center border-[2px] border-primary rounded-md cursor-pointer font-bold placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 outline-none bg-bglightsecundary dark:bg-bgdarksecundary"
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
          className="p-2 bg-primary w-[25%] rounded-md self-center mt-2 text-black font-bold hover:bg-primary/40"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}

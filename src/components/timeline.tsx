export default function TimeLine() {
  return (
    <ul className="relative mx-10  w-[85%] overflow-visible border-l border-gray-700 dark:border-gray-700 md:w-[45%] my-5">
      <li className="mb-5 ml-6">
        <span className="absolute  -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40 ">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
          Análise e Desenvolvimento de Sistemas
          <span className=" rounded px-2 w-[150px] py-0.5 text-sm font-bold bg-primary dark:text-black">
            5° Período
          </span>
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-normal leading-none text-textlight  dark:text-textdark">
          Universidade Estácio de Sá
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Iniciei o curso em 04/22, com previsão de término em 9/24.
        </p>
      </li>

      <li className="mb-5 ml-6">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-textlight dark:text-textdark">
          Programação para Internet
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
          Estácio
        </time>
        <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
          Introdução a programação estruturada em C, Desenvolvimento Web em
          HTML5, CSS, Javascript e PHP, Paradigmas de Linguagem de Programação
          em Python.
        </p>
      </li>

      <li className="mb-5 ml-6">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-textlight dark:text-textdark">
          Programação para dispositivos móveis
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
          Estácio
        </time>
        <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
          Introdução a segurança da informação, Desenvolvimento Web em HTML5,
          CSS, Javascript e PHP, Programação para dispositivos móveis em android
          e React Native.
        </p>
      </li>
      <li className="mb-5 ml-6">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-textlight dark:text-textdark">
          Next
        </h3>
        <time className=" mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
          Rocketseat e Origamid
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Curso completo.
        </p>
      </li>

      <li className="ml-6 mb-5">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          React
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
          Estácio, Rocketseat, Origamid, Curso em vídeo e Hora de Codar
        </time>
        <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
          Curso completo.
        </p>
      </li>

      <li className="ml-6 mb-5">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Node
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
          Rocketseat, Origamid e Hora de Codar
        </time>
        <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
          Curso completo.
        </p>
      </li>

      <li className="mb-5 ml-6">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-textlight dark:text-textdark">
          Typescript
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
          Rocketseat e Origamid
        </time>
        <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
          Curso completo.
        </p>
      </li>

      <li className="ml-6 mb-5">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Javascript
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
          Estácio, Rocketseat, Origamid, Curso em vídeo e Hora de Codar
        </time>
        <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
          Curso completo.
        </p>
      </li>

      <li className="ml-6 mb-5">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          HTML e CSS
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
          Estácio, Rocketseat, Origamid, Curso em vídeo e Hora de Codar
        </time>
        <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
          Curso completo.
        </p>
      </li>
    </ul>
  )
}

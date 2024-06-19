export default function Skills() {
  return (
    <section className="w-full flex flex-col px-5 py-5 bg-bglightsecundary dark:bg-bgdarksecundary ">
      <h1 className="border-l-8 mb-5 border-primary pl-2 rounded-md text-2xl">
        Minhas Habilidades
      </h1>

      <ul className="flex flex-wrap gap-2 ">
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md">
          HTML
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md">
          CSS
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md">
          Javascript
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md">
          Typescript
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark  rounded-md">
          ReactJS
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md">
          NextJS
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md">
          Angular
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md">
          NodeJS
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark  rounded-md">
          Prisma
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark  rounded-md">
          TailwindCSS
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark  rounded-md">
          Styled Components
        </li>
      </ul>
    </section>
  )
}

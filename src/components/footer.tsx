import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="shadow-shadowlight dark:shadow-shadowdark h-20 w-full flex flex-col justify-center items-center">
        <Link
          href="/"
          className="md:text-2xl text-xl font-extrabold py-5 hover:text-primary"
        >
          <p className="text-2xl font-medium">&lt;Sandro &#47;&gt;</p>
        </Link>
      </div>
    </footer>
  )
}

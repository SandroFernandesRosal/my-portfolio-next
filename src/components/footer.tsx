import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center  shadow-shadowlight dark:shadow-shadowdark ">
      <Link
        href="/"
        className="md:text-2xl text-xl font-extrabold py-5 hover:text-primary"
      >
        <p>Sandro Fernandes </p>
      </Link>
    </footer>
  )
}

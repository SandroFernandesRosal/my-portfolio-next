'use client'
import { useSize } from '@/store/useStore'
import { FaThLarge, FaSquare } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

export default function SizeProject() {
  const { setSize } = useSize()
  return (
    <div className="flex gap-2 mb-5">
      <FaSquare
        onClick={() => setSize('large')}
        className="cursor-pointer text-4xl text-primary"
      />

      <FaThLarge
        onClick={() => setSize('normal')}
        className="cursor-pointer text-4xl text-primary"
      />

      <BsFillGrid3X3GapFill
        onClick={() => setSize('small')}
        className="cursor-pointer text-4xl text-primary"
      />
    </div>
  )
}

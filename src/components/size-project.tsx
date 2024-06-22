'use client'
import { useSize } from '@/store/useStore'
import { FaThLarge } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

export default function SizeProject() {
  const { setSize } = useSize()
  return (
    <div className="flex gap-2 mb-5">
      <FaThLarge
        onClick={() => setSize('large')}
        className="cursor-pointer text-4xl text-primary"
      />

      <BsFillGrid3X3GapFill
        onClick={() => setSize('normal')}
        className="cursor-pointer text-4xl text-primary"
      />
    </div>
  )
}

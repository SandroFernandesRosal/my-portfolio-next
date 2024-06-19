type OpacityProps = {
  menu: boolean
}

const Opacity: React.FC<OpacityProps> = ({ menu }) => {
  return (
    <div
      className={`${menu ? 'flex' : 'hidden'} md:hidden left-0 top-20 absolute w-[100vw] h-[100vh] backdrop-blur-md`}
    ></div>
  )
}

export default Opacity

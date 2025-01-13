type OpacityProps = {
  menu: boolean
}

const Opacity: React.FC<OpacityProps> = ({ menu }) => {
  return (
    <div
      className={`${menu ? 'flex' : 'hidden'} md:hidden left-0 top-[69px] absolute w-[100vw] h-[100vh] backdrop-blur-md`}
    ></div>
  )
}

export default Opacity

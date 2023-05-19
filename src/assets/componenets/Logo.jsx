import { logo_no_bg } from '../../assets'

const Logo = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <p className='py-5 text-7xl text-secondary font-bold text-center'> Weather Web App</p>
      </div>
      <div className="py-20 w-full flex justify-center items-center">
        <div className="h-4 rounded-lg w-[20%] bg-primary" />
        <img src={logo_no_bg} className='w-[40%] p-8' />
        <div className="h-4 rounded-lg w-[20%] bg-primary" />
      </div>
    </div>
  )
}
export default Logo
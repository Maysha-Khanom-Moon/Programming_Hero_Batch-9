import profile from '../assets/profile.jpg'

function Header() {
  return (
    <div className='flex items-center justify-between mt-12 mb-12'>
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>

        <img className='w-14 h-14 rounded-full' src={profile} alt="" />
    </div>
  )
}

export default Header

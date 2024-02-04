import logo from '../assets/bootstrap icon.png'

const Nav = () => {
  return (
    <div className="navbar bg-sky-600">
      <div className="w-10">
        <img src={logo} />
      </div>
      <p className="text-2xl m-2 text-neutral-100 font-bold">My CRM</p>
    </div>
  )
}

export default Nav

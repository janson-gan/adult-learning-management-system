import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-4 '>
        <div className='text-xl font-bold'>
            Logo
        </div>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/login'}>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar =()=>{
    return(
        <div className='navbar'>
           <nav>
            <Link to='/' className='brand'><h1>openCode Food</h1></Link>
            <Link to='/Create' className='brand'>Create Recipe</Link>
           </nav>
        </div>
    )
} 
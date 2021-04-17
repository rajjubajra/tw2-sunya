import {Link} from 'react-router-dom';

function MainNav() {
  return (
    <div className="container" style={{background: "#f9f9f9"}}>
      <ul className="flex justify-center py-5 text-sm uppercase">
        <li><Link className="md:mx-2 py-2 md:px-5 px-2" to="/">Home</Link></li>
        <li><Link className="md:mx-2 py-2 md:px-5 px-2" to="/about">About</Link></li>
        <li><Link className="md:mx-2 py-2 md:px-5 px-2" to="/tracks">Tracks</Link></li>
        <li><Link className="md:mx-2 py-2 md:px-5 px-2" to="/contact">Contact</Link></li>
      </ul>
      
    </div>
  )
}

export default MainNav

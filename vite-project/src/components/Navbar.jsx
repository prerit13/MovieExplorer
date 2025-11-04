import {Link} from 'react-router-dom'

function Navbar() {

    return (
        <nav className="navbar">
        <Link className="logo" href="/">
          <h2>🎬 Movie Explorer</h2>
        </Link>
        <Link to="/">Home</Link>
      </nav>
    )
}


export default Navbar;
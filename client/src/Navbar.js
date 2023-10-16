// // import {Link} from 'react-router-dom';
// const Navabr = () => {
//     return ( 
// <nav className="navabar">

// <h1>List</h1>
// <div className='links'>
//     {/* router link */}
// <a href="/">Home</a>
// <a href="/create" >New Blog </a>
// </div>

// </nav>
//      );
// }
 
// export default Navabr;

// style={{
//     backgroundColor:"#f1356d",
//     borderRadious:"8px",
//     color:"white"
// }}

// 16.router link
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>List</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound= () => {



    return ( 
        <div className="not-found">
<h2>sorry</h2>
<p>That page can not be found</p>
<Link to='/'> Back to Homepage..</Link>


        </div>
     );
}
 
export default NotFound
;
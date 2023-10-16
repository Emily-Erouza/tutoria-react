// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// // 18.routes parameters
// const BlogDetails = () => {
//     const {id} = useParams()// useParams it allows us to grab parameters or route parameters form the route
//     return (  
//         <h2>BlogDetails - {id}</h2>
//     );
// }
 
// export default BlogDetails;

// 19.reusing custom hooks
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import useFetch from "./useFetch";


// const BlogDetails = () => {
//     const {id} = useParams();
//     const {data: blog ,error,isPending} = useFetch("http://localhost:3000/blogs" + id);

//     return ( 
//         <div className="Blog-Details">
//             { isPending && <div>Loading...</div>};
//             { error && <div>{error}</div>};
//             {blog && <article>
//                <h2>{blog.title}</h2> 
//                <p>written by {blog.author}</p>
//                <div>{blog.body}</div>
//                 </article>}
//         </div> 
//     );
// }
 
// export default BlogDetails;

// 24.deleting blog
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog ,error,isPending} = useFetch("http://localhost:3000/blogs" + id)
    const history= useHistory();

    const handleClick=()=>{
        // fetch request
        fetch("http://localhost:3000/blogs/" + id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/')
        })

    }
    return ( 
        <div className="Blog-Details">
            { isPending && <div>Loading...</div>};
            { error && <div>{error}</div>};
            {blog && <article>
               <h2>{blog.title}</h2> 
               <p>written by {blog.author}</p>
               <div>{blog.body}</div>
               <button onClick={handleClick}>delete</button>
                </article>}
        </div> 
    );
}

export default BlogDetails;
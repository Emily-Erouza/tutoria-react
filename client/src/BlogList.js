// // we pass a finction as prop
// const BlogList = ({blogs,title}) => {
// // const blogs = props.blog;
// // const title =props.title;
// // console.log(props,blogs)

//     return (
//         <div className="Blog-list">
//             <h2>{title}</h2>
//             {blogs.map((blog) => (
//                 <div className='blog-preview' key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>written by {blog.author}</p>
//                     {/* <button onClick={()=> handleDelete(blog.id)}>delete</button> */}
//                 </div>
//             )
//             )}
//         </div>
//     );
// }

// export default BlogList;

// 18.route parameters
import {Link} from 'react-router-dom'
const BlogList = ({blogs,title}) => {
   
        return (
    
            <div className="Blog-list">
                <h2>{title}</h2>
                {blogs.map((blog) => (
                    <div className='blog-preview' key={blog.id}>
                        <Link to ={`/blogs/${blogs.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>

                        </Link>
                       
                    </div>
                )
                )}
            </div>
        );
    }
    
    export default BlogList;
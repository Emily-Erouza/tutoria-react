
// 20.controlled input
// import { useState } from "react";

// const Create = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState("mario");

// // 21.submit event
//     const handleSubmit = (e) => {
// e.preventDefault();
// const blog = {title,body,author};
// console.log(blog)

//     }
//     return (
//         <div>
//             <h2>Add a new blog</h2>
//             <form onSubmit={handleSubmit}> {/* submit event */}
//                 <label>Blog title:</label>
//                 <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

//                 <label>Blog body:</label>
//                 <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

//                 <label>Blog author:</label>
//                 <select value={author} onChange={(e) => setAuthor(e.target.value)}>
//                     <option value='melly'>Melly</option>
//                     <option value='mario'>Mario</option>
//                 </select>

//                 <button>Add Blog</button>
//                 <p>{title}</p>
//                 <p>{body}</p>
//                 <p>{author}</p>
//             </form>
//         </div>
//     );
// }
// export default Create;


// 22.POST request
// import { useState } from "react";

// const Create = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState("mario");
// const [isPending,setIsPending] = useState(false)
// // submit event
//     const handleSubmit = (e) => {
// e.preventDefault();
// const blog = {title,body,author};
// setIsPending("true");

// fetch("http://localhost:3000/blogs",{
// method:'POST',
// headers:{'Content-Type':'application/json'},
// body: JSON.stringify(blog)
// }).then(()=>{
//     console.log("new blog added");
//     setIsPending("false");
// })

//     }
//     return (
//         <div>
//             <h2>Add a new blog</h2>
//             <form onSubmit={handleSubmit}> {/* submit event */}
//                 <label>Blog title:</label>
//                 <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

//                 <label>Blog body:</label>
//                 <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

//                 <label>Blog author:</label>
//                 <select value={author} onChange={(e) => setAuthor(e.target.value)}>
//                     <option value='melly'>Melly</option>
//                     <option value='mario'>Mario</option>
//                 </select>

//                 {!isPending && <button>Add Blog</button>}
//                 {isPending && <button disabled> Adding Blog...</button>}
//             </form>
//         </div>
//     );
// }
// export default Create;

// 23.programing redirect
import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("mario");
    const [isPending,setIsPending] = useState(false)

const history = useHistory;
// submit event
    const handleSubmit = (e) => {
e.preventDefault();
const blog = {title,body,author};
setIsPending("true");

fetch("http://localhost:3000/blogs",{
method:'POST',
headers:{'Content-Type':'application/json'},
body: JSON.stringify(blog)
}).then(()=>{
    console.log("new blog added");
    setIsPending("false");
    history.go(-1); // if you want to go back use - n forwad +
    history.push('/');
})
 
    }
    return (
        <div>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}> {/* submit event */}
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='melly'>Melly</option>
                    <option value='mario'>Mario</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled> Adding Blog...</button>}
            </form>
        </div>
    );
}
export default Create;
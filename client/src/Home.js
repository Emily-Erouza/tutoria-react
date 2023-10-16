
// const  Home = () => {
// 2.CLICK EVENT 
// const handleClick =()=>{
//     console.log("hello, user")
// }
// // if u want to pass an argument as a name
// const handleClickAgain =(name)=>{
//     console.log("hello" + name) 
// }

//     return ( 
// <div className="Home">
// <h1>Homepage</h1>
// <button onClick={handleClick}>click me</button>
// <button onClick={() => handleClickAgain("melly")}>click me again</button>
// </div>
//      );
// }

// export default  Home;


//   3.if u wnant to change the name whn u click the button u use usestate
// import React, { useState } from 'react';
// const Home = () => {
//   Use useState to manage state
//   const [name, setName] = useState("mario");
//   const [age, setAge] = useState(18); 

//   const handleClick = () => {
//     setName("melly");
//     setAge(30);
//   };

//   return (
//     <div className="Home">
//       <h1>Homepage</h1>
//       <p>{name}</p>
//       <p>{name} is {age} years old</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }
// export default Home;

// 4.Outputtin list
// import React, { useState } from 'react';
// const Home = () => {
//     const[blogs,setBlogs] = useState([
// {title:"horror", author:"melly" , id:1},
// {title:"thrillle", author: "mario", id:2},
// {title:"zombie", author: "melly" , id:3}
//     ])
//     return ( 
//         <div className="home">
// {blogs.map((blog)=> (

// <div className='blog-preview' key={blog.id}>
// <h2>{blog.title}</h2>
// <p>written by{blog.author}</p>
// </div>
// )
// )}
//         </div>
//      );
// }

// export default Home;

// 5.props
// import React, { useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: "horror", author: "melly", id: 1 },
//         { title: "thrillle", author: "mario", id: 2 },
//         { title: "zombie", author: "melly", id: 3 }
//     ])
//     return (
//         <div className="home">
//            <BlogList blogs={blogs} title="All Blogs!"/>

//         </div>
//     );
// }

// export default Home;

// 6.reusing Components
// import React, { Component, useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: "horror", author: "melly", id: 1 },
//         { title: "thrillle", author: "mario", id: 2 },
//         { title: "zombie", author: "melly", id: 3 }
//     ])
//     return (
//         <div className="home">
//                 <BlogList blogs={blogs} title="All Blogs!"/>
//            <BlogList blogs={blogs.filter((blog)=> blogs.author === "melly")} title="Melly's blog!"/>

//         </div>
//     );
// }

// export default Home;

// 7.functions as props
// import React, { Component, useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: "horror", author: "melly", id: 1 },
//         { title: "thrillle", author: "mario", id: 2 },
//         { title: "zombie", author: "melly", id: 3 }
//     ]);

//     const handleDelete=(id)=>{
//         // the filter method fires each blog and we take each blog as an argument
// const newBlog= blogs.filter(blog=>blog.id !==id);
// setBlogs(newBlog);
//     }

//     return (
//         <div className="home">
//                 <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
           

//         </div>
//     );
// }

// export default Home;

// 8.useEffect(hooks)
// import React, { useState,useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: "horror", author: "melly", id: 1 },
//         { title: "thrillle", author: "mario", id: 2 },
//         { title: "zombie", author: "melly", id: 3 }
//     ]);

//     const handleDelete=(id)=>{
//         // the filter method fires each blog and we take each blog as an argument
// const newBlog= blogs.filter(blog=>blog.id !==id);
// setBlogs(newBlog);
//     }
    
//     useEffect(()=>{
//         console.log("use effect rain");
//         console.log(blogs);
//     });
//     return (
//         <div className="home">
//                 <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
//         </div>
//     );
// }
// export default Home;

// 9.useEffect Depencies
// import React, { useState,useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: "horror", author: "melly", id: 1 },
//         { title: "thrillle", author: "mario", id: 2 },
//         { title: "zombie", author: "melly", id: 3 }
//     ]);

// const [name,setName] = useState("mario");

//     const handleDelete=(id)=>{
//         // the filter method fires each blog and we take each blog as an argument
// const newBlog= blogs.filter(blog=>blog.id !==id);
// setBlogs(newBlog);
//     }
    
//     useEffect(()=>{
//         console.log("use effect rain");
//         console.log(name);// its a second argument to useeffect to contoll whn this runs
//     },[name]);//  depencies
//     return (
//         <div className="home">
//                 <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
//                 <button onClick={()=> setName("lungi")}>change me</button>
//                 <p>{name}</p>
//         </div>
//     );
// }
// export default Home;

// 10.fetch data with useEffect
// import React, { useState,useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);
    
//     useEffect(()=>{
//         fetch("http://localhost:3000/blogs")
//         .then(res=>{
//             return res.json();
//         })
//         .then(data=>{
//             setBlogs(data)
//         });
//     },[]);
//     return (
//         <div className="home">
//                { blogs && <BlogList blogs={blogs} title="All Blogs!" />}
                
//         </div>
//     );
// }
// export default Home;

// 11.conditional loadig Message
// import BlogList from './BlogList';
// import React, { useState,useEffect } from 'react';

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);
//     const[isPending,setIsPending] = useState("true")

//     useEffect(()=>{
//         setTimeout(()=>{

//      fetch("http://localhost:3000/blogs")
//             .then(res=>{
//                 return res.json();
//             })
//             .then(data=>{
//                 setBlogs(data)
//                 setIsPending(false)
//             });

//         }, 1000)
//     },[]);
//     return (
//         <div className="home">
//             {isPending&& <div>Loading...</div>}
//                { blogs && <BlogList blogs={blogs} title="All Blogs!" />}    
//         </div>
//     );
// }
// export default Home;


// 12,handle fetch errors
// import BlogList from './BlogList';
// import React, { useState,useEffect } from 'react';

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);
//     const[isPending,setIsPending] = useState("true");
// const[error,setError] = useState(null);
//     useEffect(()=>{
//         setTimeout(()=>{

//      fetch("http://localhost:3000/blogss")
//             .then(res=>{
//                 if(!res.ok){
//                   throw Error("couldn't fetch the data for that resource");
//                 }
//             })
//             .then(data=>{
//                 setBlogs(data)
//                 setIsPending(false)
//                 setError(null)
//             })
//             .catch(err=>{
//                 setIsPending(false)
//                 setError(err.message)
//             });

//         }, 1000)
//     },[]);
//     return (
//         <div className="home">
//             {error && <div>{error}</div>}
//             {isPending&& <div>Loading...</div>}
//                { blogs && <BlogList blogs={blogs} title="All Blogs!" />}    
//         </div>
//     );
// }
// export default Home;

// 13.custom hook
// import BlogList from './BlogList';
// import React, { useState,useEffect } from 'react';
// import useFetch from './useFetch';

//     const Home = () => {
//     const {data:blogs, isPending, error} = useFetch("http://localhost:3000/blogs");
//     return (
//         <div className="home">
//             {error && <div>{error}</div>}
//             {isPending&& <div>Loading...</div>}
//                { blogs && <BlogList blogs={blogs} title="All Blogs!" />}    
//         </div>
//     );
// }
// export default Home;

// 17.useEffect cleanup
import BlogList from './BlogList';
import useFetch from './useFetch';

    const Home = () => {
    const {data:blogs, isPending, error} = useFetch("http://localhost:3000/blogs");
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending&& <div>Loading...</div>}
               { blogs && <BlogList blogs={blogs} title="All Blogs!" />}    
        </div>
    );
}
export default Home;
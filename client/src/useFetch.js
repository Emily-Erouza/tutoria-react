// 13.custom Hook
// import React, { useState,useEffect } from 'react';

// const useFetch=(url) =>{
//     const [data, setData] = useState(null);
//     const[isPending,setIsPending] = useState("true");
//     const[error,setError] = useState(null);

//     useEffect((url)=>{
//         setTimeout(()=>{
//      fetch("http://localhost:3000/blogs")
//             .then(res=>{
//                 if(!res.ok){
//                   throw Error("couldn't fetch the data for that resource");
//                 }
//             })
//             .then(data=>{
//                 setData(data)
//                 setIsPending(false)
//                 setError(null)
//             })
//             .catch(err=>{
//                 setIsPending(false)
//                 setError(err.message)
//             });

//         }, 1000)
//     },[url]);

//     return{data, isPending, error}
// }
// export default useFetch;


// 17.useEffect cleanup
import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState("true");
    const [error, setError] = useState(null);

    useEffect((url) => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error("couldn't fetch the data for that resource");
                    }
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log('fetch aborted')

                    } else {
                        setIsPending(false)
                        setError(err.message)
                    }
                });

        }, 1000)

        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error }
}
export default useFetch;
import React, { useState, useEffect } from 'react'

const LoadPosts = () => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let request = new XMLHttpRequest();
        
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status === 200){
                    setPosts(request.responseText);
                    setLoading(false);
                    console.log('Response received');
                    console.log(request.responseText);
                    
                }else{
                    setPosts(request.responseText);
                    setLoading(false);
                    console.log(request.responseText);
                    console.log('Network Error.');
                }
            }else{
                setLoading(true);
                console.log(request.responseText);
                console.log(request.readyState);
                console.log('Response not received yet ');
            }
        }

        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
        request.send();

    }, [])

    return (
        <div className='container'>
            <h1>My App</h1>
            {
                loading ? 'Good things take time' : posts
            }
        </div>
    )
}

export default LoadPosts

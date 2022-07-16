import React from "react";
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from "./components/CreatePost";

function App(){
    const [user, setUser] = React.useState('reed');
    const [posts, setPosts] = React.useState([])
    // List or array of post objects
    
    React.useEffect(() =>{
        document.title = user ? `${user}'s Feed`: "Please login";
    }, [user]);
// above is tab title
    if(!user){
        return <Login setUser={setUser} />;
    }
    
    return (
        <>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} setPosts={setPosts} post={posts} />
        {/* need previous array of posts so create new prop */}
        {posts.map((post, i) =>(
            <React.Fragment key={i}>
            {post.image &&(
                <img 
                style={{height: 100, width:200, objectFit:'cover'}}
                src={URL.createObjectURL(post.image)}
                alt="Post cover" 
                />
                )}
            <p>{post.content}</p>
            <div>{user}</div>
                </React.Fragment>
        ))}
    </>
    );
}   

export default App;
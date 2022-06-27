import React from "react";

function CreatePost({ user, setPosts, posts }){
    const [content, setContent] = React.useState('');
    // local state for content
    const [image, setImage] = React.useState(null);
    // local state for image default set to null

    function handleSubmit(event){
        event.preventDefault();
        const post = {content, image, user};
        // content: content, image: image, user: user object shorthand
        const newPosts =[post, ...posts];
        // spreading in the posts
        setPosts(newPosts);
    }
    return <div>
        <h1>Create New Post</h1>
        <form>
            <input 
            type="text" 
            placeholder="Add Post Content"
            onChange={event => setContent(event.target.value)}
            />
            <input 
                type="file"
                onChange={event => setImage(event.target.files[0])}
                // files is actually an array and we want the first one which is why it's at 0
            />
            <button type="submit">Submit Post</button>
        </form>
        </div>
}   

export default CreatePost;
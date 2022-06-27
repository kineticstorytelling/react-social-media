import React from "react";

function CreatePost({ user }){
    const [content, setContent] = React.useState('');
    // local state for content
    const [image, setImage] = React.useState(null);
    // local state for image default set to null

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
        <p>{content}</p>
        {image && <img 
            style={{height: 100, width: 200, objectFit: 'cover'}}
            src={URL.createObjectURL(image)}
        />}
        {/* only try to show an image when it's posted */}
        </div>
}   

export default CreatePost;
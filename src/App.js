import React from "react";
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from "./components/CreatePost";

function App(){
    const [user, setUser] = React.useState('reed');
    
    React.useEffect(() =>{
        document.title = user ? `${user}'s Feed`: "Please login";
    }, [user]);
// above is tab title
    if(!user){
        return <Login setUser={setUser} />;
    }
    return <>
        <Header user={user} setUser={setUser} />
        <CreatePost />
    </>;
}   

export default App;
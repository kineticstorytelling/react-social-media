import React from "react";
import Login from './components/Login';
import Header from './components/Header';

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
    </>;
}   

export default App;
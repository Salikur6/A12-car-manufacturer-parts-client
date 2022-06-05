import { signOut } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase.init";

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const img = user?.user?.photoURL;
    const providerId = user?.user?.providerData[0]?.providerId;

    // console.log(providerId);


    if (user) {
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, name, img, providerId })
        })
            .then(res => {
                console.log(res)
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('access-token');
                }
                return res.json()
            })
            .then(data => {
                setToken(data)
                console.log(data);
                localStorage.setItem('access-token', data.token);
            })
    }
    return [token];
};

export default useToken;
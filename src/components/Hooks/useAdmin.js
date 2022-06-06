import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);


    useEffect(() => {
        fetch(`https://shielded-reef-19583.herokuapp.com/admin/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                // console.log(res)
                return res.json()
            })
            .then(data => {
                setAdmin(data.admin);
                // console.log(data)
                setAdminLoading(false);
            })
    }, [user])
    return [admin, adminLoading];
};

export default useAdmin
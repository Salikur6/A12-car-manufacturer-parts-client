import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:5000/admin/${user?.email}`, {
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
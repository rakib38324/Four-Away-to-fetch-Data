import React, { useEffect, useState } from 'react';

const Fetch = () => {

    const [data, setData] = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setData(data))
    } ,[])

    console.log("data: ",data)

    return (
        <div>
            <h1>Using useEffect</h1>
            {
                data?.map( (companyname)=> <p key={companyname.id}>Company Name: {companyname.name}</p>
            )
            }
        </div>
    );
};

export default Fetch;
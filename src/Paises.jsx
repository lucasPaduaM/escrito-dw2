import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Paises = () => {
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        async function getPases() {
            const response = await axios.get('https://restcountries.com/v3/all')
            setPaises(response.data)
            console.log(response.data)
        }
        getPases();
    }, [])

    return (
        <div>
            {paises.map(pais => (
                <>
                    <p>Nombre: {pais.name.common}</p>
                </>
            ))}
        </div>
    );
};

export default Paises;
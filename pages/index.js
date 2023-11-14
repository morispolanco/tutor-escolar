import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');

    const enviarPregunta = async () => {
        try {
            const res = await axios.post('/api/chat', { pregunta });
            setRespuesta(res.data.respuesta);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <input type="text" value={pregunta} onChange={e => setPregunta(e.target.value)} />
            <button onClick={enviarPregunta}>Preguntar</button>
            <p>{respuesta}</p>
        </div>
    );
}
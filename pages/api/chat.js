import axios from 'axios';

export default async function handler(req, res) {
    const { pregunta } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            'prompt': pregunta, 'max_tokens': 60
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_KEY}`
            }
        });

        res.status(200).json({ respuesta: response.data.choices[0].text.strip() });
    } catch (error) {
        res.status(500).json({ error: 'Error procesando tu pregunta.' });
    }
}
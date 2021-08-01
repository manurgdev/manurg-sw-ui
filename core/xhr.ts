import axios from 'axios';

export async function getData(path: string) {
    let response = await axios.get(path, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.data;
}
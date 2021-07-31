import axios from 'axios';

export async function getData(path: string) {
    let response = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json());

    return response;
}
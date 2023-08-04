const API_KEY = process.env.API_TOKEN;
const API_URL = process.env.BASE_URL;

const dataToSend = {
    "token": API_KEY
};

const requestOptions = {
    method: 'get', headers: {
        'Content-Type': 'application/json',
    }, body: JSON.stringify(dataToSend)
};


const getUnidades = async () => {
    const URL = `${API_URL}unidade`;

    try {
        const response = await fetch(URL, requestOptions);
        return await response.json();
    } catch (error) {
        return console.log("Ocorreu um erro: " + error);
    }
}

export {getUnidades}
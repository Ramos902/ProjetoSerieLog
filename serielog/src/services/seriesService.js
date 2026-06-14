export async function getSeries() {
    try {
        const response = await fetch('http://localhost:3000/series');
        return await response.json();
    } catch (error) {
        console.error('Erro ao carregar séries:', error);
        return [];
    }
}

export async function postSerie(serie) {
    console.log('Enviando série:', serie);
    try {
        const response = await fetch('http://localhost:3000/series', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: Date.now().toString(),
                titulo: serie.titulo
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao criar série:', error);
        return {};
    }
}
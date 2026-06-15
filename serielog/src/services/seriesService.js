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

    const resLista = await fetch('http://localhost:3000/series');
    const lista = await resLista.json();
    
    try {
        const response = await fetch('http://localhost:3000/series', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: lista.length + 1,
                titulo: serie.titulo,
                genero: serie.genero,
                nota: serie.nota,
                ano: serie.ano,
                assistida: serie.assistida
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Erro ao criar série:', error);
        return {};
    }
}

export async function deleteSerie(id) {
    try {
        await fetch(`http://localhost:3000/series/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Erro ao deletar série:', error);
    }
}
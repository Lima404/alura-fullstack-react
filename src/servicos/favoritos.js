import axios from "axios"

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos", headers:{"Content-Type":"application/json"}})

async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    return response.data
}

async function postFavorito(id, nome) {
    const objetocriado = {id, nome}
    console.log(objetocriado)

    await axios.post(`http://localhost:8000/favoritos`, objetocriado)
}

async function deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}
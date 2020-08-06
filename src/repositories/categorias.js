import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`
function getAllWithVideos(){
	console.log('log', config.URL_BACKEND_TOP)
	return fetch(`${URL_CATEGORIES}?_embed=videos`)
	.then(async (respostaDoServidor) => {

		if (respostaDoServidor.ok){			
			return await respostaDoServidor.json()
		}

		throw new Error('Não foi possível pegar os dados')
		//console.log(resposta)
		//setCategorias(resposta		)
		//ou setCategorias([...resposta])
	})	
}
function getAll(){	
	return fetch(`${URL_CATEGORIES}`)
	.then(async (respostaDoServidor) => {

		if (respostaDoServidor.ok){			
			return await respostaDoServidor.json()
		}

		throw new Error('Não foi possível pegar os dados')
		//console.log(resposta)
		//setCategorias(resposta		)
		//ou setCategorias([...resposta])
	})	
}

export default {
	getAllWithVideos,
	getAll
}
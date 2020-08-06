import config from '../config'

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`
function create(objetoDoVideo){
	console.log('log', config.URL_BACKEND_TOP)
	return fetch(`${URL_VIDEOS}`, {
		method: 'POST',
		headers:{
			'Content-type': 'application/json',

		},
		body: JSON.stringify(objetoDoVideo)
	})
	.then(async (respostaDoServidor) => {

		if (respostaDoServidor.ok){			
			return await respostaDoServidor.json()
		}

		throw new Error('Não foi possível cadastrar os dados')
		//console.log(resposta)
		//setCategorias(resposta		)
		//ou setCategorias([...resposta])
	})	
}

export default {
	create,
}
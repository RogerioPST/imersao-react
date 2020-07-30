import React, {useState, useEffect} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria(){
	const [categorias, setCategorias] = useState([])
	const [cor, setCor] = useState('Escolha a cor')
	
	const valoresIniciais ={
		nome: 'Teste 12',
		descricao: 'descricao teste',
		cor: '#FFF'
	}
	const valoresEmBranco ={
		nome: '',
		descricao: '',
		cor: '#FFF'
	}
	const [values,setValues] = useState(valoresIniciais)
	
	function setValue(chave, valor){
		setValues({
			...values,
			[chave]: valor,
		})
	}

	function handleCategoria(event){
		const {name, value} = event.target
		setValue(name,value)
	}
	function handleCor(event){
		setCor(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log('cheguei')		
		setCategorias([
			...categorias,
			values
		])
		setValues(valoresEmBranco)

	}

	useEffect(() =>{
		console.log('alo alo, w brasil')
		setTimeout(	() =>{
			setCategorias([
				...categorias,
				{
					id:1, 
					nome: 'front end',
					descricao: 'uma catego',
					cor: '#cccccc',
				},
				{
					id:2, 
					nome: 'back end',
					descricao: 'du catego',
					cor: '#cccccc',
				}
			])
		const URL_TOP = 'http://localhost:8081/categorias'

		fetch(URL_TOP)
			.then(async (respostaDoServidor) => {
				const resposta = await respostaDoServidor.json()
				console.log(resposta)
				setCategorias(resposta
				)
				//ou setCategorias([...resposta])
			})
		
		
		}, 3000)
	},[values.nome])
	return(
		<PageDefault>
		<h1>Cadastro de Categoria: {values.nome}</h1>
		<h1>Descrição de Categoria: {values.descricao}</h1>
		<h1>Cor: {cor}</h1>

		<form
			style={{background: cor}}
			onSubmit={handleSubmit}>
				<FormField 
					label="Nome da categoria"
					type="textarea"
					value={values.nome}
					onChange={handleCategoria}
					name="nome"
				/>
			<label>
				Nome da Categoria:
				<input
				name="nome"
				value={values.nome}
					type="text" onChange={handleCategoria}
				/>
			</label>
			<label>
				Descrição:
				<textarea	
				name="descricao"			
				value={values.categoria}
					 onChange={handleCategoria}
				/>
			</label>
			<label>
				Cor da categoria:
				<input
				type="color"
				name="cor"
				value={values.cor}
					 onChange={handleCategoria}
				/>
			</label>
			<label>
				Cor do formulario:
				<input
				type="color"
				value={cor}
					 onChange={handleCor}
				/>
			</label>

			<button>
				Cadastrar
			</button>
		
		</form>

		{categorias.length === 0 && (
			<div>
				Loading...
			</div>
		)

		}
		{categorias.map((categoria, indice) =>{
				return(<li key={indice}>{categoria.nome}</li>)
			})}


		<Link to="/">
			Ir para home
		</Link>
	</PageDefault>
	)
}

export default CadastroCategoria
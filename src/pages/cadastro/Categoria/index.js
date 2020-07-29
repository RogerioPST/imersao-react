import React, {useState} from 'react'
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
					type="text"
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
			{categorias.map((categoria, indice) =>{
				return(<li key={indice}>{categoria.nome}</li>)
			})}
		</form>


		<Link to="/">
			Ir para home
		</Link>
	</PageDefault>
	)
}

export default CadastroCategoria
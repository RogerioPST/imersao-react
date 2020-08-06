import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo(){
	const history = useHistory()
	const [categorias, setCategorias] = useState([])
	const categoryTitles = categorias.map(({ nome }) => {
		return nome
	})
	const {handleChange, values} = useForm({
		titulo: 'Video padrao',
		url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg&t=1746s',
		categoria: 'Front end'
	})
	useEffect(() =>{
		categoriasRepository.getAll()
			.then(categorias =>{
				console.log(categorias)
				setCategorias(categorias)

			})
			.catch((err) =>{
				console.log(err.message)
			})
	}, [])
	return(
		<PageDefault>
			<h1>Cadastro de video</h1>

		<form onSubmit={(event) =>{
			event.preventDefault()

			const categoriaEscolhida = categorias.find(categoria =>{
				return categoria.titulo = values.categoria
			})

			console.log('categ escolhida', categoriaEscolhida)

			videosRepository.create({
				nome: values.titulo,
				url: values.url,
				categoriaId: 1
			}).then(() =>{				
				history.push('/')
			})

		}} >
			<FormField
				label="Título do video"
				name="titulo"
				value={values.titulo}
				onChange={handleChange}
			/>
			<FormField
				label="URL do video"
				name="url"
				value={values.url}
				onChange={handleChange}
			/>
			<FormField
				label="Categoria"
				name="categoria"
				value={values.categoria}
				onChange={handleChange}
				suggestions={categoryTitles}
			/>

			<Button type="submit">
				Cadastrar
			</Button>
			</form>

			<Link to="/cadastro/categoria">
				Cadastrar Categoria
			</Link>
		</PageDefault>
	)
}

export default CadastroVideo
import React, {useEffect, useState} from 'react';
import Menu from '../../components/Menu'
//import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import categoriasRepository from '../../repositories/categorias'
import PageDefault from '../../components/PageDefault'
/*
caso eu queira usar o styled components, usar assim e 
substituir a div abaixo do return:
const AppWrapper = styled.div`
	background: var(--grayDark)
`
*/
function Home() {
	const [dadosIniciais, setDadosIniciais] = useState([])

	//http://localhost:8081/categorias?_embed=videos
	useEffect(() =>{
		categoriasRepository.getAllWithVideos()
			.then((categoriasComVideos =>{
				console.log(categoriasComVideos)
				setDadosIniciais(categoriasComVideos)

			}))
			.catch((err) =>{
				console.log(err.message)
			})
	}, [])
	{/* <div style={{background: "#141414"}}>  */}
  return (
		<PageDefault paddingAll={0}>			
			{/* <Menu />      */}
			{dadosIniciais.length === 0 && (<div>Loading...</div>)}
		
			{dadosIniciais.map((categoria, indice) =>{
				if (indice === 0) {
					return (
						<div key={categoria.id}>
							<BannerMain
								videoTitle={dadosIniciais[0].videos[0].titulo}
								url={dadosIniciais[0].videos[0].url}
								videoDescription={"O que é fron end? Trabalhando na area"}
							/>		
							<Carousel
								ignoreFirstVideo
								category={dadosIniciais[0]}
							/>	
						</div>
					)
				}		
				return (
					<Carousel			
						key={categoria.id}	
						category={categoria}
					/>	
				)
			})}
				</PageDefault>
  );
}

export default Home;

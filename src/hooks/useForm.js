import {useState} from 'react'

/* custom Hook */
function useForm(valoresIniciais){
	const [values,setValues] = useState(valoresIniciais)

	function setValue(chave, valor){
		setValues({
			...values,
			[chave]: valor,
		})
	}

	function handleChange(event){
		const {name, value} = event.target
		setValue(name,value)
	}

	function clearForm(){
		setValues(valoresIniciais)
	}

	return {
		values, 
		handleChange,
		clearForm,
		setValue	
	}
}

export default useForm
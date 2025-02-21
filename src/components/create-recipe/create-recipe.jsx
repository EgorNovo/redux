import { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipe.api'

const CreateRecipe = () => {
	const [recipe, setRecipe] = useState('')
	const [createRecipe] = useCreateRecipeMutation()

	const handleSubmit = (e) => {
		e.preventDefault();
		createRecipe({name: recipe, id: String(Math.floor(Math.random() * 100))})
		.then(() => { setRecipe('')})
	}

	const handleChange = (e) => {
		setRecipe(e.target.value)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' value={recipe} onChange={handleChange} placeholder='recipe'/>
				<input type='submit' value='Add recipe'/>
			</form>
		</div>
	)
}

export default CreateRecipe
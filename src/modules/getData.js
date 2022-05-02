import CardsList from "./CardsList";

const getData = (fileName) => {
	return fetch(fileName)
		.then(response => {
			return response.json()
		}).then(data => {
			const cardsList = new CardsList(document.body, data)
			cardsList.render()
		})
		.catch(error => console.log('Произошла ошибка ' + error))
}

export default getData
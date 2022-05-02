const getData = (fileName) => {
	return fetch(fileName)
		.then(response => {
			return response.json()
		})
		.catch(error => console.log('Произошла ошибка ' + error))
}

export default getData
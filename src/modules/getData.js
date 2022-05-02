const getData = (fileName) => {
	return fetch(fileName)
		.then(response => {
			return response.json()
		}).then(data => {
			data.forEach(item => {
				const div = document.createElement('div')
				div.innerHTML = `
					<img src="${item.photo}"/>
					<p>${item.name}</p>
					<p>${item.species}</p>
					<p>${item.gender}</p>
					<p>${item.birthDay}</p>
					<p>${item.deathDay}</p>
					<p>${item.status}</p>
					<p>${item.actors}</p>
				`
				document.body.append(div)
			});
		})
		.catch(error => console.log('Произошла ошибка ' + error))
}

export default getData
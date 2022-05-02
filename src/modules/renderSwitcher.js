const renderSwitcher = (root, data) => {
	if (data) {
		const moviesList = new Set()
		data.forEach(item => {
			if (item.movies) {
				item.movies.forEach(movie => {
					moviesList.add(movie)
				})
			}
		})
		const nav = document.createElement('nav')
		nav.classList.add('switcher')
		let temp = `<ul class="switcher__list">
					<li data-film="all">All films</li>`
		for (let movie of moviesList) {
			temp += `<li class="switcher__link" data-film="${movie}">${movie}</li>`
		}
		temp += `</ul>`
		nav.innerHTML = temp
		root.append(nav)
	}
}

export default renderSwitcher
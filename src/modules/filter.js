const filter = () => {
	const cards = document.querySelectorAll('.card')
	const switcherBlock = document.querySelector('.switcher')
	const selectedItem = document.querySelector('.selected__movie')

	if (cards && switcherBlock) {
		switcherBlock.addEventListener('click', e => {
			if (e.target.tagName !== 'LI') return

			const filterFilm = e.target.dataset['film']

			cards.forEach(card => {
				card.classList.remove('hide')
				setTimeout(() => {
					card.style.display = 'flex'
				}, 300)
				selectedItem.textContent = ''
				if ((!card.querySelector(`.card__movies-list li[data-film-name="${filterFilm}"]`)) &&
					filterFilm !== 'all') {
					card.classList.add('hide')
					setTimeout(() => {
						card.style.display = 'none'
					}, 300)
					selectedItem.textContent = '#' + filterFilm
				}
			})
		})
	}
}

export default filter
const filter = () => {
	const cards = document.querySelectorAll('.card')
	const switcherBlock = document.querySelector('.switcher')

	if (cards && switcherBlock) {
		switcherBlock.addEventListener('click', e => {
			if (e.target.tagName !== 'LI') return

			const filterFilm = e.target.dataset['film']

			cards.forEach(card => {
				card.style.display = 'block'
				if ((!card.querySelector(`.card__movies-list li[data-film-name="${filterFilm}"]`)) &&
					filterFilm !== 'all') {
					card.style.display = 'none'
				}
			})
		})
	}
}

export default filter
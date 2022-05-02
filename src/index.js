import getData from './modules/getData'
import CardsList from './modules/CardsList'
import renderSwitcher from './modules/renderSwitcher'
import filter from './modules/filter'

const mainSwitcher = document.querySelector('.main__switcher')
const mainHeroes = document.querySelector('.main__heroes')

getData('dbHeroes.json').then(data => {
	const cardsList = new CardsList(mainHeroes, data)
	cardsList.render()
	renderSwitcher(mainSwitcher, data)
	filter()
})
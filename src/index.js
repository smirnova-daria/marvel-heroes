import getData from './modules/getData'
import CardsList from './modules/CardsList'
import renderSwitcher from './modules/renderSwitcher'
import filter from './modules/filter'
import animation from './modules/animation'

const mainSwitcher = document.querySelector('.main__switcher')
const mainHeroes = document.querySelector('.main__heroes')

getData('dbHeroes.json').then(data => {
	const cardsList = new CardsList(mainHeroes, data)
	cardsList.render()
	renderSwitcher(mainSwitcher, data)
	filter()
})

// const logo = document.querySelector('.logo')
// setInterval(animation({
// 	duration: 5000,
// 	timing(timeFraction) {
// 		return timeFraction;
// 	},
// 	draw(progress) {
// 		logo.style.left = progress * 70 + '%'
// 	}
// }), 5000)
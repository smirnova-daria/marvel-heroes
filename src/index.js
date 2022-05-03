import getData from './modules/getData'
import CardsList from './modules/CardsList'
import renderSwitcher from './modules/renderSwitcher'
import filter from './modules/filter'
import animation from './modules/animation'
import scroll from './modules/scroll'

const mainSwitcher = document.querySelector('.main__switcher')
const mainHeroes = document.querySelector('.main__heroes')
const decor1 = document.querySelector('.decor1')
const decor2 = document.querySelector('.decor2')

getData('dist/dbHeroes.json').then(data => {
	const cardsList = new CardsList(mainHeroes, data)
	cardsList.render()
	renderSwitcher(mainSwitcher, data)
	filter()
})

animation({
	duration: 5000,
	timing(timeFraction) {
		return timeFraction;
	},
	draw(progress) {
		decor1.style.width = progress * 100 + 200 + 'px';
		decor1.style.height = progress * 100 + 200 + 'px';
		decor1.style.right = -(1 - progress) * 100 + 'px';
	}
})

animation({
	duration: 10000,
	timing(timeFraction) {
		//return timeFraction;
		for (let a = 0, b = 1; 1; a += b, b /= 2) {
			if (timeFraction >= (7 - 4 * a) / 11) {
				return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
			}
		}
	},
	draw(progress) {
		decor2.style.top = -(1 - progress) * 300 + 'px';
	}
})

scroll()
import Renderer from "./Renderer";

class Card extends Renderer {
	constructor(data = {}, root) {
		super(root)
		this._data = data
	}
	initTemplate() {
		if (!this._template) {
			return
		}
		this._template.classList.add('card')
		let temp = `<div class="card__photo"><img src="${this._data.photo}" alt="${this._data.name}"/>
			<div class="card__info">
		`

		for (let key in this._data) {
			if (key !== 'photo' && key !== 'movies') {
				temp += `<p class="card__${key}">${key}: <span>${this._data[key]}</span></p>`
			}
		}
		temp += `</div></div>`

		if (this._data.movies) {
			temp += `<div class="card__movies"><p>Movies:</p><ul class="card__movies-list">`
			this._data.movies.forEach(movie => {
				temp += `<li data-film-name="${movie}" class="card__movie-item">${movie}</li>`
			})
			temp += `</ul></div>`
		}
		this._template.innerHTML = temp
	}
}

export default Card
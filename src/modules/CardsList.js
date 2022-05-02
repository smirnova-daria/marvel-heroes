import Card from "./Card";
import Renderer from "./Renderer";

class CardsList extends Renderer {
	constructor(root, data = []) {
		super(root)
		this.createCardsObjectsList(data)
	}

	createCardsObjectsList(data) {
		this._cards = data.map(item => {
			return new Card(item)
		})
	}

	get cards() {
		return this._cards
	}

	initTemplate() {
		if (!this._template) {
			return
		}

		this._template.classList.add('cards-list')
		this.cards.forEach(item => item.render(this._template));
	}
}

export default CardsList
export class BeerItem {
    elementRef;
	isFavorite = false;
	constructor(data) {
		this.data = data // Init data from api
	}


	makeFavorite(el) {
		this.isFavorite = !this.isFavorite
		el.classList.remove(this.isFavorite ? 'far' : 'fas')
		el.classList.add(this.isFavorite ? 'fas' : 'far')
	}

	openDetails() {
		//Opening modal with details
	}

	addListener() {
		const [btn] = this.elementRef.getElementsByClassName('make-favorite')
		btn.addEventListener("click", () => {
			this.makeFavorite(btn)
			const updateFavorite = new CustomEvent('favoriteUpdate')
			document.dispatchEvent(updateFavorite)
		})
		
	}

	render(parentElement) {
		parentElement.append(this.createBeerItemElement()); // Render beer item to list
		this.addListener();
	}

	createBeerItemElement() { // create beerItem dom element with data
		const el = document.createElement('div');
		el.innerHTML = `<div class="beer-item">
        <div class="title">
            <span>${this.data.name}</span>
            <img src="${this.data.image_url}">
        </div>
        
        <div class="description">
            <span>${this.data.description}</span>
            <span class="abv">${this.data.abv}</span>
			<div><i class='${this.isFavorite ? 'fas' : 'far'} fa-star make-favorite'></i></div>
        </div>
    </div>`;

        this.elementRef = el;
		return el;
	}

}


export class BeerItem {
    elementRef;
	constructor(data) {
		this.data = data // Init data from api
	}

	makeFavorite() {
		//making this item favorite
	}

	openDetails() {
		//Opening modal with details
	}

	render(parentElement) {
		parentElement.append(this.createBeerItemElement()); // Render beer item to list
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
        </div>
    </div>`;

        this.elementRef = el;
		return el;
	}

    destroy() {
        this.elementRef.remove();
    }
}
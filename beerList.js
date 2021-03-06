export class BeerList {
	beers = [];

	constructor(renderEl) {
		this.renderEl = renderEl; //adding container element
		this.handleBeerListUpdate(); //Listening to the beerList update
		this.handleFavoriteListUpdate();
	}

	renderBeerList() { //re-rendering all beer list
		this.beers.forEach((item) => item.render(this.renderEl)); //render each beerItem
	}

    destroyBeerList() {
        this.renderEl.innerHTML = '';
    }

	handleBeerListUpdate() { // Listening to the beerData update
		document.addEventListener('updateBeerData', (beerList) => {
            this.destroyBeerList();
			this.beers = beerList.detail;
            this.renderBeerList();
		});
	}

	handleFavoriteListUpdate() {
        document.addEventListener('favoriteUpdate', () => {
            this.destroyBeerList();
            this.renderBeerList();
        })
    }
}
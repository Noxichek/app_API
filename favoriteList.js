export class FavoriteList {
	beers = [];

	constructor(renderEl) {
		this.renderEl = renderEl; //adding container element
        this.handleBeerListUpdate();
        this.handleFavoriteListUpdate();
	}

    destroyBeerList() {
        this.renderEl.innerHTML = '';
    }

    handleBeerListUpdate() { // Listening to the beerData update
		document.addEventListener('updateBeerData', (beerList) => {
			this.beers = beerList.detail;
		});
	}

	renderFavoriteList() {
        this.destroyBeerList();
		this.beers.filter((el) => el.isFavorite).forEach((item) => item.render(this.renderEl));
	}

    handleFavoriteListUpdate() {
        document.addEventListener('favoriteUpdate', () => {
            this.destroyBeerList();
            this.renderFavoriteList();
        })
    }
}
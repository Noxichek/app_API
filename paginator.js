import { BeerApi } from "./beerApi.js";
import { BeerItem } from "./beerItem.js";

export class Paginator {
    currentPage = 1;
    constructor(elementsCount) {
        this.elementsCount = elementsCount;
        this.beerApi = new BeerApi('https://api.punkapi.com/v2/beers');
    }

    loadData() {
        this.beerApi.getPaginatedData(this.currentPage, this.elementsCount)
        .then(data => {
			const beerData = data.map((elData) => new BeerItem(elData)); //getting modifying data
			const updateBeerListEvent = new CustomEvent('updateBeerData', { detail: beerData });
			document.dispatchEvent(updateBeerListEvent);
            this.currentPage++;
		})}

    resetPage() {
        this.currentPage = 1;
    }
}
export class BeerApi {
    constructor(dataUrl){
        this.dataUrl = dataUrl;
    }

    async getPaginatedData(currentPage, itemsPerPage=20) {
        return await fetch(`${this.dataUrl}?page=${currentPage}&per_page=${itemsPerPage}`)
		.then(response => {
			return response.json();
		})
    }

    async searchData(beerName) {
        return await fetch(`${this.dataUrl}?beer_name=${beerName}`)
		.then(response => {
			return response.json();
		})
    }
}
import {BeerList} from './beerList.js';
import {Paginator} from './paginator.js';
import {Modal} from './modal.js';
import {BeerApi} from './beerApi.js'
import {BeerItem} from './beerItem.js'

class App {
    constructor(renderEl){
        this.beerList = new BeerList(renderEl);
        this.paginator = new Paginator(20);
        this.modal = new Modal();
        this.beerApi = new BeerApi('https://api.punkapi.com/v2/beers');
        this.paginator.loadData();
        this.addFavoriteListener();
        this.searchBeer();
    }

    addFavoriteListener() {
        const btnFav = document.getElementById("btn-fav")
        btnFav.addEventListener("click", () => {
            this.modal.showModal()
        })
    }
    
    searchBeer() {
        const search = document.querySelector(".search")
        search.addEventListener('input', () => {
            if(search.value) {
            this.beerApi.searchData(search.value)
            .then(data => {
                const beerData = data.map((data) => new BeerItem(data)); //getting modifying data
                const updateBeerListEvent = new CustomEvent('updateBeerData', { detail: beerData });
                document.dispatchEvent(updateBeerListEvent);
            })} else {
                this.paginator.loadData()
            }
        })

    }

}


document.addEventListener('DOMContentLoaded', () => new App(document.body))

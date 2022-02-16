import {BeerList} from './beerList.js';
import {Paginator} from './paginator.js'

class App {
    constructor(renderEl){
        this.beerList = new BeerList(renderEl);
        this.paginator = new Paginator(20);
        this.paginator.loadData()
    }
}


document.addEventListener('DOMContentLoaded', () => new App(document.body))
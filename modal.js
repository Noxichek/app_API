import {FavoriteList} from './favoriteList.js';

export class Modal {
    constructor() {
        this.favoriteList = new FavoriteList(document.querySelector(".modal-list"));
        this.modal = document.querySelector(".myModal")
        this.heandlerCloseModal()
    }

    showModal() {
        this.modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
        this.favoriteList.renderFavoriteList();
    }

    closeModal() {
        this.modal.style.display = 'none'
        document.body.style.overflow = 'auto'
        this.favoriteList.destroyBeerList();
    }

    heandlerCloseModal() {
        const close = document.querySelector(".close")
        close.addEventListener('click', () => {
            this.closeModal();
        })
    }
}
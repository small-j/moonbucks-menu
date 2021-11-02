export default class MenuItem {
    constructor(app, onClickMenuItem) {
        this.$app = app;
        this.onClickMenuItem = onClickMenuItem;
        this.state = [];
        this.setEventListener();
    }

    setState(newState) {
        this.state = newState;
    }

    render() {
        const result = this.state.map((item, index) => {
            const isSoldOut = item.isSoldOut ? 'sold-out' : '';
            return `
            <li class="menu-list-item d-flex items-center py-2" data-menu-id="${index}">
                <span class="w-100 pl-2 menu-name ${isSoldOut}">${item.name}</span>
                <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
                >
                    품절
                </button>
                <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                >
                    수정
                </button>
                <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                >
                    삭제
                </button>
            </li>
            `
        }).join('');

        this.$app.innerHTML = result;
    }

    setEventListener() {
        this.$app.addEventListener('click', (e) => {
            const menuItemClassList = e.target.classList;
            const menuId = e.target.closest('li').dataset.menuId;
            
            this.onClickMenuItem({menuItemClassList: menuItemClassList, menuId: menuId});
        });
    }
}

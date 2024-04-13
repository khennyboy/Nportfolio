export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.appendChild(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.appendChild(p);
        if (pos = 'start') {
            this.container.insertAdjacentElement("afterbegin", li);
        }
        if (pos = 'end') {
            this.container.insertAdjacentElement("beforeend", li);
        }
    }
}

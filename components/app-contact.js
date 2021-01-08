class AppContact extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        const template = `
            <style>
                .wrap {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-basis: 70vh;
                    background-color: silver;
                }
                .column1 {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    flex-basis: 60vh;
                    background-color: #bc9d66;
                }
                .column2 {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    flex-basis: 40vh;
                    background-color: #161616;
                    color: white;
                }
            </style>
            <div class='wrap'>
                <div class='column1'>
                    <p>asd</p>
                    <p>asd</p>
                </div>
                <div class='column2'>
                    <p>dsa</p>
                    <p>dsa</p>
                </div>
            </div>                
        `;

        this.shadow.innerHTML = template;
    }
}

window.customElements.define('app-contact', AppContact);
class AppContact extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        const template = `
            <style>
                div {
                    margin: 0;
                    padding: 0;
                    height: calc(90vh - 55px);
                    display: flex;
                    flex-dirextion: row;
                    justify-content: center;
                    align: items: center;
                }

                @media screen and (max-width: 768px) {
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
            </style>

            <div class="wraper">
                <div class="card">
                    <img src='../images/logo.png'>
                </div>
            </div>
    `;

    this.shadow.innerHTML = template;
    }
}

window.customElements.define('app-contact', AppContact);
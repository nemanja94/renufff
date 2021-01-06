class AppContact extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        const template = `
            <style>
                .wraper {
                    margin: 0;
                    padding: 0;
                    height: calc(90vh - 275px);
                    width: 100%;
                    display: flex;
                    flex-dirextion: row;
                    justify-content: center;
                }

                .contact-card {
                    display: flex;
                    justify-content: space-between;
                    height: 15vh;
                    background-color: #bc9d66;
                    border: 3px solid #161616;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }

                .contact-card .box-1 {
                    width: 15%;
                    
                }

                .contact-card .box-1 img {
                    width: 15vh;
                    justify-content: flex-start;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }

                .contact-card .box-2 {
                    width: 25vh;
                    justify-content: center;
                    align-items: center;
                    padding: 0 0 0 5vh;
                    color: #161616;
                }
            </style>

            <div class='wraper'>
                <div class='contact-card'>
                    <div class="box-1">
                        <img src='../images/logo.png'>
		            </div>
                    <div class="box-2">
                        <h3>Mihailo Antonijevic</h3>
                        <label>Adresa: <spam>Lorem ipsum</spam></label><br><br>
                        <label>Telefon: <spam>+381 69 20 72 232</spam></label>
                    </div>
                </div>
            </div>
    `;

        this.shadow.innerHTML = template;
    }
}

window.customElements.define('app-contact', AppContact);
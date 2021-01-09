class AppContact extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        const template = `
        <style>
        .container {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            flex-basis: 50vh;
            flex-wrap: wrap;
            height: 50vh;
        }

        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-basis: 50vh;
            height: 16vh;
        }

        .contact-header {
            display: flex;
            justify-content: space-between;
            flex-basis: 100%;
            height: 16vh;
            background-color: #bc9d66;
        }

        .contact-image {
            display: flex;
            justify-content: flex-start;
            height: 16vh;
        }

        .contact-image img {
            width: 16vh;
            height: 16vh;
        }

        .contact-info {
            display: flex;
            flex-basis: 27vh;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
        }

        .contact-info p,
        .contact-info h2 {
            padding: 0;
            margin: 0;
        }

        .contact-form-div {
            display: flex;
            flex-basis: 100%;
            height: 33vh;
        }

        .contact-form {
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            flex-basis: 100%;
            margin-top: 10px;
        }

        .top-div {
            display: flex;
            justify-content: space-between;
            padding: 5px;
        }

        .top-div input {
            margin-bottom: 5px;
            border-radius: 5px;
            border: none;
            padding: 10px;
        }

        .bottom-div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5px;
        }

        .bottom-div input {
            margin-bottom: 5px;
            border-radius: 5px;
            border: none;
            padding: 10px;
        }

        .bottom-div textarea {
            margin-bottom: 5px;
            border-radius: 5px;
            border: none;
            padding: 10px;
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50vh;
            padding: 5px;
        }
        .location-header  {
            display: flex;
            justify-content: center;
            align-content: center;
            padding: 5px;
            height: 5vh;
            background-color: #161616;
            color: #bc9d66;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .location-header h1 {
            margin: 0;
            align-self: center;
        }
        .location-map iframe {
            display: flex;
            width: 100%;
            height: 415px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    </style>
    <div class="container">
        <div class="left">
            <div class="contact-header">
                <div class="contact-image">
                    <img src="images/logo.png" alt="avatar">
                </div>
                <div class="contact-info">
                    <h2>Mihailo Antonijevic</h2>
                    <p><b>Adresa:</b> Lorem ipsum</p>
                    <p><b>Broj:</b> 0692072232</p>
                </div>
            </div>
            <div class="contact-form-div">
                <form class="contact-form">
                    <div class="top-div">
                        <input type="text" id="firstName" placeholder="Vase ime">
                        <input type="text" id="lastName" placeholder="Vase prezime">
                    </div>
                    <div class="bottom-div">
                        <input type="email" id="email" placeholder="Vasa email adresa">
                        <textarea id="message" cols="30" rows="10" placeholder="Vasa poruka"></textarea>
                    </div>
                </form>
            </div>
        </div>
        <div class="right">
            <div class="location-header">
                <h1>Lokacija</h1>
            </div>
            <div class="location-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.338736150277!2d20.27719211552437!3d44.46722897910178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a046ca1fa775d%3A0x14a09f53d44e0395!2z0KDQsNGG0LUg0KLQtdGA0LfQuNGb0LAsINCS0LXQu9C40LrQuCDQptGA0ZnQtdC90Lg!5e0!3m2!1ssr!2srs!4v1610200198969!5m2!1ssr!2srs"
                    frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>
    `;

        this.shadow.innerHTML = template;
    }
}

window.customElements.define('app-contact', AppContact);
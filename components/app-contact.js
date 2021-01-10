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
            justify-content: space-around;
            align-items: stretch;
            flex-wrap: wrap;
            height: 50vh;
            border-radius: 5px;
        }

        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 16vh;
            padding: 0;
            border-radius: 5px;
        }

        .contact-header {
            display: flex;
            justify-content: space-between;
            height: 16vh;
            background-color: #161616;
            border-radius: 5px;
            padding: 0;
        }

        .contact-image {
            display: flex;
            justify-content: flex-start;
            height: 15.4vh;
            border: 3px solid #bc9d66;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        .contact-image img {
            width: 15vh;
            height: 14vh;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            padding: 5px 50px 5px 30px;
            border: 3px solid #bc9d66;
            border-left: none;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        .contact-info p,
        .contact-info h2 {
            color: #bc9d66;
            padding: 0;
            margin: 0;
        }

        .contact-form-div {
            display: flex;
            flex-basis: 100%;
            height: 33vh;
            background-color: #161616;
            padding: 5px;
            margin-top: 30px;
            border: 3px solid #bc9d66;
            border-radius: 5px;
        }

        .contact-form {
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            flex-basis: 100%;
            margin-top: 10px;
            border: 
        }

        .contact-form h1 {
            align-self: center;
            padding: 0;
            margin: 0 0 10px 0;
            color: #bc9d66;
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
            width: 150px;
            background-color: #bc9d66;
            color: #161616;
        }

        .top-div input::placeholder {
            color: #161616;
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
            background-color: #bc9d66;
            color: #161616;
        }

        .bottom-div input::placeholder {
            color: #161616;
        }

        .bottom-div textarea {
            margin-bottom: 5px;
            border-radius: 5px;
            border: none;
            padding: 10px;
            background-color: #bc9d66;
            color: #161616;
        }

        .bottom-div textarea::placeholder {
            color: #161616;
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
            width: 45vh;
            padding: 5px;
            height: 5vh;
            background-color: #161616;
            color: #bc9d66;
            border: 3px solid #bc9d66;
            border-bottom: 0;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .location-header h1 {
            margin: 0;
            align-self: center;
        }
        .location-map iframe {
            display: flex;
            width: 46vh;
            height: 450px;
            border: 3px solid #161616;
            border-top: none;
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
                    <h1>Kontaktirajte nas</h2>
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
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>
    `;

        this.shadow.innerHTML = template;
    }
}

window.customElements.define('app-contact', AppContact);
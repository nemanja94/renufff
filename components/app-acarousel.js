

class Carousel extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const template = `
<style>
    section {
        padding: 0;
        margin: 35px 0 0 -35%;
        position: absolute;
        width: 70%;
        height: 45vh;
        display: flex;
        border: 5px solid #bc9d66;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    section .slide {
        position: relative;
        height: 100%;
        flex: 1;
        border-right: 2px solid #bc9d66;
        overflow: hidden;
        transition: 0.5s ease-in-out;
    }

    section .slide:last-child {
        border-right: none;
    }

    section .slide:hover {
        flex-grow: 5;
    }

    section .slide:nth-child(1) {
        background-image: url('../images/1.png');
        background-position: center center;
    }

    section .slide:nth-child(2) {
        background-image: url('../images/2.png');
        background-position: center center;
    }

    section .slide:nth-child(3) {
        background-image: url('../images/3.png');
        background-position: center center;
    }

    section .slide .content {
        position: absolute;
        bottom: 0;
        margin: 40px;
        padding: 30px;
        background: #bc9d66;
        border: 3px solid #161616;
        border-radius: 5px;
        color: white;
        visibility: hidden;
        opacity: 0;
        transition: 0s;
        transform: translateY(100px);
    }

    section .slide:hover .content {
        visibility: visible;
        opacity: 1;
        transition: 0.3s;
        transition-delay: 0.3s;
        transform: translateY(0);
    }

    @media screen and (max-width: 768px) {
        section {
            margin: -120px 0 0 -50%;
            width: 100%;
            flex-direction: column;
            height: 60vh;
            border-right: none;
            border-left: none;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-top: 4px solid #bc9d66;
            border-bottom: 4px solid #bc9d66;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
        }

        section .slide {
            border-right: none;
            border-bottom: 2px solid #bc9d66;
        }

        section .slide:last-child {
            border-bottom: none;
        }

        section .slide:hover {
            flex-grow: 6;
        }

        section .slide .content {
            padding: 0 10px;
            margin: 10px;
            text-align: justify;
        }
    }

</style>

<section>
    <div class="slide">
        <div class="content">
            <h3>Slide One</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque non dignissimos delectus quam odio
            culpa, facilis tenetur voluptatem.</p>
        </div>
    </div>
    <div class="slide">
        <div class="content">
            <h3>Slide Two</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque non dignissimos delectus quam odio
            culpa, facilis tenetur voluptatem.</p>
        </div>
    </div>
    <div class="slide">
        <div class="content">
            <h3>Slide Three</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque non dignissimos delectus quam odio
            culpa, facilis tenetur voluptatem.</p>
        </div>
    </div>
</sextion>
`;

        this.shadow.innerHTML = template;
    }
}

window.customElements.define('app-carousel', Carousel);
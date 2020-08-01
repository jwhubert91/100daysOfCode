// reusable html components made with pure JS
// tutorial here: https://www.freecodecamp.org/news/how-to-build-reusable-html-components-without-component-based-frameworks/

class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<nav class="reusable-navbar">
      	<h1>James Hubert's website</h1>
    	</nav>
			`;
  }
}

class Main extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<main class="main-body-el">
				<h2>This is the ${document.title} page</h2>
				<p class="my-lorem-text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos
					odio, eveniet quas vitae veniam quos voluptates deserunt illo aspernatur
					quia itaque odit pariatur architecto ipsam reiciendis nobis totam?
					Aliquam?
				</p>
				<reusable-links-section></reusable-links-section>
    	</main>
		`;
  }
}

class LinksSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<div class="reusable-link-div">
        <a href="./index.html">Home</a>
        <a href="./about.html">About</a>
        <a href="./contact.html">Contact</a>
      </div>
		`;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<footer class="reusable-footer">
				<p>Copyright James Hubert (c) 2020</p>
			</footer>
		`;
  }
}

customElements.define('reusable-header', Nav);
customElements.define('reusable-main', Main);
customElements.define('reusable-links-section', LinksSection);
customElements.define('reusable-footer', Footer);

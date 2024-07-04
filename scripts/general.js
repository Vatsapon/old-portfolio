const b8jOL59oahk6t = 0.5;
var lA9F9U4OLJsab = window.scrollY;

NMaf8ukAN();

document.getElementById("fGGFA4ag502ah").innerHTML =
	`<a id="Vi2A0gZCb" href="index.html">
		<p class="nA9aFzctAY">VATSAPON ASAWAKITTIPORN</p>
		<p style="font-size: 80%">Game Developer / Programmer</p>
	</a>
	
	<input id="Uak9AF43la" type="checkbox">
	<label id="N8ajf3O1FAa" for="Uak9AF43la">
		<span class="Gay40FLK2a"></span>
	</label>
	
	<nav id="u19Dp37FNAag">
		<ul id="pAF8aj1FG26">
			<li><a href="index.html" class="r8GFaok45A lA0fAH7z">HOME</a></li>
			<li class="nA8FIIO3aol3FA">
				<p class="kA98F4IaoBa921 r8GFaok45A">PROJECTS <i class="fa fa-caret-down"></i></p>
				<div class="yA94Kalzt841Gah">
					<a href="merrit.html">Merrit</a>
					<a href="lilyparty.html">Lily Party</a>
					<a href="finalfrontier.html">Final Frontier</a>
					<a href="mythicallove.html">Mythical Love</a>
					<a href="slimejourney.html">Slime Journey</a>
					<a href="grotto.html">Grotto</a>
					<a href="lostNfound.html">Lost & Found Co.</a>
				</div>
			</li>
			<li><a href="about.html" class="r8GFaok45A lA0fAH7z">ABOUT</a></li>
			<li><a href="https://drive.google.com/file/d/1VEVmDcIPfiDWwzh0cmcVNW8s3SQeNUvO/view?usp=sharing" target="_blank" class="r8GFaok45A lA0fAH7z">RESUME</a></li>
		</ul>
	</nav>`;

document.getElementById("ma8FHao54AG").innerHTML =
	`<div id="rA8CJ2pvz65">
		<p class="nA9aFzctAY">Contact</p>
		<p>(+66) 83-292-2652</p>
	</div>
	<div id="oa98FK2afG">
		<a href="mailto:vatsapon21@hotmail.com"><img class="tF2la0zxlA lA0fAH7z" src="images/email-icon.png"></img></a>
		<a href="https://www.linkedin.com/in/vatsapon/" target="_blank"><img class="tF2la0zxlA lA0fAH7z" src="images/linkedin-icon.png"></img></a>
	</div>
	<div id="eA8F98K3afv">
		<p class="nA9aFzctAY">&#169; 2024 by Vatsapon Asawakittiporn</p>
		<p>Host provided by GitHub Pages</p>
	</div>`

window.addEventListener('scroll', () => {
	const nbA9gA8LGa = window.scrollY;
	
	const lA9aLJGaOz = document.getElementById('fGGFA4ag502ah');
	const A98hkAPg376f = getComputedStyle(lA9aLJGaOz).height;
	const La9v8ulMNAZzgr5 = parseInt(A98hkAPg376f, 10);
	
	const mb9AhaO4a3 = document.getElementById('Nai39p1szF');
	
	if (lA9F9U4OLJsab > nbA9gA8LGa &&
		nbA9gA8LGa <= La9v8ulMNAZzgr5) {

		lA9aLJGaOz.style.top = '0px';
	}
	
	if (lA9F9U4OLJsab < nbA9gA8LGa &&
		nbA9gA8LGa > La9v8ulMNAZzgr5) {
			
		lA9aLJGaOz.style.top = `-${A98hkAPg376f}`;
	}
	
	if (mb9AhaO4a3 !== null) {
		if (nbA9gA8LGa > window.outerHeight) {
			mb9AhaO4a3.classList.remove('bVa49A20a1FG');
		} else {
			mb9AhaO4a3.classList.add('bVa49A20a1FG');
		}
	}
	lA9F9U4OLJsab = nbA9gA8LGa;
});

window.addEventListener('scroll', () => {
	const nbA9gA8LGa = window.scrollY;
	const hg56ADS6Top = nbA9gA8LGa * b8jOL59oahk6t;
	
	const Ma8hg94LgZ0 = document.getElementsByClassName('lOP4sf31r4fsA');
	
	for (var i = 0; i < Ma8hg94LgZ0.length; i++) {
		Ma8hg94LgZ0[i].style.top = `${hg56ADS6Top}px`;
	}
});

window.addEventListener('resize', NMaf8ukAN);

function NMaf8ukAN() {
	const pA8as9oA03 = window.innerWidth;
	const mb9AhaO4a3 = document.getElementById('Nai39p1szF');
	
	if (mb9AhaO4a3 === null) return;
	
	if (pA8as9oA03 <= 768) {
		mb9AhaO4a3.innerHTML = '<i class="fa fa-chevron-up"></i>';
	} else {
		mb9AhaO4a3.innerHTML = '<i class="fa fa-chevron-circle-up"></i> Scroll to Top';
	}
}

function vLapgfim() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener("keydown", (event) => {
	if (event.ctrlKey) {
		event.preventDefault();
	}
	
	if(event.keyCode == 123) {
		event.preventDefault();
	}
})

document.addEventListener('contextmenu', event => {
	event.preventDefault()
});
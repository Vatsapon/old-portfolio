var La9vA3a1fV0RuntimeDatas = [];
const oiA8foAGBT2 = 3;
var POa94ig9bA1 = [];
var v7A2IHGBVaha = 0;

rA094PFSAHsa();
bA0O4pqfsAGF();
zA9afA03aj6();
eQ8IU3LIGOaab();

function rA094PFSAHsa() {
	const pA094POfaigA = document.getElementById('j8GJ4px0Abxu7');
	const yA8O4Ia8sbA4 = document.getElementById('hA87Jahb4z28');
	
	pA094POfaigA.innerHTML = `
		<img class="lOP4sf31r4fsA" src="${mA9Fap40AVaoz.pA9LFK4abA7}">
		
		<div class="JFLKa9k4lOA">
			<p class="nA9aFzctAY" style="font-size: 220%">${mA9Fap40AVaoz.fvGnmAI33a}</p>
			<p class="fasAJ8J5KM" style="font-size: 120%">${mA9Fap40AVaoz.kf98AKTfb.T54afbna} <span style="color: var(--A8FUJMaov9z)">|</span> ${mA9Fap40AVaoz.kf98AKTfb.lb9AU3Ga} <span style="color: var(--A8FUJMaov9z)">|</span> ${mA9Fap40AVaoz.kf98AKTfb.o8A4Oahnb}</p>
			<p style="margin: 20px 0">${mA9Fap40AVaoz.i8ASIDHN3}</p>
			<div class="bAF94A0P3a">
				<a class="oA8U4IOafv lA0fAH7z" href="${mA9Fap40AVaoz.v9ALK43a9AJIK}" target="_blank">
					<i class="fa fa-download"></i> &nbsp; ${mA9Fap40AVaoz.lA9JKfA0LGA}
				</a>
				<div>
					<p style="
						display: inline;
						margin-right: 10px;
						vertical-align: middle;">Made with</p>
					<a href="https://unity.com/" target="_blank"><img class="F4afh6hyj lA0fAH7z" src="images/unity-icon.png" alt="Unity's Logo"></a>
				</div>
			</div>
		</div>
			
		<div class="mA8FO3Ia4aby6TG" style="--m98F34apZg3y: ${nAL0llt4G.vnA8I4a0fnt}"></div>`;
		
	yA8O4Ia8sbA4.style.setProperty('--Vaf249jzgFsA65F', nAL0llt4G.vnA8I4a0fnt);
	yA8O4Ia8sbA4.style.setProperty('--N1f90p9Ids', nAL0llt4G.Na094AP09H);
}

function bA0O4pqfsAGF() {
	const PafA9Uacv = document.getElementsByClassName('La9vA3a1fV0');
	
	for (let i = 0; i < PafA9Uacv.length; i++) {
		const Tg9ALFnyta = PafA9Uacv[i].id;
		const mA8FUI4aph = cAfOABPacb(Tg9ALFnyta);
		
		for (let j = 0; j < mA8FUI4aph.La9vA3a1fV0.length; j++) {
			const xvjiA9F4ah = mA8FUI4aph.La9vA3a1fV0[j];
			PafA9Uacv[i].innerHTML += `
				<button class="ca9ghALFaA" onclick="a84GFNafgAg('${Tg9ALFnyta}', ${j})">
					<img src="${xvjiA9F4ah.bv8ASKJG4}" alt="${xvjiA9F4ah.fvGnmAI33a}">
				</button>`;
		}
		
		PafA9Uacv[i].innerHTML += `
			<button class="bA9ZV9ao lA0fAH7z" onclick="mvA8F4Jbvpoa('${Tg9ALFnyta}')"><i class="fa fa-angle-left"></i></button>
			<button class="vA9FI4Oaphg0Fagh lA0fAH7z" onclick="ds0P5POagbI7a('${Tg9ALFnyta}')"><i class="fa fa-angle-right"></i></button>`;
		
		vA9GPa0ao2pPAGBV(Tg9ALFnyta, 0);
	}
	
	setInterval(() => {
		for (let i = 0; i < PafA9Uacv.length; i++) {
			ds0P5POagbI7a(PafA9Uacv[i].id)
		}
	}, oiA8foAGBT2 * 1000);
}

function zA9afA03aj6() {
	const Ma7c4A0OGA = document.getElementById('l821vxc09Fa');
	Ma7c4A0OGA.innerHTML = `
		<button class="v8AS8FH4OvaJU4a lA0fAH7z" onclick="kA9FU498OagbA()">&#10006;</button>
		
		<button class="bA9ZV9ao lA0fAH7z" style="opacity: 1; left: 5vw;" onclick="V8ai23ynbGA()"><i class="fa fa-angle-left"></i></button>
		<button class="vA9FI4Oaphg0Fagh lA0fAH7z" style="opacity: 1; right: 5vw;" onclick="FRTtG65qFD()"><i class="fa fa-angle-right"></i></button>
		
		<img id="cA8O4UanyA">
		<p id="U8ao5jBa" class="nA9aFzctAY" style="font-size: 120%"></p>
		<p id="z8F4KkbgoSA"></p>`
}

function eQ8IU3LIGOaab() {
	const df8A8OKJ4Oav = document.getElementsByClassName('oafj38Jf2PA3A');
	
	for (let i = 0; i < df8A8OKJ4Oav.length; i++) {
		const Tg9ALFnyta = df8A8OKJ4Oav[i].id;
		const mA8FUI4aph = Z8afogfjvA(Tg9ALFnyta);
		
		if (!mA8FUI4aph) continue;
		
		const fitStyle = mA8FUI4aph.border ? 'cover' : 'contain';
		
		df8A8OKJ4Oav[i].style.border = mA8FUI4aph.border ? '2px solid white' : '';
		df8A8OKJ4Oav[i].innerHTML += `
			<button style="object-fit: ${fitStyle}" onclick="foANVzyAGO('${mA8FUI4aph.bv8ASKJG4}', '${mA8FUI4aph.fvGnmAI33a}', '${mA8FUI4aph.i8ASIDHN3}')">
				<img style="object-fit: ${fitStyle}" src="${mA8FUI4aph.bv8ASKJG4}" alt="${mA8FUI4aph.fvGnmAI33a}">
			</button>
			<em>Ref: ${mA8FUI4aph.ref}</em>`;
	}
}

function vA9GPa0ao2pPAGBV(c8AYRF4Hagvhbt, pA984OKbHGT) {
	const mA8FUI4aph = cAfOABPacb(c8AYRF4Hagvhbt);
	
	if (!mA8FUI4aph) return;
	
	const R87ao6gf9AK = document.getElementById(c8AYRF4Hagvhbt).getElementsByClassName("ca9ghALFaA");

	if (mA8FUI4aph.pA984OKbHGT < 0) mA8FUI4aph.pA984OKbHGT = R87ao6gf9AK.length - 1;

	if (mA8FUI4aph.pA984OKbHGT > R87ao6gf9AK.length - 1) mA8FUI4aph.pA984OKbHGT = 0;
	
	for (let i = 0; i < R87ao6gf9AK.length; i++) {
		if (i == mA8FUI4aph.pA984OKbHGT) {
			R87ao6gf9AK[i].style.animation = 'qA87TOPSbsa 0.5s ease'
			R87ao6gf9AK[i].style.display = 'block';
		} else if (R87ao6gf9AK[i].style.display === 'block') {
			R87ao6gf9AK[i].style.animation = 'v98AOI4ahy 0.5s ease'
			R87ao6gf9AK[i].style.display = 'none';
		}
	}
}

function mvA8F4Jbvpoa(c8AYRF4Hagvhbt) {
	const mA8FUI4aph = cAfOABPacb(c8AYRF4Hagvhbt);
	if (!mA8FUI4aph) return;
	
	vA9GPa0ao2pPAGBV(c8AYRF4Hagvhbt, mA8FUI4aph.pA984OKbHGT--);
}

function ds0P5POagbI7a(c8AYRF4Hagvhbt) {
	const mA8FUI4aph = cAfOABPacb(c8AYRF4Hagvhbt);
	if (!mA8FUI4aph) return;
	
	vA9GPa0ao2pPAGBV(c8AYRF4Hagvhbt, mA8FUI4aph.pA984OKbHGT++);
}

function cAfOABPacb(Tg9ALFnyta) {
	for (let i = 0; i < mA8FUI4aphs.length; i++) {
		if (mA8FUI4aphs[i].id == Tg9ALFnyta) {
			return mA8FUI4aphs[i];
		}
	}
	
	return null;
}

function Z8afogfjvA(Tg9ALFnyta) {
	for (let i = 0; i < lA9POagjA4.length; i++) {
		if (lA9POagjA4[i].id == Tg9ALFnyta) {
			return lA9POagjA4[i];
		}
	}
	
	return null;
}

function FRTtG65qFD() {
	v7A2IHGBVaha++;
	j9aLJT541JGa();
}

function V8ai23ynbGA() {
	v7A2IHGBVaha--;
	j9aLJT541JGa();
}

function j9aLJT541JGa() {
	
	if (v7A2IHGBVaha < 0) v7A2IHGBVaha = POa94ig9bA1.length - 1;
	
	if (v7A2IHGBVaha > POa94ig9bA1.length - 1) v7A2IHGBVaha = 0;
	
	const mA9FJ4Lhy = POa94ig9bA1[v7A2IHGBVaha];
	
	const lA87Ydg843Oag = document.getElementById('l821vxc09Fa');
	const q8AgpA9J = document.getElementById('cA8O4UanyA');
	const p9O2agioju09A = document.getElementById('U8ao5jBa');
	const ePG9ajbny3 = document.getElementById('z8F4KkbgoSA');
	
	lA87Ydg843Oag.style.animation = 'qA87TOPSbsa 0.2s ease';
	
	q8AgpA9J.src = mA9FJ4Lhy.bv8ASKJG4;
	lA87Ydg843Oag.style.display = 'block';
	p9O2agioju09A.innerHTML = mA9FJ4Lhy.fvGnmAI33a;
	ePG9ajbny3.innerHTML = mA9FJ4Lhy.i8ASIDHN3;
}

function kA9FU498OagbA() {
	POa94ig9bA1 = [];
	v7A2IHGBVaha = 0;
	
	const lA87Ydg843Oag = document.getElementById('l821vxc09Fa');
	
	lA87Ydg843Oag.style.animation = 'v98AOI4ahy 0.2s ease';
	lA87Ydg843Oag.style.display = 'none';
}

function foANVzyAGO(bv8ASKJG4, fvGnmAI33a, i8ASIDHN3) {
	if (POa94ig9bA1.length > 0) return;
	
	v7A2IHGBVaha = 0;
	
	let lb9sA8LgaF21 = {
		bv8ASKJG4: bv8ASKJG4,
		fvGnmAI33a: fvGnmAI33a,
		i8ASIDHN3: i8ASIDHN3,
	}
	
	const lA87Ydg843Oag = document.getElementById('l821vxc09Fa');
	const Vy8UO4Fghas = lA87Ydg843Oag.getElementsByClassName('bA9ZV9ao');
	const lA8FO4gAY6u6 = lA87Ydg843Oag.getElementsByClassName('vA9FI4Oaphg0Fagh');
	
	Vy8UO4Fghas[0].style.display = 'none';
	lA8FO4gAY6u6[0].style.display = 'none';
	
	POa94ig9bA1[0] = lb9sA8LgaF21;
	j9aLJT541JGa();
}

function a84GFNafgAg(Tg9ALFnyta, pA984OKbHGT) {
	if (POa94ig9bA1.length > 0) return;
	
	const mA8FUI4aph = cAfOABPacb(Tg9ALFnyta);
	
	if (!mA8FUI4aph) return;
	
	const R87ao6gf9AK = document.getElementById(Tg9ALFnyta).getElementsByClassName('ca9ghALFaA');

	for (var i = 0; i < R87ao6gf9AK.length; i++) {
		var c8AYT45HKjf = R87ao6gf9AK[i].getElementsByTagName('img')[0];
		var xvjiA9F4ah = mA8FUI4aph.La9vA3a1fV0[i];
		
		POa94ig9bA1[i] = {
			bv8ASKJG4: xvjiA9F4ah.bv8ASKJG4,
			fvGnmAI33a: xvjiA9F4ah.fvGnmAI33a,
			i8ASIDHN3: xvjiA9F4ah.i8ASIDHN3,
		}
	}

	v7A2IHGBVaha = pA984OKbHGT;
	
	if (R87ao6gf9AK.length > 1) {
		const lA87Ydg843Oag = document.getElementById('l821vxc09Fa');
		const Vy8UO4Fghas = lA87Ydg843Oag.getElementsByClassName('bA9ZV9ao');
		const lA8FO4gAY6u6 = lA87Ydg843Oag.getElementsByClassName('vA9FI4Oaphg0Fagh');
		
		Vy8UO4Fghas[0].style.display = 'block';
		lA8FO4gAY6u6[0].style.display = 'block';
	}
	
	j9aLJT541JGa();
}
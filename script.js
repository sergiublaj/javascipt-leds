document.addEventListener("DOMContentLoaded", () => {
	const startBtn = document.getElementById("start-btn");
	startBtn.addEventListener("click", startShow);
	startBtn.addEventListener("click", handleDisable);

	const stopBtn = document.getElementById("stop-btn");
	stopBtn.addEventListener("click", stopShow);
	stopBtn.addEventListener("click", handleDisable);

	const yearPlaceholder = document.getElementById("date-span");
	yearPlaceholder.innerHTML = new Date().getFullYear();

	addButtons();
	addSSD();
});

const colors = ["red", "yellow", "blue", "green", "orange", "gray"];
let firstVar = 0;
let show;
let disabled = true;
let buttons = [];

const numbers = [
	[0, 1, 2, 3, 4, 5],
	[1, 2],
	[0, 1, 3, 4, 6],
	[0, 1, 2, 3, 6],
	[1, 2, 5, 6],
	[0, 2, 3, 5, 6],
	[0, 2, 3, 4, 5, 6],
	[0, 1, 2],
	[0, 1, 2, 3, 4, 5, 6],
	[0, 1, 2, 3, 5, 6],
];

const addButtons = () => {
	const root = document.getElementById("root");
	for (let i = 0; i < colors.length; i++) {
		const newBtn = document.createElement("button");
		newBtn.innerHTML = "[X]";
		newBtn.className = `b${i} light`;
		root.appendChild(newBtn);
	}
};

const addSSD = () => {
	const root = document.getElementById("ssd");

	const a = document.createElement("button");
	a.className = "btn btn-half";
	a.style.margin = "10px 0 -10px 0";
	a.style.height = "20px";
	root.appendChild(a);

	root.appendChild(document.createElement("br"));

	const f = document.createElement("button");
	f.style.height = "200px";
	f.style.marginRight = "305px";
	root.appendChild(f);

	const b = document.createElement("button");
	b.style.height = "200px";
	root.appendChild(b);

	root.appendChild(document.createElement("br"));

	const g = document.createElement("button");
	g.className = "btn btn-half";
	g.style.marginBottom = "-10px";
	g.style.height = "20px";
	root.appendChild(g);

	root.appendChild(document.createElement("br"));

	const e = document.createElement("button");
	e.style.height = "200px";
	e.style.marginRight = "305px";
	root.appendChild(e);

	const c = document.createElement("button");
	c.style.height = "200px";
	root.appendChild(c);

	root.appendChild(document.createElement("br"));

	const d = document.createElement("button");
	d.className = "btn btn-half";
	d.style.marginBottom = "-10px";
	d.style.height = "20px";
	root.appendChild(d);

	buttons = [a, b, c, d, e, f, g];

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = "white";
	}
};

const handleDisable = () => {
	const startBtn = document.getElementById("start-btn");
	startBtn.disabled = disabled;

	const stopBtn = document.getElementById("stop-btn");
	stopBtn.disabled = !disabled;

	disabled = !disabled;
};

const startShow = () => {
	show = setTimeout(changeColors, 1000);
};

const changeColors = () => {
	for (let i = 0; i < colors.length; i++) {
		const crtBtn = document.querySelector(`.b${i}`);
		crtBtn.style.backgroundColor = colors[(firstVar + i + 1) % colors.length];
	}

	firstVar = (firstVar + 1) % 10;

	colorLeds();

	show = setTimeout(changeColors, 1000);
};

const stopShow = () => {
	clearTimeout(show);
};

const colorLeds = () => {
	for (let i = 0; i < 7; i++) {
		if (numbers[firstVar].includes(i)) {
			buttons[i].style.backgroundColor = "red";
		} else {
			buttons[i].style.backgroundColor = "white";
		}
	}
};

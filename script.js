//your JS code here. If required.

const submitbtn = document.querySelector('#btn');
const output= document.querySelector('#output');
submitbtn.addEventListener('click', async ()=>{
	const text= document.querySelector('#text').value;
const delay= document.querySelector('#delay').value;

	const wait= ms=> new Promise(resolve =>
		setTimeout(resolve, ms));
	await wait(delay);
	output.textContent= text;
})


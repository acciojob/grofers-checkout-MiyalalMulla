const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = document.querySelectorAll(".price");
	let sum=0;
	price.forEach(cell =>{
		sum+=Number(cell.textContent);
	});
	let p = document.createElement('p');
	p.id="totalPrice";
	p.textContent = "Total Element = " + sum;
	document.body.appendChild(p);
	 p.textContent = "Total Price = " + sum;
};
getSumBtn.addEventListener("click", getSum);


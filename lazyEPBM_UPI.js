function autoEPBM(kesan){
	mi = 1
	ma = 3 
	for(i=1;i<=20;i++){
		choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
		formattedNumber = String("0" + i).slice(-2)
		target = "K"+formattedNumber+kesan+choose
		document.getElementById(target).checked = true;
	}
}

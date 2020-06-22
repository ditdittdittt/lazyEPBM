function autoEPBM(kesan){
	var dosenCount = document.getElementById('HitungDosenRealisasi').getAttribute('value');
	console.log(dosenCount)
	mi = kesan
	ma = kesan + 1
	for(i=1;i<=16;i++){
		choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
		formattedNumber = String("0" + (6+i)).slice(-2)
		target = "#JawabanMK_19"+formattedNumber+choose
		$(target).prop("checked", true)
	}
	for(i=1;i<=dosenCount;i++){
		k=71
		for(j=1;j<=14;j++){
			choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
			target = "#JawabanDosen_"+i+j+"19"+(k+j)+choose
			$(target).prop("checked", true)
		}
	}
	$("#Pernyataan").prop("checked", true)
}

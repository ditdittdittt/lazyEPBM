# lazyEPBM
males banget ga sih bos ngisi epbm? setidaknya ini bisa bantu

Based on Lu William Hanugra's autoepbm, a small js code for automatic form filling in Evaluasi Penyelenggaraan Proses Belajar Mengajar (EPBM). The Code using in this repo was Re-Newed by Me . For more information see https://github.com/williamhanugra/epbm-hack

How to use ?
------------

* Login into EPBM, https://simak.ipb.ac.id/EPBMOnline/EPBM.
* Choose course.
* Open javascript console, Chrome (ctrl+shift+j), Firefox (ctrl+shift+k)
* Copy this code 

```javascript
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
```
* and paste to console
* rate it ! (1,2,3)
* type `autoEPBM(kesan)`
* e.g `autoEPBM(3)`
* Submit and Enjoy

| Kesan         | Random-Choose                         |
| :------------:|:-------------------------------------:|
| 1             | Sangat Tidak Setuju atau Tidak Setuju |
| 2             | Tidak Setuju atau Setuju              |
| 3             | Setuju atau Sangat Setuju             |

Disclaimer
==========

Any actions and or activities related to the material contained within this repository is solely your responsibility.The misuse of the information in this repository can result in criminal charges brought against the persons in question. The authors will not be held responsible in the event any criminal charges be brought against any individuals misusing the information in this repository to break the law.

let radius = document.getElementById("radius");
 	let volume = document.getElementById("volume");
 	let calculate = document.getElementById("calculate");
 	let submit = document.getElementById("submit");
 
 	function volume_sphere(){
 		let r = parseFloat(radius.value);
 @@ -13,5 +13,5 @@ document.addEventListener("DOMContentLoaded", function(){
 			volume.value = vol.toFixed(4);
 		}
 	}
 	calculate.addEventListener("click", volume_sphere)
 	submit.addEventListener("click", volume_sphere)
 });
function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let radius = document.getElementById("radius").value;

	radius = Number(radius);

	if(isNaN(radius) || radius < 0) {
		document.getElementById("volume").value = NaN;
		return false;
	}

	let volume = (4/3) * Math.PI * Math.pow(radius, 3);

	volume = volume.toFixed(4);

	document.getElementById("volume").value = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

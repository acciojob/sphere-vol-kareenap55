function volume_sphere() {
    //Write your code here
	function volume_sphere() {
    // Get the input value
    let radiusInput = document.getElementById("radius").value;
    let volumeOutput = document.getElementById("volume");

    // Convert input to a number
    let radius = parseFloat(radiusInput);

    // Validate input (should be a non-negative number)
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to four decimal places
    volumeOutput.value = volume.toFixed(4);
}

// Attach the function to the form submission event
window.onload = function() {
    document.getElementById("MyForm").onsubmit = function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        volume_sphere();
    };
};

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

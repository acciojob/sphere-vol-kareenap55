function volume_sphere() {
    // Get the radius value from the input field
    let radius = document.getElementById("radius").value;
    let volumeField = document.getElementById("volume");
    
    // Convert the input to a number
    let r = parseFloat(radius);
    
    // Validate the input: should be a non-negative number
    if (isNaN(r) || r < 0) {
        volumeField.value = 'NaN';
        return;
    }
    
    // Calculate the volume using the formula V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    
    // Round the result to 4 decimal places
    volumeField.value = volume.toFixed(4);
}

document.getElementById("MyForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    volume_sphere();
};

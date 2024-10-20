document.getElementById('submit').addEventListener('click', function() {
    let basePrice = 100; 
    
    let education = document.getElementById("education").value;
    let educationFactor = 1;
    if (education === "Undergraduate") educationFactor = 1.5;
    else if (education === "college") educationFactor = 1.2;
    else if (education === "high_school") educationFactor = 1.05;
    else if (education === "middle_school") educationFactor = 0.9;

    let networth = document.getElementById("networth").value;
    let networthFactor = 1;
    if (networth === "upper_class") networthFactor = 2;
    else if (networth === "middle_class") networthFactor = 1.5;
    else if (networth === "lower_class") networthFactor = 1.2;

    let caste = document.getElementById("caste").value;
    let casteBonus = 0;
    if (caste === "brahmin") casteBonus += 100;
    else if (caste === "kshatriya") casteBonus += 50;
    else if (caste === "vaishya") casteBonus += 20;
    else if (caste === "shudra") casteBonus += 10;
    else if (caste === "varna") casteBonus -= 50;

    let skillsBonus = 0;
    if (document.getElementById("music").checked) skillsBonus += 10;
    if (document.getElementById("cook").checked) skillsBonus += 20;
    if (document.getElementById("easygoing").checked) skillsBonus += 15;
    if (document.getElementById("sing").checked) skillsBonus += 10;

    let age = document.querySelector('input[name="age"]:checked').value;
    let ageFactor = 1;
    if (age === "18-23") ageFactor = 1.5;
    else if (age === "24-27") ageFactor = 1.2;
    else if (age === "28+") ageFactor = 0.95;

    let finalPrice = (((((basePrice * educationFactor) * networthFactor)) + casteBonus + skillsBonus) * ageFactor);

    if (document.getElementById("parent_gossip").checked) {
        finalPrice *= 0.85;
    }
    if (document.getElementById("character_gossip").checked) {
        finalPrice *= 0.9;
    }
    if (document.getElementById("general_gossip").checked) {
        finalPrice -= 20; 
    }

    document.getElementById('finalPrice').textContent = finalPrice.toFixed(2) + '$'; 
});

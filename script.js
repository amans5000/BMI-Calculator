const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (height <= 0) {
        result.innerHTML = `Enter Valid height`;
    }
    else if (weight <= 0) {
        result.innerHTML = `Enter Valid weight`;
    }
    else {
        const BMI = ((weight / (height * height)) * 10000).toFixed(2);
        result.innerHTML = `BMI is ${BMI}`;
    }

})
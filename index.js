

function calculateGrade() {
    const nameInput = document.getElementById("name");
    const scoreInput = document.getElementById("score");
    const resultDiv = document.getElementById("result");
    const name = nameInput.value;
    const score = parseFloat(scoreInput.value);
    if (name === "") {
    alert("Please enter a name.");
    return;
    }
    if (isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a score between 0 and 100.");
    return;
    }
    // Calculate the grade
    let grade;
    if (score >= 90) {
    grade = "A+";
    } else if (score >= 80) {
    grade = "A";
    } else if (score >= 70) {
    grade = "B+";
    } else if (score >= 60) {
    grade = "B";
    } else {
    grade = "F";
    }
    // Display the result
    resultDiv.innerHTML = `<h2>${name}'s Grade</h2><p>Score: ${score}</p><p>Grade: ${grade}</p>`; // More structured output
    }
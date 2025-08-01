// Simple Grade Calculator using Conditional Statements

// Function to calculate grade
function calculateGrade(score) {
    let grade;

    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if (score >= 80 && score <= 89) {
        grade = "B";
    } else if (score >= 70 && score <= 79) {
        grade = "C";
    } else if (score >= 60 && score <= 69) {
        grade = "D";
    } else if (score >= 0 && score < 60) {
        grade = "F";
    } else {
        grade = "Invalid score. Please enter a value between 0 and 100.";
    }

    return grade;
}

// Get user input using prompt (in browser)
let userScore = parseInt(prompt("Enter your score (0-100):"));
let result = calculateGrade(userScore);

// Display result
alert("Your Grade is: " + result);

function generateMarksheet() {
    // Define an array for subject scores
    let subjects = [];

    // Collect marks for 5 subjects through prompts
    for (let i = 1; i <= 5; i++) {
        let marks = prompt(`Enter marks for Subject ${i} (out of 100):`);
        marks = parseInt(marks);

        // Validate the input to ensure it's a number between 0 and 100
        while (isNaN(marks) || marks < 0 || marks > 100) {
            marks = parseInt(prompt(`Invalid input. Please enter a valid number between 0 and 100 for Subject ${i}:`));
        }

        subjects.push(marks);  // Add valid marks to the array
    }

    // Calculate total marks and percentage
    let total = subjects.reduce((acc, curr) => acc + curr, 0);
    let percentage = (total / 500) * 100;

    // Determine the grade based on the percentage
    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Output the results to the HTML page
    for (let i = 0; i < subjects.length; i++) {
        document.getElementById(`subject${i + 1}`).textContent = `Subject ${i + 1}: ${subjects[i]}/100`;
    }
    document.getElementById('total').textContent = `Total: ${total}/500`;
    document.getElementById('percentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('grade').textContent = `Grade: ${grade}`;
}
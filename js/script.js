/* ==========================================================
   WD1-L4 | js/script.js
   External JavaScript for student_grades.html

   Instead of repeating the grade evaluation for every student,
   the names and grades are stored in arrays and evaluated
   inside a single for loop. The functions are retained.
   ========================================================== */

// ---------- Data (arrays as containers) ----------

// Array of student names
var studentNames = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];

// Array of student grades (same order/index as studentNames)
var studentGrades = [95, 88, 79, 72, 85];

// Passing grade used by the evaluation functions
var PASSING_GRADE = 75;


// ---------- Functions (retained) ----------

// Returns a remark based on the grade
function getRemarks(grade) {
    if (grade >= 90) {
        return "Excellent";
    } else if (grade >= 85) {
        return "Very Good";
    } else if (grade >= 80) {
        return "Good";
    } else if (grade >= PASSING_GRADE) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}

// Returns "Passed" or "Failed" based on the grade
function getStatus(grade) {
    if (grade >= PASSING_GRADE) {
        return "Passed";
    }
    return "Failed";
}

// Adds one row (one student) to the table body
function displayStudent(number, name, grade, remarks, status) {
    var tableBody = document.getElementById("gradeTableBody");
    var row = document.createElement("tr");

    // The status class ("passed" / "failed") is styled in css/style.css
    row.innerHTML =
        "<td>" + number + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + grade + "</td>" +
        "<td>" + remarks + "</td>" +
        "<td class='" + status.toLowerCase() + "'>" + status + "</td>";

    tableBody.appendChild(row);
}


// ---------- Main logic ----------

var total = 0;

// One loop evaluates every student, no repeated code
for (var i = 0; i < studentNames.length; i++) {
    var name = studentNames[i];
    var grade = studentGrades[i];

    // Evaluate the grade using the functions
    var remarks = getRemarks(grade);
    var status = getStatus(grade);

    // Show the result on the page
    displayStudent(i + 1, name, grade, remarks, status);

    // Also log to the console (handy for checking)
    console.log(name + ": " + grade + " - " + remarks + " (" + status + ")");

    // Add up the grades for the average
    total += grade;
}

// Compute and show the class average
var average = total / studentGrades.length;
document.getElementById("summary").textContent =
    "Class Average: " + average.toFixed(2);
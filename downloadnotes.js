
// Function to search and display results
function searchAndDisplay() {
    const searchCourse = document.getElementById('searchCourse').value;
    const searchSubject = document.getElementById('searchSubject').value;
    const searchSemester = document.getElementById('searchSemester').value;

    // Create a unique key based on search criteria
    const searchKey = `${searchCourse}_${searchSubject}_${searchSemester}`;

    // Retrieve the file data from local storage
    const fileData = localStorage.getItem(searchKey);

    if (fileData) {
        // Display the file or take any other action (e.g., open in a new window)
        document.getElementById('resultContainer').innerHTML = `
            <p>File found for Course: ${searchCourse}, Subject: ${searchSubject}, Semester: ${searchSemester}</p>
            <a href="${fileData}" target="_blank">View File</a>
        `;
    } else {
        // Display a message if no file found
        document.getElementById('resultContainer').innerHTML = `
            <p>No file found for Course: ${searchCourse}, Subject: ${searchSubject}, Semester: ${searchSemester}</p>
        `;
    }
}

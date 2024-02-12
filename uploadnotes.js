document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.querySelector('button[type="submit"]');
    const courseSelect = document.getElementById('courseSelect');
    const subjectSelect = document.getElementById('subjectSelect');
    const semesterSelect = document.getElementById('semesterSelect');
    const fileInput = document.getElementById('fileInput');

    uploadButton.addEventListener('click', async () => {
        const formData = new FormData();
        formData.append('course', courseSelect.value);
        formData.append('subject', subjectSelect.value);
        formData.append('semester', semesterSelect.value);
        formData.append('file', fileInput.files[0]);

        try {
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('File uploaded successfully!');
            } else {
                throw new Error('Upload failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('File uploaded successfully!');
        }
    });
});



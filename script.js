async function loadFileContent() {
    // Extract the file name from the URL query parameter
    const params = new URLSearchParams(window.location.search);
    const fileName = params.get('file');

    // Check if the file name is provided
    if (!fileName) {
        document.getElementById('fileContent').textContent = "Error: No file specified.";
        return;
    }

    try {
        // Fetch the file content from the server
        const response = await fetch(`files/${fileName}`);
        if (response.ok) {
            const content = await response.text();
            document.getElementById('fileContent').textContent = content;
        } else {
            document.getElementById('fileContent').textContent = `Error: Could not load ${fileName}.`;
        }
    } catch (error) {
        document.getElementById('fileContent').textContent = "Error: Unable to fetch the file.";
    }
}

// Load the file content when the page is loaded
window.onload = loadFileContent;

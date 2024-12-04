async function loadFileContent() {
    // Extract the file name from the URL query parameter
    const params = new URLSearchParams(window.location.search);
    const fileName = params.get('file');

    if (!fileName) {
        document.getElementById('fileContent').textContent = "Error: No file specified.";
        return;
    }

    console.log(`Attempting to load file: ${fileName}`); // Debugging line

    try {
        // Fetch the file content directly from the current directory
        const response = await fetch(fileName);

        if (!response.ok) {
            // Log the error and show a message
            console.error(`Failed to fetch the file: ${fileName}`);
            document.getElementById('fileContent').textContent = `Error: Could not load ${fileName}.`;
            return;
        }

        const content = await response.text();
        document.getElementById('fileContent').textContent = content;

    } catch (error) {
        // Catch and log the error
        console.error("Error fetching the file:", error);
        document.getElementById('fileContent').textContent = "Error: Unable to fetch the file.";
    }
}

// Call the function to load the content once the page is loaded
window.onload = loadFileContent;

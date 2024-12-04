async function loadFileContent() {
    // Extract the file name from the URL query parameter
    const params = new URLSearchParams(window.location.search);
    const fileName = params.get('file');

    // If no file parameter is provided, show an error
    if (!fileName) {
        document.getElementById('fileContent').textContent = "Error: No file specified.";
        return;
    }

    console.log(`Attempting to load file: ${fileName}`); // Debugging line

    try {
        // Fetch the file content from the same directory
        const response = await fetch(fileName);
        if (!response.ok) {
            // If the file isn't found, show an error
            console.error(`Failed to fetch the file: ${fileName}`);
            document.getElementById('fileContent').textContent = `Error: Could not load ${fileName}.`;
            return;
        }

        const content = await response.text();
        document.getElementById('fileContent').textContent = content;

    } catch (error) {
        // Log any fetch error and show an error message
        console.error("Error fetching the file:", error);
        document.getElementById('fileContent').textContent = "Error: Unable to fetch the file.";
    }
}

// Call the function when the page is loaded
window.onload = loadFileContent;

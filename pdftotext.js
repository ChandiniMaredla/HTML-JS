import AsposePdf from 'asposepdfnodejs';

async function extractTextFromPDF() {
  try {
    // Initialize the Aspose.PDF module
    const AsposePdfModule = await AsposePdf();

    // Specify the PDF file you want to extract text from
    const pdf_file = 'Aspose.pdf';

    // Extract text from the PDF file
    const json = AsposePdfModule.AsposePdfExtractText(pdf_file);

    // Check if there was an error during extraction
    if (json.errorCode === 0) {
      console.log("Extracted Text:");
      console.log(json.extractText);
    } else {
      console.error("Error extracting text:", json.errorText);
    }
  } catch (error) {
    console.error("Error initializing Aspose.PDF:", error);
  }
}

// Call the function to extract text from the PDF
extractTextFromPDF();

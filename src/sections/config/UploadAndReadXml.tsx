import React, { useState } from "react";

const UploadAndReadXML: React.FC = () => {
  const [xmlContent, setXmlContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content = e.target?.result as string;

        // Parse the XML content
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(content, "application/xml");

        // Check for parsing errors
        const parseError = xmlDoc.getElementsByTagName("parsererror");
        if (parseError.length > 0) {
          setError("Invalid XML file. Please upload a valid XML file.");
          setXmlContent(null);
        } else {
          setXmlContent(new XMLSerializer().serializeToString(xmlDoc));
          setError(null);
        }
      };

      reader.onerror = () => {
        setError("Failed to read the file. Please try again.");
        setXmlContent(null);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload and Read XML</h2>
      <input
        type="file"
        accept=".xml"
        onChange={handleFileUpload}
        style={{ marginBottom: "10px" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {xmlContent && (
        <div>
          <h3>XML Content:</h3>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {xmlContent}
          </pre>
        </div>
      )}
    </div>
  );
};

export default UploadAndReadXML;

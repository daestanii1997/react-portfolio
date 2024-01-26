export default function Resume() {

    const onDownloadClick = () => {
      const pdfUrl = "resume.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    return (
      <div className="center">
        <button
          className="download-button"
          onClick={onDownloadClick}
        >Download PDF</button>
        <hr></hr>
        <iframe src="resume.pdf" style={{width: '50%', height: '500px'}}></iframe>
      </div>
    );
  }
  
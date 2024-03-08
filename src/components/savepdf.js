import React from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const Savepdf = () => {
    const savePDF = () => {
        // Create a new instance of jsPDF
        const doc = new jsPDF();

        // Retrieve all keys from localStorage
        const keys = Object.keys(localStorage);

        // Iterate through each key and gather the data
        keys.forEach(key => {
            const value = localStorage.getItem(key);
            // Add key-value pair to the PDF document
            doc.text(`${key}: ${value}`, 10, doc.internal.getNumberOfPages() * 10);
        });

        // Save the PDF document
        doc.save('localStorageData.pdf');
    };

    return (
        <div>
            <h1>Save Local Storage Data as PDF</h1>
            <button onClick={savePDF}>Save PDF</button>
            <Link to="/saveit">Save PDF with Link</Link>
        </div>
    );
}

export default Savepdf;


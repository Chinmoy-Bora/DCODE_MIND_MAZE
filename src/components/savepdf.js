import React from 'react';
// import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const Savepdf = () => {
    const savePDF = () => {
        // Create a new instance of jsPDF
        const doc = new jsPDF();

        // Retrieve all keys from localStorage
        const keys = Object.keys(localStorage);
        let y=10;

        // Iterate through each key and gather the data
        keys.forEach(key => {
            const value = localStorage.getItem(key);
            // Add key-value pair to the PDF document
            doc.text(`${key}: ${value}`, 10,y);
            y+=10;
        });

        doc.save('localStorageData.pdf');


    };

    const handleSavePDFConfirmation = () => {
        // Display confirmation dialog
        const isConfirmed = window.confirm("WARNING!!!   DO YOU WANT TO END THE GAME??");
        
        // If the user confirms, call savePDF
        if (isConfirmed) {
            savePDF();
        }
    };

    return (
        <div className='savepdf'>
            {/* <h1>Save Local Storage Data as PDF</h1> */}
            <button onClick={handleSavePDFConfirmation}>Final submit</button>
            
            
        </div>
    );
}

export default Savepdf;


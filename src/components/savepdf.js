import React from 'react';
// import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const Savepdf = () => {
    const savePDF = () => {
        // Create a new instance of jsPDF
        const doc = new jsPDF();

        // Retrieve all keys from localStorage
        const keys = Object.keys(localStorage);
        let y = 10;

        // Prepare data object to store key-value pairs
        const data = {};

        // Iterate through each key and gather the data
        keys.forEach(key => {
            const value = localStorage.getItem(key);

            // Add key-value pair to the data object
            data[key] = value;

            // Add key-value pair to the PDF document
            doc.text(`${key}: ${value}`, 8, y);
            y += 8;
        });

        // Add local time
        const currentTime = new Date().toLocaleString(); // Get current local time
        // Add local time to the PDF document
        doc.text(`Local Time: ${currentTime}`, 8, y);
        y += 8;

        // Convert data object to JSON string
        // const jsonData = JSON.stringify(data);
        const teamId = localStorage.getItem('teamId');

        // Count the number of key-value pairs
        const taskSolved = (keys.length -1)/2;

        // Send data and count to API
        sendDataToAPI(teamId, taskSolved);

        doc.save('localStorageData.pdf');
    };

    const sendDataToAPI = (teamId, taskSolved) => {
        // Replace 'your-api-endpoint' with your actual API endpoint
        fetch('http://139.59.88.183:8000/api/v1/user/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ teamId, taskSolved })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send data to API');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('API Response:', responseData);
            // Handle API response if needed
        })
        .catch(error => {
            console.error('Error sending data to API:', error.message);
            // Handle error if needed
        });
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

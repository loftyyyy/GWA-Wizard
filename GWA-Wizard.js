// ==UserScript==
// @name         GWA Calculator
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Calculate GWA from the school portal table, skipping subjects without grades.
// @author       Loftyyyy
// @match        https://student.umindanao.edu.ph/student/spr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const rows = document.querySelectorAll('tbody tr');

    let totalWeightedGrade = 0;
    let totalUnits = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
            const grade = parseFloat(cells[2]?.innerText.trim());
            const units = parseFloat(cells[3]?.innerText.trim());


            if (!isNaN(grade) && grade > 0 && !isNaN(units)) {
                totalWeightedGrade += grade * units;
                totalUnits += units;
            }
        }
    });

    const gwa = totalUnits > 0 ? (totalWeightedGrade / totalUnits).toFixed(2) : 'N/A';


    const resultDiv = document.createElement('div');
    resultDiv.style.position = 'fixed';
    resultDiv.style.bottom = '10px';
    resultDiv.style.right = '10px';
    resultDiv.style.backgroundColor = '#f0f0f0';
    resultDiv.style.padding = '10px';
    resultDiv.style.border = '1px solid #ccc';
    resultDiv.style.borderRadius = '5px';
    resultDiv.style.zIndex = 1000;
    resultDiv.innerHTML = `<strong>GWA:</strong> ${gwa} <strong>UNITS:</strong> ${totalUnits} <strong>Weighted Grade:</strong> ${totalWeightedGrade}`;

    document.body.appendChild(resultDiv);
})();

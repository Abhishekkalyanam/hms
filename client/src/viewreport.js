// import React from 'react';

const diseases = ["Flu", "Common cold", "Stomach flu", "Migraine", "Sinusitis"];
const prescriptions = ["Rest", "Drink plenty of fluids", "Take medication as prescribed", "Apply heat or ice packs", "Follow up in one week"];

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomDoctorName = () => {
    const doctorNames = ["Smith", "Patel", "Nguyen", "Khan", "Garcia"];
    return `${getRandomItem(doctorNames)}(${getRandomSpecialization()})`;
};

const getRandomSpecialization = () => {
    const specializations = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology"];
    return getRandomItem(specializations);
};

const getRandomPatientName = () => {
    const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Emily"];
    const lastNames = ["Smith", "Patel", "Nguyen", "Khan", "Garcia"];
    return `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`;
};

const getRandomAppointmentDate = () => {
    const startDate = new Date(2024, 0, 1); // January 1, 2024
    const endDate = new Date(); // Today's date
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toLocaleDateString();
};

const ViewReport = () => {
    const randomReport = {
        doctorName: `Dr. ${getRandomDoctorName()}`,
        patientName: getRandomPatientName(),
        diseaseNote: getRandomItem(diseases),
        prescription: getRandomItem(prescriptions),
        appointmentDate: getRandomAppointmentDate(),
    };

    return (
        <div className='full-height'>
            <div className='report-content'>
                <h3>Patient Report</h3>
                <table className="reports-table">
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                            <th>Patient Name</th>
                            <th>Disease Note</th>
                            <th>Prescription</th>
                            <th>Appointment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{randomReport.doctorName}</td>
                            <td>{randomReport.patientName}</td>
                            <td>{randomReport.diseaseNote}</td>
                            <td>{randomReport.prescription}</td>
                            <td>{randomReport.appointmentDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewReport;

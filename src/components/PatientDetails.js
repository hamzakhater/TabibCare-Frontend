import React from "react";

export default function PatientDetails({
  selectedPatient,
  updatePatientData,
  closeDetails,
}) {
  if (!selectedPatient) return null;

  return (
    <section
      style={{
        border: "1px solid #bdc3c7",
        borderRadius: 8,
        padding: 20,
        backgroundColor: "#f8f9fa",
        marginBottom: 40,
      }}
    >
      <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: 8 }}>
        تفاصيل المريض: {selectedPatient.name}
      </h3>
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontWeight: "bold" }}>الاسم:</label>
        <input
          type="text"
          value={selectedPatient.name}
          onChange={(e) => updatePatientData("name", e.target.value)}
          style={{ width: "100%", padding: 6, fontSize: 16 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontWeight: "bold" }}>العمر:</label>
        <input
          type="number"
          value={selectedPatient.age}
          onChange={(e) => updatePatientData("age", e.target.value)}
          style={{ width: "100%", padding: 6, fontSize: 16 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontWeight: "bold" }}>الهاتف:</label>
        <input
          type="tel"
          value={selectedPatient.phone}
          onChange={(e) => updatePatientData("phone", e.target.value)}
          style={{ width: "100%", padding: 6, fontSize: 16 }}
        />
      </div>
      <button
        onClick={closeDetails}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#bdc3c7",
          border: "none",
          borderRadius: 5,
          fontWeight: "bold",
        }}
      >
        إغلاق تفاصيل المريض
      </button>
    </section>
  );
}

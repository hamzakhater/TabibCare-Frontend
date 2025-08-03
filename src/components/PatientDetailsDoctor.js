import React from "react";

export default function PatientDetailsDoctor({
  selectedPatient,
  patientsData,
  notes,
  setNotes,
  prescriptionDesc,
  setPrescriptionDesc,
  newReport,
  setNewReport,
  message,
  setMessage,
  saveNotes,
  addPrescription,
  addReport,
  sendMessage,
  messageSent,
  onClose,
}) {
  return (
    <section
      style={{
        border: "1px solid #bdc3c7",
        borderRadius: 8,
        padding: 20,
        backgroundColor: "#f8f9fa",
      }}
    >
      <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: 8 }}>
        تفاصيل المريض: {selectedPatient}
      </h3>
      <p>
        <strong>العمر:</strong> {patientsData[selectedPatient].age} سنة
      </p>
      <p>
        <strong>الهاتف:</strong> {patientsData[selectedPatient].phone}
      </p>

      <div style={{ marginTop: 20 }}>
        <label
          htmlFor="notes"
          style={{ fontWeight: "bold", display: "block", marginBottom: 6 }}
        >
          ملاحظات الطبيب:
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            fontSize: 16,
            padding: 8,
            borderRadius: 4,
            borderColor: "#ccc",
          }}
        />
        <button
          onClick={saveNotes}
          style={{
            marginTop: 10,
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#27ae60",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            fontWeight: "bold",
          }}
        >
          حفظ الملاحظات
        </button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h4>الوصفات الطبية السابقة:</h4>
        {patientsData[selectedPatient].prescriptions.length === 0 ? (
          <p>لا توجد وصفات</p>
        ) : (
          <ul>
            {patientsData[selectedPatient].prescriptions.map((p) => (
              <li key={p.id}>
                {p.date} - {p.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: 20 }}>
        <h4>إضافة وصفة طبية جديدة:</h4>
        <textarea
          placeholder="اكتب وصفة طبية هنا..."
          value={prescriptionDesc}
          onChange={(e) => setPrescriptionDesc(e.target.value)}
          rows="3"
          style={{
            width: "100%",
            fontSize: 16,
            padding: 8,
            borderRadius: 4,
            borderColor: "#ccc",
          }}
        />
        <button
          onClick={addPrescription}
          style={{
            marginTop: 10,
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#2980b9",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            fontWeight: "bold",
          }}
        >
          إضافة وصفة
        </button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h4>التقارير الطبية:</h4>
        {patientsData[selectedPatient].reports.length === 0 ? (
          <p>لا توجد تقارير</p>
        ) : (
          <ul>
            {patientsData[selectedPatient].reports.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        )}
        <textarea
          placeholder="اكتب اسم التقرير الجديد..."
          value={newReport}
          onChange={(e) => setNewReport(e.target.value)}
          rows="2"
          style={{
            width: "100%",
            fontSize: 16,
            padding: 8,
            borderRadius: 4,
            borderColor: "#ccc",
            marginTop: 10,
          }}
        />
        <button
          onClick={addReport}
          style={{
            marginTop: 10,
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#8e44ad",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            fontWeight: "bold",
          }}
        >
          إضافة تقرير
        </button>
      </div>

      <div
        style={{ marginTop: 40, borderTop: "1px solid #ccc", paddingTop: 20 }}
      >
        <h3>التواصل مع السكرتير أو الإدارة</h3>
        <textarea
          placeholder="اكتب رسالتك هنا..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            fontSize: 16,
            padding: 8,
            borderRadius: 4,
            borderColor: "#ccc",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginTop: 10,
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#e67e22",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            fontWeight: "bold",
          }}
        >
          إرسال الرسالة
        </button>
        {messageSent && (
          <p style={{ marginTop: 10, color: "#27ae60", fontWeight: "bold" }}>
            ✅ تم إرسال الرسالة بنجاح!
          </p>
        )}
      </div>

      <button
        onClick={onClose}
        style={{
          marginTop: 30,
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

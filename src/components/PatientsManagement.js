import React from "react";

export default function PatientsManagement({
  patients,
  newPatient,
  setNewPatient,
  addPatient,
  selectPatient,
  deletePatient,
}) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h3 style={{ borderBottom: "2px solid #2980b9", paddingBottom: 8 }}>
        إدارة المرضى
      </h3>

      {/* إضافة مريض جديد */}
      <div
        style={{
          marginBottom: 20,
          border: "1px solid #ccc",
          padding: 10,
          borderRadius: 5,
          backgroundColor: "#f9f9f9",
        }}
      >
        <h4>إضافة مريض جديد</h4>
        <input
          type="text"
          placeholder="اسم المريض"
          value={newPatient.name}
          onChange={(e) =>
            setNewPatient({ ...newPatient, name: e.target.value })
          }
          style={{ marginBottom: 8, width: "100%", padding: 8, fontSize: 16 }}
        />
        <input
          type="number"
          placeholder="العمر"
          value={newPatient.age}
          onChange={(e) =>
            setNewPatient({ ...newPatient, age: e.target.value })
          }
          style={{ marginBottom: 8, width: "100%", padding: 8, fontSize: 16 }}
        />
        <input
          type="tel"
          placeholder="رقم الهاتف"
          value={newPatient.phone}
          onChange={(e) =>
            setNewPatient({ ...newPatient, phone: e.target.value })
          }
          style={{ marginBottom: 8, width: "100%", padding: 8, fontSize: 16 }}
        />
        <button
          onClick={addPatient}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2980b9",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          إضافة المريض
        </button>
      </div>

      {/* قائمة المرضى */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
          fontSize: 16,
        }}
        border="1"
        cellPadding="8"
        cellSpacing="0"
      >
        <thead style={{ backgroundColor: "#ecf0f1" }}>
          <tr>
            <th>الاسم</th>
            <th>العمر</th>
            <th>الهاتف</th>
            <th>تحكم</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>
                <button
                  onClick={() => selectPatient(p.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#2980b9",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {p.name}
                </button>
              </td>
              <td>{p.age}</td>
              <td>{p.phone}</td>
              <td>
                <button
                  onClick={() => deletePatient(p.id)}
                  style={{
                    backgroundColor: "#c0392b",
                    color: "white",
                    border: "none",
                    padding: "4px 8px",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

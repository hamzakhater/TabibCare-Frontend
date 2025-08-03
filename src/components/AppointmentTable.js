import React from "react";

export default function AppointmentTable({
  appointments,
  patients,
  onSelectPatient,
  onUpdateStatus,
}) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h3 style={{ borderBottom: "2px solid #2980b9", paddingBottom: 8 }}>
        قائمة المواعيد
      </h3>
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
            <th>المريض</th>
            <th>الطبيب</th>
            <th>التاريخ والوقت</th>
            <th>الحالة</th>
            <th>تحكم</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>
                <button
                  onClick={() =>
                    onSelectPatient(
                      patients.find((p) => p.name === a.patient)?.id || null
                    )
                  }
                  style={{
                    background: "none",
                    border: "none",
                    color: "#2980b9",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {a.patient}
                </button>
              </td>
              <td>{a.doctor}</td>
              <td>{a.datetime}</td>
              <td>{a.status}</td>
              <td>
                {a.status !== "ملغي" ? (
                  <>
                    <button
                      onClick={() => onUpdateStatus(a.id, "مؤكد")}
                      style={{
                        marginRight: 8,
                        padding: "4px 8px",
                        backgroundColor: "#27ae60",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                      }}
                    >
                      تأكيد
                    </button>
                    <button
                      onClick={() => onUpdateStatus(a.id, "ملغي")}
                      style={{
                        padding: "4px 8px",
                        backgroundColor: "#c0392b",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                      }}
                    >
                      إلغاء
                    </button>
                  </>
                ) : (
                  <span style={{ color: "#c0392b" }}>ملغي</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

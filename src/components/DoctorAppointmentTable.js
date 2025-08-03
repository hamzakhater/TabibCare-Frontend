import React from "react";

export default function DoctorAppointmentTable({
  appointments,
  updateStatus,
  selectPatient,
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
                  style={{
                    background: "none",
                    border: "none",
                    color: "#2980b9",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  onClick={() => selectPatient(a.patient)}
                >
                  {a.patient}
                </button>
              </td>
              <td>{a.datetime}</td>
              <td>{a.status}</td>
              <td>
                {a.status !== "ملغي" ? (
                  <>
                    <button
                      onClick={() => updateStatus(a.id, "مؤكد")}
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
                      onClick={() => updateStatus(a.id, "ملغي")}
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

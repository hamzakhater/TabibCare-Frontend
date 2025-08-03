// import React, { useState } from "react";

// const initialAppointments = [
//   { id: 1, patient: "أحمد علي", datetime: "2025-07-20 10:00", status: "مؤكد" },
//   {
//     id: 2,
//     patient: "سارة محمود",
//     datetime: "2025-07-21 14:30",
//     status: "معلق",
//   },
//   { id: 3, patient: "خالد حسن", datetime: "2025-07-22 09:00", status: "ملغي" },
// ];

// const patientsData = {
//   "أحمد علي": {
//     age: 30,
//     phone: "0591234567",
//     notes: "يعاني من ضغط دم مرتفع",
//     prescriptions: [
//       { id: 1, date: "2025-06-15", description: "دواء ضغط" },
//       { id: 2, date: "2025-07-10", description: "فيتامينات" },
//     ],
//     reports: ["نتائج فحص الدم - 2025-06-10", "تقرير أشعة - 2025-07-01"],
//   },
//   "سارة محمود": {
//     age: 25,
//     phone: "0597654321",
//     notes: "تحسّن في حالة الربو",
//     prescriptions: [{ id: 3, date: "2025-07-01", description: "بخاخ الربو" }],
//     reports: ["تقرير تنفسي - 2025-06-20"],
//   },
//   "خالد حسن": {
//     age: 40,
//     phone: "0591122334",
//     notes: "لا يوجد ملاحظات حالياً",
//     prescriptions: [],
//     reports: [],
//   },
// };

// export default function DoctorDashboard() {
//   const [appointments, setAppointments] = useState(initialAppointments);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [notes, setNotes] = useState("");
//   const [prescriptionDesc, setPrescriptionDesc] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageSent, setMessageSent] = useState(false);
//   const [newReport, setNewReport] = useState("");

//   const selectPatient = (name) => {
//     setSelectedPatient(name);
//     setNotes(patientsData[name].notes);
//     setPrescriptionDesc("");
//     setMessageSent(false);
//     setNewReport("");
//   };

//   const saveNotes = () => {
//     patientsData[selectedPatient].notes = notes;
//     alert("✅ تم حفظ الملاحظات");
//   };

//   const addPrescription = () => {
//     if (!prescriptionDesc.trim()) {
//       alert("⚠️ يرجى كتابة وصفة صالحة");
//       return;
//     }
//     const newPrescription = {
//       id: Date.now(),
//       date: new Date().toISOString().slice(0, 10),
//       description: prescriptionDesc,
//     };
//     patientsData[selectedPatient].prescriptions.push(newPrescription);
//     setPrescriptionDesc("");
//     alert("✅ تم إضافة الوصفة الطبية");
//   };

//   const addReport = () => {
//     if (!newReport.trim()) {
//       alert("⚠️ يرجى كتابة اسم التقرير");
//       return;
//     }
//     patientsData[selectedPatient].reports.push(newReport);
//     setNewReport("");
//     alert("✅ تم إضافة التقرير الطبي");
//   };

//   const sendMessage = () => {
//     if (!message.trim()) {
//       alert("⚠️ يرجى كتابة رسالة صالحة");
//       return;
//     }
//     setMessageSent(true);
//     setMessage("");
//   };

//   const updateStatus = (id, newStatus) => {
//     setAppointments((prev) =>
//       prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: 20,
//         fontFamily: "Arial, sans-serif",
//         direction: "rtl",
//         maxWidth: 900,
//         margin: "auto",
//       }}
//     >
//       <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
//         لوحة تحكم الطبيب
//       </h1>
//       <h2 style={{ textAlign: "center", marginBottom: 30 }}>مرحبًا د. محمد</h2>

//       <section style={{ marginBottom: 40 }}>
//         <h3 style={{ borderBottom: "2px solid #2980b9", paddingBottom: 8 }}>
//           قائمة المواعيد
//         </h3>
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             textAlign: "center",
//             fontSize: 16,
//           }}
//           border="1"
//           cellPadding="8"
//           cellSpacing="0"
//         >
//           <thead style={{ backgroundColor: "#ecf0f1" }}>
//             <tr>
//               <th>المريض</th>
//               <th>التاريخ والوقت</th>
//               <th>الحالة</th>
//               <th>تحكم</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((a) => (
//               <tr key={a.id}>
//                 <td>
//                   <button
//                     style={{
//                       background: "none",
//                       border: "none",
//                       color: "#2980b9",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       fontSize: 16,
//                     }}
//                     onClick={() => selectPatient(a.patient)}
//                   >
//                     {a.patient}
//                   </button>
//                 </td>
//                 <td>{a.datetime}</td>
//                 <td>{a.status}</td>
//                 <td>
//                   {a.status !== "ملغي" ? (
//                     <>
//                       <button
//                         onClick={() => updateStatus(a.id, "مؤكد")}
//                         style={{
//                           marginRight: 8,
//                           padding: "4px 8px",
//                           backgroundColor: "#27ae60",
//                           color: "white",
//                           border: "none",
//                           borderRadius: 4,
//                           cursor: "pointer",
//                         }}
//                       >
//                         تأكيد
//                       </button>
//                       <button
//                         onClick={() => updateStatus(a.id, "ملغي")}
//                         style={{
//                           padding: "4px 8px",
//                           backgroundColor: "#c0392b",
//                           color: "white",
//                           border: "none",
//                           borderRadius: 4,
//                           cursor: "pointer",
//                         }}
//                       >
//                         إلغاء
//                       </button>
//                     </>
//                   ) : (
//                     <span style={{ color: "#c0392b" }}>ملغي</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {selectedPatient && (
//         <section
//           style={{
//             border: "1px solid #bdc3c7",
//             borderRadius: 8,
//             padding: 20,
//             backgroundColor: "#f8f9fa",
//           }}
//         >
//           <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: 8 }}>
//             تفاصيل المريض: {selectedPatient}
//           </h3>
//           <p>
//             <strong>العمر:</strong> {patientsData[selectedPatient].age} سنة
//           </p>
//           <p>
//             <strong>الهاتف:</strong> {patientsData[selectedPatient].phone}
//           </p>

//           <div style={{ marginTop: 20 }}>
//             <label
//               htmlFor="notes"
//               style={{ fontWeight: "bold", display: "block", marginBottom: 6 }}
//             >
//               ملاحظات الطبيب:
//             </label>
//             <textarea
//               id="notes"
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               rows="4"
//               style={{
//                 width: "100%",
//                 fontSize: 16,
//                 padding: 8,
//                 borderRadius: 4,
//                 borderColor: "#ccc",
//               }}
//             />
//             <button
//               onClick={saveNotes}
//               style={{
//                 marginTop: 10,
//                 padding: "10px 20px",
//                 cursor: "pointer",
//                 backgroundColor: "#27ae60",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: 5,
//                 fontWeight: "bold",
//               }}
//             >
//               حفظ الملاحظات
//             </button>
//           </div>

//           <div style={{ marginTop: 30 }}>
//             <h4>الوصفات الطبية السابقة:</h4>
//             {patientsData[selectedPatient].prescriptions.length === 0 ? (
//               <p>لا توجد وصفات</p>
//             ) : (
//               <ul>
//                 {patientsData[selectedPatient].prescriptions.map((p) => (
//                   <li key={p.id}>
//                     {p.date} - {p.description}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <div style={{ marginTop: 20 }}>
//             <h4>إضافة وصفة طبية جديدة:</h4>
//             <textarea
//               placeholder="اكتب وصفة طبية هنا..."
//               value={prescriptionDesc}
//               onChange={(e) => setPrescriptionDesc(e.target.value)}
//               rows="3"
//               style={{
//                 width: "100%",
//                 fontSize: 16,
//                 padding: 8,
//                 borderRadius: 4,
//                 borderColor: "#ccc",
//               }}
//             />
//             <button
//               onClick={addPrescription}
//               style={{
//                 marginTop: 10,
//                 padding: "10px 20px",
//                 cursor: "pointer",
//                 backgroundColor: "#2980b9",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: 5,
//                 fontWeight: "bold",
//               }}
//             >
//               إضافة وصفة
//             </button>
//           </div>

//           <div style={{ marginTop: 30 }}>
//             <h4>التقارير الطبية:</h4>
//             {patientsData[selectedPatient].reports.length === 0 ? (
//               <p>لا توجد تقارير</p>
//             ) : (
//               <ul>
//                 {patientsData[selectedPatient].reports.map((r, i) => (
//                   <li key={i}>{r}</li>
//                 ))}
//               </ul>
//             )}
//             <textarea
//               placeholder="اكتب اسم التقرير الجديد..."
//               value={newReport}
//               onChange={(e) => setNewReport(e.target.value)}
//               rows="2"
//               style={{
//                 width: "100%",
//                 fontSize: 16,
//                 padding: 8,
//                 borderRadius: 4,
//                 borderColor: "#ccc",
//                 marginTop: 10,
//               }}
//             />
//             <button
//               onClick={addReport}
//               style={{
//                 marginTop: 10,
//                 padding: "10px 20px",
//                 cursor: "pointer",
//                 backgroundColor: "#8e44ad",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: 5,
//                 fontWeight: "bold",
//               }}
//             >
//               إضافة تقرير
//             </button>
//           </div>

//           <div
//             style={{
//               marginTop: 40,
//               borderTop: "1px solid #ccc",
//               paddingTop: 20,
//             }}
//           >
//             <h3>التواصل مع السكرتير أو الإدارة</h3>
//             <textarea
//               placeholder="اكتب رسالتك هنا..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               rows="4"
//               style={{
//                 width: "100%",
//                 fontSize: 16,
//                 padding: 8,
//                 borderRadius: 4,
//                 borderColor: "#ccc",
//               }}
//             />
//             <button
//               onClick={sendMessage}
//               style={{
//                 marginTop: 10,
//                 padding: "10px 20px",
//                 cursor: "pointer",
//                 backgroundColor: "#e67e22",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: 5,
//                 fontWeight: "bold",
//               }}
//             >
//               إرسال الرسالة
//             </button>
//             {messageSent && (
//               <p
//                 style={{ marginTop: 10, color: "#27ae60", fontWeight: "bold" }}
//               >
//                 ✅ تم إرسال الرسالة بنجاح!
//               </p>
//             )}
//           </div>

//           <button
//             onClick={() => setSelectedPatient(null)}
//             style={{
//               marginTop: 30,
//               padding: "10px 20px",
//               cursor: "pointer",
//               backgroundColor: "#bdc3c7",
//               border: "none",
//               borderRadius: 5,
//               fontWeight: "bold",
//             }}
//           >
//             إغلاق تفاصيل المريض
//           </button>
//         </section>
//       )}
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import PatientDetailsDoctor from "../components/PatientDetailsDoctor";

const initialAppointments = [
  { id: 1, patient: "أحمد علي", datetime: "2025-07-20 10:00", status: "مؤكد" },
  {
    id: 2,
    patient: "سارة محمود",
    datetime: "2025-07-21 14:30",
    status: "معلق",
  },
  { id: 3, patient: "خالد حسن", datetime: "2025-07-22 09:00", status: "ملغي" },
];

const patientsData = {
  "أحمد علي": {
    age: 30,
    phone: "0591234567",
    notes: "يعاني من ضغط دم مرتفع",
    prescriptions: [
      { id: 1, date: "2025-06-15", description: "دواء ضغط" },
      { id: 2, date: "2025-07-10", description: "فيتامينات" },
    ],
    reports: ["نتائج فحص الدم - 2025-06-10", "تقرير أشعة - 2025-07-01"],
  },
  "سارة محمود": {
    age: 25,
    phone: "0597654321",
    notes: "تحسّن في حالة الربو",
    prescriptions: [{ id: 3, date: "2025-07-01", description: "بخاخ الربو" }],
    reports: ["تقرير تنفسي - 2025-06-20"],
  },
  "خالد حسن": {
    age: 40,
    phone: "0591122334",
    notes: "لا يوجد ملاحظات حالياً",
    prescriptions: [],
    reports: [],
  },
};

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [notes, setNotes] = useState("");
  const [prescriptionDesc, setPrescriptionDesc] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [newReport, setNewReport] = useState("");

  const selectPatient = (name) => {
    setSelectedPatient(name);
    setNotes(patientsData[name].notes);
    setPrescriptionDesc("");
    setMessageSent(false);
    setNewReport("");
  };

  const saveNotes = () => {
    patientsData[selectedPatient].notes = notes;
    alert("✅ تم حفظ الملاحظات");
  };

  const addPrescription = () => {
    if (!prescriptionDesc.trim()) {
      alert("⚠️ يرجى كتابة وصفة صالحة");
      return;
    }
    const newPrescription = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      description: prescriptionDesc,
    };
    patientsData[selectedPatient].prescriptions.push(newPrescription);
    setPrescriptionDesc("");
    alert("✅ تم إضافة الوصفة الطبية");
  };

  const addReport = () => {
    if (!newReport.trim()) {
      alert("⚠️ يرجى كتابة اسم التقرير");
      return;
    }
    patientsData[selectedPatient].reports.push(newReport);
    setNewReport("");
    alert("✅ تم إضافة التقرير الطبي");
  };

  const sendMessage = () => {
    if (!message.trim()) {
      alert("⚠️ يرجى كتابة رسالة صالحة");
      return;
    }
    setMessageSent(true);
    setMessage("");
  };

  const updateStatus = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial, sans-serif",
        direction: "rtl",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
        لوحة تحكم الطبيب
      </h1>
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>مرحبًا د. محمد</h2>

      {/* جدول المواعيد */}
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

      {/* تفاصيل المريض (مكون مفصول) */}
      {selectedPatient && (
        <PatientDetailsDoctor
          selectedPatient={selectedPatient}
          patientsData={patientsData}
          notes={notes}
          setNotes={setNotes}
          prescriptionDesc={prescriptionDesc}
          setPrescriptionDesc={setPrescriptionDesc}
          newReport={newReport}
          setNewReport={setNewReport}
          message={message}
          setMessage={setMessage}
          saveNotes={saveNotes}
          addPrescription={addPrescription}
          addReport={addReport}
          sendMessage={sendMessage}
          messageSent={messageSent}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}

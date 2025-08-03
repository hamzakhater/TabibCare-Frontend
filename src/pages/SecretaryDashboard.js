// import React, { useState } from "react";

// const initialAppointments = [
//   {
//     id: 1,
//     patient: "أحمد علي",
//     doctor: "د. محمد",
//     datetime: "2025-07-20 10:00",
//     status: "مؤكد",
//   },
//   {
//     id: 2,
//     patient: "سارة محمود",
//     doctor: "د. ليلى",
//     datetime: "2025-07-21 14:30",
//     status: "معلق",
//   },
//   {
//     id: 3,
//     patient: "خالد حسن",
//     doctor: "د. محمد",
//     datetime: "2025-07-22 09:00",
//     status: "ملغي",
//   },
// ];

// const initialPatients = [
//   { id: 1, name: "أحمد علي", age: 30, phone: "0591234567" },
//   { id: 2, name: "سارة محمود", age: 25, phone: "0597654321" },
//   { id: 3, name: "خالد حسن", age: 40, phone: "0591122334" },
// ];

// const prescriptionsData = {
//   1: [
//     { id: 1, date: "2025-06-15", description: "دواء ضغط" },
//     { id: 2, date: "2025-07-10", description: "فيتامينات" },
//   ],
//   2: [{ id: 3, date: "2025-07-01", description: "بخاخ الربو" }],
//   3: [],
// };

// export default function SecretaryDashboard() {
//   const [appointments, setAppointments] = useState(initialAppointments);
//   const [patients, setPatients] = useState(initialPatients);
//   const [selectedPatientId, setSelectedPatientId] = useState(null);
//   const [newPatient, setNewPatient] = useState({
//     name: "",
//     age: "",
//     phone: "",
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageSent, setMessageSent] = useState(false);

//   // فلترة المواعيد حسب البحث
//   const filteredAppointments = appointments.filter(
//     (a) =>
//       a.patient.includes(searchTerm) ||
//       a.doctor.includes(searchTerm) ||
//       a.status.includes(searchTerm)
//   );

//   // اختيار مريض للعرض والتعديل
//   const selectPatient = (id) => {
//     setSelectedPatientId(id);
//     setMessageSent(false);
//   };

//   // تحديث حالة موعد (تأكيد، إلغاء)
//   const updateAppointmentStatus = (id, newStatus) => {
//     setAppointments((prev) =>
//       prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
//     );
//   };

//   // إضافة مريض جديد
//   const addPatient = () => {
//     if (!newPatient.name || !newPatient.age || !newPatient.phone) {
//       alert("يرجى تعبئة جميع بيانات المريض الجديدة");
//       return;
//     }
//     const newId = patients.length ? patients[patients.length - 1].id + 1 : 1;
//     setPatients([...patients, { id: newId, ...newPatient }]);
//     setNewPatient({ name: "", age: "", phone: "" });
//     alert("تم إضافة المريض بنجاح");
//   };

//   // تعديل بيانات المريض المحدد
//   const updatePatientData = (field, value) => {
//     setPatients((prev) =>
//       prev.map((p) =>
//         p.id === selectedPatientId ? { ...p, [field]: value } : p
//       )
//     );
//   };

//   // حذف مريض
//   const deletePatient = (id) => {
//     if (window.confirm("هل أنت متأكد من حذف المريض؟")) {
//       setPatients((prev) => prev.filter((p) => p.id !== id));
//       if (selectedPatientId === id) setSelectedPatientId(null);
//       alert("تم حذف المريض");
//     }
//   };

//   // إرسال رسالة للطاقم الطبي أو الإدارة
//   const sendMessage = () => {
//     if (!message.trim()) {
//       alert("يرجى كتابة رسالة صالحة");
//       return;
//     }
//     setMessageSent(true);
//     setMessage("");
//   };

//   // بيانات المريض المحدد للعرض
//   const selectedPatient = patients.find((p) => p.id === selectedPatientId);

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
//         لوحة تحكم السكرتير
//       </h1>

//       {/* البحث */}
//       <div style={{ marginBottom: 20 }}>
//         <input
//           type="text"
//           placeholder="ابحث باسم المريض، الطبيب، أو الحالة..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             width: "100%",
//             padding: 10,
//             fontSize: 16,
//             borderRadius: 5,
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* جدول المواعيد */}
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
//               <th>الطبيب</th>
//               <th>التاريخ والوقت</th>
//               <th>الحالة</th>
//               <th>تحكم</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredAppointments.map((a) => (
//               <tr key={a.id}>
//                 <td>
//                   <button
//                     onClick={() =>
//                       selectPatient(
//                         patients.find((p) => p.name === a.patient)?.id || null
//                       )
//                     }
//                     style={{
//                       background: "none",
//                       border: "none",
//                       color: "#2980b9",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       fontSize: 16,
//                     }}
//                   >
//                     {a.patient}
//                   </button>
//                 </td>
//                 <td>{a.doctor}</td>
//                 <td>{a.datetime}</td>
//                 <td>{a.status}</td>
//                 <td>
//                   {a.status !== "ملغي" ? (
//                     <>
//                       <button
//                         onClick={() => updateAppointmentStatus(a.id, "مؤكد")}
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
//                         onClick={() => updateAppointmentStatus(a.id, "ملغي")}
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

//       {/* إدارة المرضى */}
//       <section style={{ marginBottom: 40 }}>
//         <h3 style={{ borderBottom: "2px solid #2980b9", paddingBottom: 8 }}>
//           إدارة المرضى
//         </h3>

//         {/* إضافة مريض جديد */}
//         <div
//           style={{
//             marginBottom: 20,
//             border: "1px solid #ccc",
//             padding: 10,
//             borderRadius: 5,
//             backgroundColor: "#f9f9f9",
//           }}
//         >
//           <h4>إضافة مريض جديد</h4>
//           <input
//             type="text"
//             placeholder="اسم المريض"
//             value={newPatient.name}
//             onChange={(e) =>
//               setNewPatient({ ...newPatient, name: e.target.value })
//             }
//             style={{ marginBottom: 8, width: "100%", padding: 8, fontSize: 16 }}
//           />
//           <input
//             type="number"
//             placeholder="العمر"
//             value={newPatient.age}
//             onChange={(e) =>
//               setNewPatient({ ...newPatient, age: e.target.value })
//             }
//             style={{ marginBottom: 8, width: "100%", padding: 8, fontSize: 16 }}
//           />
//           <input
//             type="tel"
//             placeholder="رقم الهاتف"
//             value={newPatient.phone}
//             onChange={(e) =>
//               setNewPatient({ ...newPatient, phone: e.target.value })
//             }
//             style={{ marginBottom: 8, width: "100%", padding: 8, fontSize: 16 }}
//           />
//           <button
//             onClick={addPatient}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#2980b9",
//               color: "white",
//               border: "none",
//               borderRadius: 5,
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             إضافة المريض
//           </button>
//         </div>

//         {/* قائمة المرضى */}
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
//               <th>الاسم</th>
//               <th>العمر</th>
//               <th>الهاتف</th>
//               <th>تحكم</th>
//             </tr>
//           </thead>
//           <tbody>
//             {patients.map((p) => (
//               <tr key={p.id}>
//                 <td>
//                   <button
//                     onClick={() => selectPatient(p.id)}
//                     style={{
//                       background: "none",
//                       border: "none",
//                       color: "#2980b9",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       fontSize: 16,
//                     }}
//                   >
//                     {p.name}
//                   </button>
//                 </td>
//                 <td>{p.age}</td>
//                 <td>{p.phone}</td>
//                 <td>
//                   <button
//                     onClick={() => deletePatient(p.id)}
//                     style={{
//                       backgroundColor: "#c0392b",
//                       color: "white",
//                       border: "none",
//                       padding: "4px 8px",
//                       borderRadius: 4,
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     حذف
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* تفاصيل المريض المحدد */}
//       {selectedPatient && (
//         <section
//           style={{
//             border: "1px solid #bdc3c7",
//             borderRadius: 8,
//             padding: 20,
//             backgroundColor: "#f8f9fa",
//             marginBottom: 40,
//           }}
//         >
//           <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: 8 }}>
//             تفاصيل المريض: {selectedPatient.name}
//           </h3>
//           <div style={{ marginBottom: 10 }}>
//             <label style={{ fontWeight: "bold" }}>الاسم:</label>
//             <input
//               type="text"
//               value={selectedPatient.name}
//               onChange={(e) => updatePatientData("name", e.target.value)}
//               style={{ width: "100%", padding: 6, fontSize: 16 }}
//             />
//           </div>
//           <div style={{ marginBottom: 10 }}>
//             <label style={{ fontWeight: "bold" }}>العمر:</label>
//             <input
//               type="number"
//               value={selectedPatient.age}
//               onChange={(e) => updatePatientData("age", e.target.value)}
//               style={{ width: "100%", padding: 6, fontSize: 16 }}
//             />
//           </div>
//           <div style={{ marginBottom: 10 }}>
//             <label style={{ fontWeight: "bold" }}>الهاتف:</label>
//             <input
//               type="tel"
//               value={selectedPatient.phone}
//               onChange={(e) => updatePatientData("phone", e.target.value)}
//               style={{ width: "100%", padding: 6, fontSize: 16 }}
//             />
//           </div>
//           <button
//             onClick={() => setSelectedPatientId(null)}
//             style={{
//               marginTop: 10,
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

//       {/* قسم إرسال رسالة للطاقم الطبي أو الإدارة */}
//       <section
//         style={{
//           marginTop: 40,
//           borderTop: "1px solid #ccc",
//           paddingTop: 20,
//         }}
//       >
//         <h3>التواصل مع الطبيب أو الإدارة</h3>
//         <textarea
//           placeholder="اكتب رسالتك هنا..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           rows="4"
//           style={{
//             width: "100%",
//             fontSize: 16,
//             padding: 8,
//             borderRadius: 4,
//             borderColor: "#ccc",
//           }}
//         />
//         <button
//           onClick={sendMessage}
//           style={{
//             marginTop: 10,
//             padding: "10px 20px",
//             cursor: "pointer",
//             backgroundColor: "#e67e22",
//             color: "#fff",
//             border: "none",
//             borderRadius: 5,
//             fontWeight: "bold",
//           }}
//         >
//           إرسال الرسالة
//         </button>
//         {messageSent && (
//           <p style={{ marginTop: 10, color: "#27ae60", fontWeight: "bold" }}>
//             ✅ تم إرسال الرسالة بنجاح!
//           </p>
//         )}
//       </section>
//     </div>
//   );
// }
//////////////////////////////////
import React, { useState } from "react";
import AppointmentTable from "../components/AppointmentTable";
import PatientsManagement from "../components/PatientsManagement";
import PatientDetails from "../components/PatientDetails";
import MessageSection from "../components/MessageSection";

const initialAppointments = [
  {
    id: 1,
    patient: "أحمد علي",
    doctor: "د. محمد",
    datetime: "2025-07-20 10:00",
    status: "مؤكد",
  },
  {
    id: 2,
    patient: "سارة محمود",
    doctor: "د. ليلى",
    datetime: "2025-07-21 14:30",
    status: "معلق",
  },
  {
    id: 3,
    patient: "خالد حسن",
    doctor: "د. محمد",
    datetime: "2025-07-22 09:00",
    status: "ملغي",
  },
];

const initialPatients = [
  { id: 1, name: "أحمد علي", age: 30, phone: "0591234567" },
  { id: 2, name: "سارة محمود", age: 25, phone: "0597654321" },
  { id: 3, name: "خالد حسن", age: 40, phone: "0591122334" },
];

export default function SecretaryDashboard() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [patients, setPatients] = useState(initialPatients);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    phone: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  // فلترة المواعيد حسب البحث
  const filteredAppointments = appointments.filter(
    (a) =>
      a.patient.includes(searchTerm) ||
      a.doctor.includes(searchTerm) ||
      a.status.includes(searchTerm)
  );

  // اختيار مريض للعرض والتعديل
  const selectPatient = (id) => {
    setSelectedPatientId(id);
    setMessageSent(false);
  };

  // تحديث حالة موعد (تأكيد، إلغاء)
  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  // إضافة مريض جديد
  const addPatient = () => {
    if (!newPatient.name || !newPatient.age || !newPatient.phone) {
      alert("يرجى تعبئة جميع بيانات المريض الجديدة");
      return;
    }
    const newId = patients.length ? patients[patients.length - 1].id + 1 : 1;
    setPatients([...patients, { id: newId, ...newPatient }]);
    setNewPatient({ name: "", age: "", phone: "" });
    alert("تم إضافة المريض بنجاح");
  };

  // تعديل بيانات المريض المحدد
  const updatePatientData = (field, value) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === selectedPatientId ? { ...p, [field]: value } : p
      )
    );
  };

  // حذف مريض
  const deletePatient = (id) => {
    if (window.confirm("هل أنت متأكد من حذف المريض؟")) {
      setPatients((prev) => prev.filter((p) => p.id !== id));
      if (selectedPatientId === id) setSelectedPatientId(null);
      alert("تم حذف المريض");
    }
  };

  // إرسال رسالة للطاقم الطبي أو الإدارة
  const sendMessage = () => {
    if (!message.trim()) {
      alert("يرجى كتابة رسالة صالحة");
      return;
    }
    setMessageSent(true);
    setMessage("");
  };

  const selectedPatient = patients.find((p) => p.id === selectedPatientId);

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
        لوحة تحكم السكرتير
      </h1>

      {/* البحث */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="ابحث باسم المريض، الطبيب، أو الحالة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            fontSize: 16,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* جدول المواعيد */}
      <AppointmentTable
        appointments={filteredAppointments}
        updateAppointmentStatus={updateAppointmentStatus}
        patients={patients}
        selectPatient={selectPatient}
      />

      {/* إدارة المرضى */}
      <PatientsManagement
        patients={patients}
        newPatient={newPatient}
        setNewPatient={setNewPatient}
        addPatient={addPatient}
        selectPatient={selectPatient}
        deletePatient={deletePatient}
      />

      {/* تفاصيل المريض المحدد */}
      <PatientDetails
        selectedPatient={selectedPatient}
        updatePatientData={updatePatientData}
        closeDetails={() => setSelectedPatientId(null)}
      />

      {/* إرسال رسالة */}
      <MessageSection
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        messageSent={messageSent}
      />
    </div>
  );
}

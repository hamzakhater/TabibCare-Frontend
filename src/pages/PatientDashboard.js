import React, { useState, useEffect } from "react";

const initialDoctors = ["د. محمد", "د. ليلى", "د. علي"];

const initialAppointments = [
  {
    id: 1,
    patient: "أحمد علي",
    doctor: "د. محمد",
    datetime: "2025-07-20T10:00",
    status: "مؤكد",
  },
  {
    id: 2,
    patient: "أحمد علي",
    doctor: "د. ليلى",
    datetime: "2025-07-25T14:30",
    status: "معلق",
  },
  {
    id: 3,
    patient: "سارة محمود",
    doctor: "د. محمد",
    datetime: "2025-07-22T09:00",
    status: "ملغي",
  },
];

const patientsData = {
  "أحمد علي": {
    phone: "0591234567",
    notes: "يعاني من ضغط دم مرتفع",
    prescriptions: [
      { id: 1, date: "2025-06-15", description: "دواء ضغط" },
      { id: 2, date: "2025-07-10", description: "فيتامينات" },
    ],
  },
  "سارة محمود": {
    phone: "0597654321",
    notes: "تحسّن في حالة الربو",
    prescriptions: [{ id: 3, date: "2025-07-01", description: "بخاخ الربو" }],
  },
};

export default function PatientDashboard() {
  const patientName = "أحمد علي"; // نفترض المريض مسجل دخول بهذا الاسم

  const [appointments, setAppointments] = useState(
    initialAppointments.filter((a) => a.patient === patientName)
  );

  const [phone, setPhone] = useState(patientsData[patientName]?.phone || "");
  const [notes, setNotes] = useState(patientsData[patientName]?.notes || "");
  const [prescriptions, setPrescriptions] = useState(
    patientsData[patientName]?.prescriptions || []
  );

  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  // بيانات حجز موعد جديد
  const [newDoctor, setNewDoctor] = useState(initialDoctors[0]);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  // تنبيهات - مواعيد خلال 3 أيام القادمة
  const upcomingAppointments = appointments.filter((a) => {
    const apptDate = new Date(a.datetime);
    const now = new Date();
    const diffDays = (apptDate - now) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 3 && a.status === "مؤكد";
  });

  // تعديل رقم الهاتف
  const updatePhone = (val) => {
    setPhone(val);
    patientsData[patientName].phone = val;
  };

  // إرسال رسالة
  const sendMessage = () => {
    if (!message.trim()) {
      alert("يرجى كتابة رسالة صالحة");
      return;
    }
    setMessageSent(true);
    setMessage("");
    alert("✅ تم إرسال الرسالة بنجاح");
  };

  // حجز موعد جديد مع التحقق من التداخل
  const bookAppointment = () => {
    if (!newDate || !newTime) {
      alert("يرجى اختيار التاريخ والوقت");
      return;
    }
    const newDatetime = `${newDate}T${newTime}`;
    // تحقق من وجود موعد بنفس الوقت والطبيب لنفس المريض
    const conflict = appointments.find(
      (a) => a.datetime === newDatetime && a.doctor === newDoctor
    );
    if (conflict) {
      alert("⚠️ لديك موعد محجوز في نفس الوقت مع هذا الطبيب");
      return;
    }
    const newAppt = {
      id: Date.now(),
      patient: patientName,
      doctor: newDoctor,
      datetime: newDatetime,
      status: "معلق",
    };
    setAppointments((prev) => [...prev, newAppt]);
    alert("✅ تم حجز الموعد بنجاح، في انتظار التأكيد");
    setNewDate("");
    setNewTime("");
  };

  // إلغاء موعد
  const cancelAppointment = (id) => {
    if (!window.confirm("هل أنت متأكد من إلغاء هذا الموعد؟")) return;
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "ملغي" } : a))
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
        لوحة تحكم المريض
      </h1>
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>
        مرحبًا {patientName}
      </h2>

      {/* بيانات شخصية */}
      <section
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 20,
          marginBottom: 40,
          backgroundColor: "#f9f9f9",
        }}
      >
        <h3>بياناتي الشخصية</h3>
        <label style={{ fontWeight: "bold" }}>رقم الهاتف:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => updatePhone(e.target.value)}
          style={{ width: "100%", padding: 8, fontSize: 16, marginTop: 6 }}
        />
      </section>

      {/* المواعيد */}
      <section style={{ marginBottom: 40 }}>
        <h3>مواعيدي</h3>

        {/* تنبيهات المواعيد */}
        {upcomingAppointments.length > 0 && (
          <div
            style={{
              marginBottom: 20,
              padding: 10,
              border: "1px solid #f39c12",
              backgroundColor: "#fdf5e6",
              borderRadius: 5,
              color: "#d35400",
            }}
          >
            <strong>تنبيه: لديك مواعيد قادمة خلال 3 أيام</strong>
            <ul>
              {upcomingAppointments.map((a) => (
                <li key={a.id}>
                  مع {a.doctor} في{" "}
                  {new Date(a.datetime).toLocaleString("ar-EG", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </li>
              ))}
            </ul>
          </div>
        )}

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
              <th>الطبيب</th>
              <th>التاريخ والوقت</th>
              <th>الحالة</th>
              <th>تحكم</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr
                key={a.id}
                style={{ color: a.status === "ملغي" ? "#c0392b" : "inherit" }}
              >
                <td>{a.doctor}</td>
                <td>
                  {new Date(a.datetime).toLocaleString("ar-EG", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>
                <td>{a.status}</td>
                <td>
                  {a.status !== "ملغي" && (
                    <button
                      onClick={() => cancelAppointment(a.id)}
                      style={{
                        padding: "4px 8px",
                        backgroundColor: "#c0392b",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      إلغاء الموعد
                    </button>
                  )}
                  {a.status === "ملغي" && <span>ملغي</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* حجز موعد جديد */}
        <div
          style={{
            marginTop: 30,
            borderTop: "1px solid #ccc",
            paddingTop: 20,
          }}
        >
          <h4>حجز موعد جديد</h4>
          <label>اختيار الطبيب:</label>
          <select
            value={newDoctor}
            onChange={(e) => setNewDoctor(e.target.value)}
            style={{
              width: "100%",
              padding: 8,
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            {initialDoctors.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <label>التاريخ:</label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            style={{
              width: "100%",
              padding: 8,
              fontSize: 16,
              marginBottom: 10,
            }}
          />
          <label>الوقت:</label>
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            style={{
              width: "100%",
              padding: 8,
              fontSize: 16,
              marginBottom: 10,
            }}
          />
          <button
            onClick={bookAppointment}
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
            حجز الموعد
          </button>
        </div>
      </section>

      {/* تفاصيل طبية */}
      <section
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 20,
          backgroundColor: "#f9f9f9",
          marginBottom: 40,
        }}
      >
        <h3>تفاصيل طبية</h3>
        <p>
          <strong>ملاحظات الطبيب:</strong> {notes || "لا توجد ملاحظات"}
        </p>
        <h4>الوصفات الطبية:</h4>
        {prescriptions.length === 0 ? (
          <p>لا توجد وصفات</p>
        ) : (
          <ul>
            {prescriptions.map((p) => (
              <li key={p.id}>
                {p.date} - {p.description}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* إرسال رسالة */}
      <section
        style={{
          marginTop: 20,
          borderTop: "1px solid #ccc",
          paddingTop: 20,
        }}
      >
        <h3>التواصل مع الطبيب أو السكرتير</h3>
        <textarea
          placeholder="اكتب رسالتك هنا..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setMessageSent(false);
          }}
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
      </section>
    </div>
  );
}

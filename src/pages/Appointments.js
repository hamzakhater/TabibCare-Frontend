import React from "react";

const users = [
  {
    id: 1,
    name: "د. محمد",
    role: "طبيب",
    email: "mohamed@example.com",
    status: "مفعل",
  },
  {
    id: 2,
    name: "سامي السكرتير",
    role: "سكرتير",
    email: "sami@example.com",
    status: "مفعل",
  },
  {
    id: 3,
    name: "أحمد المريض",
    role: "مريض",
    email: "ahmed@example.com",
    status: "مفعل",
  },
];

const appointments = [
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
];

const prescriptions = [
  {
    id: 1,
    patient: "أحمد علي",
    doctor: "د. محمد",
    date: "2025-07-20",
    status: "تم الإرسال",
  },
];

const pharmacies = [
  { id: 1, name: "صيدلية المدينة", address: "شارع فلسطين، غزة" },
  { id: 2, name: "صيدلية الشفاء", address: "شارع الجامعة، رام الله" },
];

export default function AdminDashboard() {
  return (
    <div
      style={{ padding: 20, fontFamily: "Arial, sans-serif", direction: "rtl" }}
    >
      <h1>لوحة تحكم الأدمن</h1>

      <div style={{ display: "flex", gap: 20, marginBottom: 30 }}>
        <div
          style={{
            border: "1px solid #ccc",
            padding: 15,
            borderRadius: 8,
            flex: 1,
            textAlign: "center",
          }}
        >
          <h3>عدد المستخدمين</h3>
          <p style={{ fontSize: 24 }}>{users.length}</p>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: 15,
            borderRadius: 8,
            flex: 1,
            textAlign: "center",
          }}
        >
          <h3>عدد المواعيد</h3>
          <p style={{ fontSize: 24 }}>{appointments.length}</p>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: 15,
            borderRadius: 8,
            flex: 1,
            textAlign: "center",
          }}
        >
          <h3>عدد الوصفات</h3>
          <p style={{ fontSize: 24 }}>{prescriptions.length}</p>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: 15,
            borderRadius: 8,
            flex: 1,
            textAlign: "center",
          }}
        >
          <h3>عدد الصيدليات</h3>
          <p style={{ fontSize: 24 }}>{pharmacies.length}</p>
        </div>
      </div>

      {/* إدارة المستخدمين */}
      <section style={{ marginBottom: 40 }}>
        <h2>إدارة المستخدمين</h2>
        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          border="1"
          cellPadding="8"
          cellSpacing="0"
        >
          <thead style={{ backgroundColor: "#eee" }}>
            <tr>
              <th>الاسم</th>
              <th>الدور</th>
              <th>البريد الإلكتروني</th>
              <th>الحالة</th>
              <th>تحكم</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.role}</td>
                <td>{u.email}</td>
                <td>{u.status}</td>
                <td>
                  {/* تحكم: أزرار للتعديل أو الحذف */}
                  <button style={{ marginLeft: 5 }}>تعديل</button>
                  <button style={{ marginLeft: 5 }}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* إدارة المواعيد */}
      <section style={{ marginBottom: 40 }}>
        <h2>إدارة المواعيد</h2>
        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          border="1"
          cellPadding="8"
          cellSpacing="0"
        >
          <thead style={{ backgroundColor: "#eee" }}>
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
                <td>{a.patient}</td>
                <td>{a.doctor}</td>
                <td>{a.datetime}</td>
                <td>{a.status}</td>
                <td>
                  <button style={{ marginLeft: 5 }}>تعديل</button>
                  <button style={{ marginLeft: 5 }}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* إدارة الوصفات الطبية */}
      <section style={{ marginBottom: 40 }}>
        <h2>إدارة الوصفات الطبية</h2>
        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          border="1"
          cellPadding="8"
          cellSpacing="0"
        >
          <thead style={{ backgroundColor: "#eee" }}>
            <tr>
              <th>المريض</th>
              <th>الطبيب</th>
              <th>التاريخ</th>
              <th>الحالة</th>
              <th>تحكم</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((p) => (
              <tr key={p.id}>
                <td>{p.patient}</td>
                <td>{p.doctor}</td>
                <td>{p.date}</td>
                <td>{p.status}</td>
                <td>
                  <button style={{ marginLeft: 5 }}>تعديل</button>
                  <button style={{ marginLeft: 5 }}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* إدارة الصيدليات المتعاونة */}
      <section>
        <h2>إدارة الصيدليات المتعاونة</h2>
        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          border="1"
          cellPadding="8"
          cellSpacing="0"
        >
          <thead style={{ backgroundColor: "#eee" }}>
            <tr>
              <th>اسم الصيدلية</th>
              <th>العنوان</th>
              <th>تحكم</th>
            </tr>
          </thead>
          <tbody>
            {pharmacies.map((ph) => (
              <tr key={ph.id}>
                <td>{ph.name}</td>
                <td>{ph.address}</td>
                <td>
                  <button style={{ marginLeft: 5 }}>تعديل</button>
                  <button style={{ marginLeft: 5 }}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

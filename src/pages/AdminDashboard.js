import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminDashboard() {
  // بيانات المستخدمين
  const [users, setUsers] = useState([
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
  ]);

  // بيانات المواعيد
  const [appointments, setAppointments] = useState([
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
  ]);

  // بيانات الوصفات الطبية
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      patient: "أحمد علي",
      doctor: "د. محمد",
      date: "2025-07-20",
      status: "تم الإرسال",
    },
  ]);

  // بيانات الصيدليات
  const [pharmacies, setPharmacies] = useState([
    { id: 1, name: "صيدلية المدينة", address: "شارع فلسطين، غزة" },
    { id: 2, name: "صيدلية الشفاء", address: "شارع الجامعة، رام الله" },
  ]);

  // مودال لكل قسم
  const [modalInfo, setModalInfo] = useState({
    show: false,
    section: "", // users | appointments | prescriptions | pharmacies
    isEdit: false,
    data: {},
  });

  // فتح المودال
  const openModal = (section, isEdit = false, data = {}) => {
    setModalInfo({ show: true, section, isEdit, data });
  };

  // غلق المودال
  const closeModal = () => {
    setModalInfo({ show: false, section: "", isEdit: false, data: {} });
  };

  // حذف عنصر حسب القسم
  const handleDelete = (section, id) => {
    if (window.confirm("هل أنت متأكد من الحذف؟")) {
      if (section === "users") setUsers(users.filter((item) => item.id !== id));
      else if (section === "appointments")
        setAppointments(appointments.filter((item) => item.id !== id));
      else if (section === "prescriptions")
        setPrescriptions(prescriptions.filter((item) => item.id !== id));
      else if (section === "pharmacies")
        setPharmacies(pharmacies.filter((item) => item.id !== id));
    }
  };

  // تحديث البيانات المدخلة في المودال
  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModalInfo((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  // حفظ أو تعديل العنصر بناءً على القسم
  const handleModalSubmit = (e) => {
    e.preventDefault();
    const section = modalInfo.section;
    const data = modalInfo.data;

    if (section === "users") {
      if (!data.name || !data.email) {
        alert("يرجى تعبئة الاسم والبريد الإلكتروني");
        return;
      }
      if (modalInfo.isEdit) {
        setUsers(users.map((u) => (u.id === data.id ? data : u)));
      } else {
        setUsers([...users, { ...data, id: Date.now() }]);
      }
    } else if (section === "appointments") {
      if (!data.patient || !data.doctor || !data.datetime) {
        alert("يرجى تعبئة جميع الحقول");
        return;
      }
      if (modalInfo.isEdit) {
        setAppointments(appointments.map((a) => (a.id === data.id ? data : a)));
      } else {
        setAppointments([...appointments, { ...data, id: Date.now() }]);
      }
    } else if (section === "prescriptions") {
      if (!data.patient || !data.doctor || !data.date) {
        alert("يرجى تعبئة جميع الحقول");
        return;
      }
      if (modalInfo.isEdit) {
        setPrescriptions(
          prescriptions.map((p) => (p.id === data.id ? data : p))
        );
      } else {
        setPrescriptions([...prescriptions, { ...data, id: Date.now() }]);
      }
    } else if (section === "pharmacies") {
      if (!data.name || !data.address) {
        alert("يرجى تعبئة جميع الحقول");
        return;
      }
      if (modalInfo.isEdit) {
        setPharmacies(pharmacies.map((ph) => (ph.id === data.id ? data : ph)));
      } else {
        setPharmacies([...pharmacies, { ...data, id: Date.now() }]);
      }
    }

    closeModal();
  };

  // النموذج الخاص بالمودال حسب القسم
  const renderModalForm = () => {
    const data = modalInfo.data;

    switch (modalInfo.section) {
      case "users":
        return (
          <>
            <div className="mb-3">
              <label>الاسم</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={data.name || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>الدور</label>
              <select
                name="role"
                className="form-select"
                value={data.role || "مريض"}
                onChange={handleModalChange}
              >
                <option value="طبيب">طبيب</option>
                <option value="سكرتير">سكرتير</option>
                <option value="مريض">مريض</option>
                <option value="مدير">مدير</option>
              </select>
            </div>
            <div className="mb-3">
              <label>البريد الإلكتروني</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>الحالة</label>
              <select
                name="status"
                className="form-select"
                value={data.status || "مفعل"}
                onChange={handleModalChange}
              >
                <option value="مفعل">مفعل</option>
                <option value="غير مفعل">غير مفعل</option>
              </select>
            </div>
          </>
        );

      case "appointments":
        return (
          <>
            <div className="mb-3">
              <label>اسم المريض</label>
              <input
                type="text"
                className="form-control"
                name="patient"
                value={data.patient || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>اسم الطبيب</label>
              <input
                type="text"
                className="form-control"
                name="doctor"
                value={data.doctor || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>التاريخ والوقت</label>
              <input
                type="datetime-local"
                className="form-control"
                name="datetime"
                value={data.datetime || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>الحالة</label>
              <select
                name="status"
                className="form-select"
                value={data.status || "مؤكد"}
                onChange={handleModalChange}
              >
                <option value="مؤكد">مؤكد</option>
                <option value="معلق">معلق</option>
                <option value="ملغي">ملغي</option>
              </select>
            </div>
          </>
        );

      case "prescriptions":
        return (
          <>
            <div className="mb-3">
              <label>اسم المريض</label>
              <input
                type="text"
                className="form-control"
                name="patient"
                value={data.patient || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>اسم الطبيب</label>
              <input
                type="text"
                className="form-control"
                name="doctor"
                value={data.doctor || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>التاريخ</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={data.date || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>الحالة</label>
              <select
                name="status"
                className="form-select"
                value={data.status || "تم الإرسال"}
                onChange={handleModalChange}
              >
                <option value="تم الإرسال">تم الإرسال</option>
                <option value="معلق">معلق</option>
                <option value="ملغي">ملغي</option>
              </select>
            </div>
          </>
        );

      case "pharmacies":
        return (
          <>
            <div className="mb-3">
              <label>اسم الصيدلية</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={data.name || ""}
                onChange={handleModalChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>العنوان</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={data.address || ""}
                onChange={handleModalChange}
                required
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  // JSX عرض الجدول مع أزرار CRUD حسب القسم
  const renderTable = (section) => {
    let items = [];
    let columns = [];
    let headers = [];
    switch (section) {
      case "users":
        items = users;
        headers = ["الاسم", "الدور", "البريد الإلكتروني", "الحالة", "تحكم"];
        columns = (item) => (
          <>
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
            <td>{item.status}</td>
            <td>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => openModal("users", true, item)}
              >
                تعديل
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete("users", item.id)}
              >
                حذف
              </button>
            </td>
          </>
        );
        break;

      case "appointments":
        items = appointments;
        headers = ["المريض", "الطبيب", "التاريخ والوقت", "الحالة", "تحكم"];
        columns = (item) => (
          <>
            <td>{item.patient}</td>
            <td>{item.doctor}</td>
            <td>{item.datetime}</td>
            <td>{item.status}</td>
            <td>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => openModal("appointments", true, item)}
              >
                تعديل
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete("appointments", item.id)}
              >
                حذف
              </button>
            </td>
          </>
        );
        break;

      case "prescriptions":
        items = prescriptions;
        headers = ["المريض", "الطبيب", "التاريخ", "الحالة", "تحكم"];
        columns = (item) => (
          <>
            <td>{item.patient}</td>
            <td>{item.doctor}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
            <td>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => openModal("prescriptions", true, item)}
              >
                تعديل
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete("prescriptions", item.id)}
              >
                حذف
              </button>
            </td>
          </>
        );
        break;

      case "pharmacies":
        items = pharmacies;
        headers = ["اسم الصيدلية", "العنوان", "تحكم"];
        columns = (item) => (
          <>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => openModal("pharmacies", true, item)}
              >
                تعديل
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete("pharmacies", item.id)}
              >
                حذف
              </button>
            </td>
          </>
        );
        break;

      default:
        return null;
    }

    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>
            {section === "users" && "إدارة المستخدمين"}
            {section === "appointments" && "إدارة المواعيد"}
            {section === "prescriptions" && "إدارة الوصفات الطبية"}
            {section === "pharmacies" && "إدارة الصيدليات المتعاونة"}
          </h3>
          <button
            className="btn btn-primary"
            onClick={() => openModal(section, false, {})}
          >
            ➕ إضافة جديد
          </button>
        </div>
        <div className="table-responsive shadow-sm rounded-3 mb-5">
          <table className="table table-hover align-middle mb-0 bg-white text-center">
            <thead className="table-light">
              <tr>
                {headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item) => <tr key={item.id}>{columns(item)}</tr>)
              ) : (
                <tr>
                  <td colSpan={headers.length} className="text-muted">
                    لا توجد بيانات
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">لوحة تحكم الأدمن</h1>

      {/* الإحصائيات */}
      <div className="row mb-5 text-center">
        <div className="col-md-3 mb-3">
          <div className="p-3 border rounded bg-light">
            <h5>عدد المستخدمين</h5>
            <p className="display-6">{users.length}</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 border rounded bg-light">
            <h5>عدد المواعيد</h5>
            <p className="display-6">{appointments.length}</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 border rounded bg-light">
            <h5>عدد الوصفات</h5>
            <p className="display-6">{prescriptions.length}</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 border rounded bg-light">
            <h5>عدد الصيدليات</h5>
            <p className="display-6">{pharmacies.length}</p>
          </div>
        </div>
      </div>

      {/* عرض جداول الإدارة كاملة */}
      {renderTable("users")}
      {renderTable("appointments")}
      {renderTable("prescriptions")}
      {renderTable("pharmacies")}

      {/* مودال الإضافة والتعديل */}
      {modalInfo.show && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={handleModalSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalInfo.isEdit ? "تعديل البيانات" : "إضافة جديد"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-start">{renderModalForm()}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  إلغاء
                </button>
                <button type="submit" className="btn btn-primary">
                  {modalInfo.isEdit ? "حفظ التعديل" : "إضافة"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;

import React, { useState } from "react";

export default function LandingPage() {
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });
  const [formMessage, setFormMessage] = useState("");

  const doctorsList = ["د. محمد", "د. ليلى", "د. أحمد", "د. ريم"];

  const faqs = [
    {
      question: "كيف يمكنني حجز موعد؟",
      answer:
        "يمكنك حجز موعد من خلال نموذج حجز المواعيد في قسم 'حجز موعد'، فقط اختر الطبيب، التاريخ، والوقت ثم أرسل الطلب.",
    },
    {
      question: "هل العيادة تقدم استشارات عبر الإنترنت؟",
      answer:
        "نعم، نوفر خدمات الاستشارة الطبية عبر الإنترنت للمرضى المسجلين في العيادة.",
    },
    {
      question: "كيف أتابع وصفيتي الطبية؟",
      answer:
        "يمكنك الدخول إلى حسابك ومتابعة جميع الوصفات الطبية والتقارير بسهولة من لوحة التحكم.",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "سلمى أحمد",
      comment:
        "خدمة رائعة وطاقم طبي محترف للغاية. أنصح الجميع بعيادة الطبيب كير.",
    },
    {
      id: 2,
      name: "محمد علي",
      comment: "سهولة في حجز المواعيد ومتابعة العلاج بشكل دقيق.",
    },
    {
      id: 3,
      name: "فاطمة حسن",
      comment: "بيئة مريحة وأطباء مهتمون بالتفاصيل الصحية للمريض.",
    },
  ];

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    const { name, phone, doctor, date, time } = appointmentForm;
    if (!name || !phone || !doctor || !date || !time) {
      setFormMessage("يرجى ملء جميع الحقول الأساسية.");
      return;
    }
    setFormMessage("تم إرسال طلب الحجز بنجاح، سنعاود الاتصال بك قريباً.");
    setAppointmentForm({
      name: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({ ...prev, [name]: value }));
    setFormMessage("");
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        direction: "rtl",
        color: "#34495e",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        paddingBottom: 40,
      }}
    >
      {/* شريط التنقل */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "#2c3e50",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ fontWeight: "900", fontSize: 28, letterSpacing: 2 }}>
          عيادة الطبيب كير
        </div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: 30,
            margin: 0,
            padding: 0,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {[
            { id: "home", label: "الرئيسية" },
            { id: "about", label: "من نحن" },
            { id: "services", label: "خدماتنا" },
            { id: "appointment", label: "حجز موعد" },
            { id: "reviews", label: "تقييمات المرضى" },
            { id: "faq", label: "الأسئلة الشائعة" },
            { id: "contact", label: "تواصل معنا" },
          ].map((tab) => (
            <li key={tab.id}>
              <a
                href={`#${tab.id}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1abc9c")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* الرئيسية */}
      <header
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(44,62,80,0.85), rgba(44,62,80,0.85)), url('https://images.unsplash.com/photo-1588776814546-8f62e9c0e7e0?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textShadow: "3px 3px 8px rgba(0,0,0,0.9)",
          fontSize: 44,
          fontWeight: "900",
          letterSpacing: 2,
          padding: "0 20px",
          textAlign: "center",
          borderRadius: 0,
          marginBottom: 40,
        }}
      >
        مرحبًا بكم في عيادة الطبيب كير
        <br />
        وجهتك الأمثل للرعاية الصحية المتميزة والخدمات الطبية المتكاملة
      </header>

      {/* من نحن */}
      <section
        id="about"
        style={{
          lineHeight: 1.8,
          fontSize: 20,
          padding: 30,
          color: "#34495e",
          backgroundColor: "white",
          borderRadius: 12,
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          marginBottom: 40,
          maxWidth: 900,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2
          style={{
            fontSize: 34,
            marginBottom: 20,
            color: "#2980b9",
            borderBottom: "4px solid #1abc9c",
            display: "inline-block",
            paddingBottom: 8,
            fontWeight: "900",
          }}
        >
          من نحن
        </h2>
        <p>
          تأسست عيادة الطبيب كير بهدف تقديم رعاية صحية شاملة وعالية الجودة في
          بيئة حديثة وآمنة. نفخر بتوفير أحدث الأجهزة الطبية وأفضل الكوادر الطبية
          المتخصصة التي تلتزم بتقديم العلاج الأمثل لكل مريض، مع التركيز على
          التواصل والاهتمام الشخصي لضمان رضا المرضى وتحسين صحتهم على المدى
          الطويل. نحرص على دمج أحدث التقنيات الرقمية لتسهيل حجز المواعيد، متابعة
          الوصفات الطبية، وتقديم تقارير دقيقة تدعم القرارات الطبية.
        </p>
      </section>

      {/* خدماتنا */}
      <section
        id="services"
        style={{
          padding: 30,
          color: "#34495e",
          backgroundColor: "white",
          borderRadius: 12,
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          marginBottom: 40,
          maxWidth: 900,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2
          style={{
            fontSize: 34,
            marginBottom: 30,
            color: "#2980b9",
            borderBottom: "4px solid #1abc9c",
            display: "inline-block",
            paddingBottom: 8,
            fontWeight: "900",
          }}
        >
          خدماتنا
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 30,
            fontSize: 18,
            color: "#34495e",
          }}
        >
          {[
            {
              title: "إدارة المواعيد",
              description:
                "نوفر لك نظاماً سهلاً وفعالاً لحجز المواعيد الطبية عبر الإنترنت، مع إمكانية متابعة جدولك وتنظيم أوقاتك بطريقة مريحة وميسرة، لضمان حصولك على الرعاية في الوقت المناسب.",
            },
            {
              title: "الوصفات الطبية",
              description:
                "تمكنك عيادتنا من تتبع وصرف الوصفات الطبية بكل سهولة وأمان، مع حفظ سجل كامل لتاريخ الأدوية الخاصة بك، مما يسهل متابعة العلاج وتحسين النتائج الصحية.",
            },
            {
              title: "الطاقم الطبي",
              description:
                "نضم فريقاً متخصصاً من الأطباء والممرضين والسكرتارية المدربة على أعلى مستوى، مع نظام تواصل داخلي فعّال يضمن سرعة التنسيق وجودة الرعاية المقدمة.",
            },
            {
              title: "تقارير وإحصائيات",
              description:
                "نقدم تحليلات دقيقة وإحصائيات متقدمة عن بيانات المرضى والمواعيد، مما يساعد الطاقم الطبي والإدارة على اتخاذ قرارات مدروسة لتحسين جودة الخدمات الطبية.",
            },
            {
              title: "الاستشارات الطبية عن بعد",
              description:
                "خدمات الاستشارات الطبية عبر الإنترنت تتيح لك التواصل مع الطبيب من أي مكان، دون الحاجة لزيارة العيادة بشكل مباشر.",
            },
            {
              title: "نظام إشعارات وتذكير المواعيد",
              description:
                "نظام يرسل تذكيرات عبر الرسائل النصية والبريد الإلكتروني لضمان عدم تفويت أي موعد مهم.",
            },
            {
              title: "دعم متعدد اللغات",
              description:
                "يمكنك تصفح الموقع واستخدام خدمات العيادة بعدة لغات حسب رغبتك لتسهيل التواصل.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ecf0f1",
                borderRadius: 12,
                padding: 20,
                boxShadow: "0 4px 10px rgba(0,0,0,0.07)",
                fontWeight: "600",
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h3 style={{ marginBottom: 10, color: "#16a085" }}>
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* تقييمات المرضى */}
      <section
        id="reviews"
        style={{
          padding: 30,
          color: "#34495e",
          maxWidth: 700,
          margin: "0 auto 40px auto",
          backgroundColor: "white",
          borderRadius: 12,
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: 34,
            marginBottom: 30,
            color: "#2980b9",
            borderBottom: "4px solid #1abc9c",
            display: "inline-block",
            paddingBottom: 8,
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          تقييمات المرضى
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {reviews.map((rev) => (
            <div
              key={rev.id}
              style={{
                backgroundColor: "#ecf0f1",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 4px 10px rgba(0,0,0,0.07)",
              }}
            >
              <p style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}>
                {rev.name}
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>{rev.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section
        id="faq"
        style={{
          padding: 30,
          maxWidth: 900,
          margin: "0 auto 40px auto",
          backgroundColor: "white",
          borderRadius: 12,
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          color: "#34495e",
          fontSize: 18,
          lineHeight: 1.6,
        }}
      >
        <h2
          style={{
            fontSize: 34,
            marginBottom: 30,
            color: "#2980b9",
            borderBottom: "4px solid #1abc9c",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          الأسئلة الشائعة
        </h2>
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            style={{
              marginBottom: 20,
              borderRadius: 8,
              padding: 15,
              backgroundColor: "#ecf0f1",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            <summary
              style={{ fontWeight: "700", color: "#16a085", outline: "none" }}
            >
              {faq.question}
            </summary>
            <p style={{ marginTop: 10, lineHeight: 1.6 }}>{faq.answer}</p>
          </details>
        ))}
      </section>

      {/* حجز موعد */}
      <section
        id="appointment"
        style={{
          padding: 30,
          maxWidth: 700,
          margin: "0 auto 40px auto",
          backgroundColor: "white",
          borderRadius: 12,
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          color: "#34495e",
          fontSize: 18,
          lineHeight: 1.6,
        }}
      >
        <h2
          style={{
            fontSize: 34,
            marginBottom: 20,
            color: "#2980b9",
            borderBottom: "4px solid #1abc9c",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          حجز موعد
        </h2>
        <form onSubmit={handleAppointmentSubmit} style={{ textAlign: "right" }}>
          <div style={{ marginBottom: 15 }}>
            <label htmlFor="name" style={{ fontWeight: "700" }}>
              الاسم الكامل:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={appointmentForm.name}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 8,
                marginTop: 6,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
              }}
              placeholder="أدخل اسمك الكامل"
              required
            />
          </div>

          <div style={{ marginBottom: 15 }}>
            <label htmlFor="phone" style={{ fontWeight: "700" }}>
              رقم الهاتف:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={appointmentForm.phone}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 8,
                marginTop: 6,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
              }}
              placeholder="أدخل رقم هاتفك"
              required
            />
          </div>

          <div style={{ marginBottom: 15 }}>
            <label htmlFor="doctor" style={{ fontWeight: "700" }}>
              اختر الطبيب:
            </label>
            <select
              id="doctor"
              name="doctor"
              value={appointmentForm.doctor}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 8,
                marginTop: 6,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
                cursor: "pointer",
              }}
              required
            >
              <option value="">-- اختر الطبيب --</option>
              {doctorsList.map((doc, idx) => (
                <option key={idx} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", gap: 15, marginBottom: 15 }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="date" style={{ fontWeight: "700" }}>
                التاريخ:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={appointmentForm.date}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: 8,
                  marginTop: 6,
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  fontSize: 16,
                  cursor: "pointer",
                }}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="time" style={{ fontWeight: "700" }}>
                الوقت:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={appointmentForm.time}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: 8,
                  marginTop: 6,
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  fontSize: 16,
                  cursor: "pointer",
                }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label htmlFor="notes" style={{ fontWeight: "700" }}>
              ملاحظات إضافية:
            </label>
            <textarea
              id="notes"
              name="notes"
              value={appointmentForm.notes}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 8,
                marginTop: 6,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
                minHeight: 80,
                resize: "vertical",
              }}
              placeholder="هل لديك أي ملاحظات؟"
            />
          </div>

          {formMessage && (
            <p
              style={{
                color: formMessage.includes("نجاح") ? "green" : "red",
                fontWeight: "700",
                marginBottom: 15,
              }}
            >
              {formMessage}
            </p>
          )}

          <button
            type="submit"
            style={{
              backgroundColor: "#1abc9c",
              color: "white",
              padding: "12px 24px",
              fontSize: 18,
              fontWeight: "700",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              transition: "background-color 0.3s",
              width: "100%",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#159e82")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1abc9c")}
          >
            إرسال طلب الحجز
          </button>
        </form>
      </section>

      {/* تواصل معنا */}
      <section
        id="contact"
        style={{
          padding: 30,
          maxWidth: 900,
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: 12,
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          color: "#34495e",
          fontSize: 18,
          lineHeight: 1.6,
          textAlign: "right",
        }}
      >
        <h2
          style={{
            fontSize: 34,
            marginBottom: 20,
            color: "#2980b9",
            borderBottom: "4px solid #1abc9c",
            display: "inline-block",
            paddingBottom: 8,
            fontWeight: "900",
          }}
        >
          تواصل معنا
        </h2>
        <p>
          نسعد دوماً بتواصلكم معنا! سواء كنت ترغب بالحصول على مزيد من المعلومات،
          حجز موعد، أو لديك أي استفسارات أخرى، فريقنا في عيادة الطبيب كير جاهز
          لمساعدتك عبر الوسائل التالية:
        </p>
        <p>
          <strong>العنوان:</strong> شارع الصحة، المدينة الطبية، الرياض، المملكة
          العربية السعودية
        </p>
        <p>
          <strong>الهاتف:</strong> 0123456789
        </p>
        <p>
          <strong>البريد الإلكتروني:</strong> info@altabibcare.com
        </p>
        <iframe
          title="موقع العيادة"
          src="https://maps.google.com/maps?q=riyadh%20medical%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="320"
          style={{ border: 0, borderRadius: 12, marginTop: 20 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          textAlign: "center",
          padding: "18px 20px",
          fontSize: 18,
          fontWeight: "600",
          letterSpacing: 1.2,
          marginTop: 40,
        }}
      >
        &copy; 2025 الطبيب كير - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}

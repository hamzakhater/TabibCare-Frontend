import React from "react";

export default function MessageSection({
  message,
  setMessage,
  sendMessage,
  messageSent,
}) {
  return (
    <section
      style={{
        marginTop: 40,
        borderTop: "1px solid #ccc",
        paddingTop: 20,
      }}
    >
      <h3>التواصل مع الطبيب أو الإدارة</h3>
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
    </section>
  );
}

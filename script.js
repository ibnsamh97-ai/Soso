async function sendToGemini() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");
  output.innerHTML = "⏳ جاري المعالجة...";

  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    output.innerHTML = data?.candidates?.[0]?.content?.parts?.[0]?.text || "❌ لم يتم استلام رد.";
  } catch (err) {
    output.innerHTML = "⚠️ حدث خطأ أثناء الاتصال.";
  }
}

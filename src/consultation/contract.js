// Matches the existing Django ConsultationSerializer; no backend payload changes.
export function prepareConsultation(values) {
  const data = {
    name: String(values.name || "").trim(),
    phone: String(values.phone || "")
      .trim()
      .replace(/[\s().-]/g, ""),
    email: String(values.email || "").trim(),
    comment: String(values.comment || "").trim(),
  };
  const invalid = [];
  if (!data.name || data.name.length > 100) invalid.push("name");
  if (!/^\+?\d{7,15}$/.test(data.phone) || data.phone.length > 15)
    invalid.push("phone");
  if (!data.email || data.email.length > 254) invalid.push("email");
  if (data.comment.length > 5000) invalid.push("comment");
  return { data, invalid };
}

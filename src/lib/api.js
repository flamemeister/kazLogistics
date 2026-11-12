export async function postJSON(path, data, { signal } = {}) {
  const timeout = AbortSignal.timeout(25000);
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    signal: signal ? AbortSignal.any([signal, timeout]) : timeout,
  });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.status === 204 ? {} : response.json();
}

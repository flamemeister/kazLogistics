export class APIError extends Error {
  constructor(status, details) {
    super(`Request failed: ${status}`);
    this.name = "APIError";
    this.status = status;
    this.details = details;
  }
}

export async function postJSON(path, data, { signal } = {}) {
  const timeout = AbortSignal.timeout(25000);
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    signal: signal ? AbortSignal.any([signal, timeout]) : timeout,
  });
  if (!response.ok) {
    let details;
    try {
      details = await response.json();
    } catch {
      /* A proxy error may be HTML. */
    }
    throw new APIError(response.status, details);
  }
  return response.status === 204 ? {} : response.json();
}

const API_URL = "http://localhost:3000"; // tu backend

export async function getDashboard() {
  const res = await fetch(`${API_URL}/dashboard`);
  return res.json();
}

export async function getLoans() {
  const res = await fetch(`${API_URL}/loans`);
  return res.json();
}

export async function createLoan(data) {
  const res = await fetch(`${API_URL}/loans`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
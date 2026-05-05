const API_URL = "http://localhost:3000";

export async function getDashboard() {
  try {
    const res = await fetch(`${API_URL}/dashboard`);
    return res.json();
  } catch (err) {
    console.log("Backend apagado");
    return null;
  }
}
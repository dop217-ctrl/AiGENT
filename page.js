'use client';
import { useState } from "react";

export default function Home() {
  const [agent] = useState({
    name: "Nova Operator",
    goal: "Grow brand to 100K followers",
    tasks: [
      { text: "Post short-form content", done: false },
      { text: "Engage with audience", done: true },
    ],
  });

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>AiGENT Operator System</h1>

      <section style={styles.card}>
        <h2>Dashboard</h2>
        <p><strong>Agent:</strong> {agent.name}</p>
        <p><strong>Main Goal:</strong> {agent.goal}</p>
      </section>

      <section style={styles.card}>
        <h2>Task Manager</h2>
        {agent.tasks.map((task, i) => (
          <div key={i} style={styles.task}>
            <span>{task.text}</span>
            <span>{task.done ? "✅" : "⏳"}</span>
          </div>
        ))}
      </section>

      <section style={styles.card}>
        <h2>Intelligence</h2>
        <p>Top Skill: Social Growth</p>
        <p>Insight: Short-form content performs 3x better</p>
      </section>

      <section style={styles.card}>
        <h2>Voice Lab</h2>
        <button style={styles.button}>Generate Voice</button>
      </section>

      <section style={styles.card}>
        <h2>Knowledge Export</h2>
        <button style={styles.button}>Download Playbook</button>
      </section>
    </main>
  );
}

const styles = {
  container: {
    background: "#0a0a0f",
    color: "#fff",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#7df9ff",
  },
  card: {
    background: "#12121a",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 0 20px rgba(0,255,255,0.1)",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "linear-gradient(90deg,#00f0ff,#8a2be2)",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  },
};

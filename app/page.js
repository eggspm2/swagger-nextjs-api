"use client"; // Menandai file ini sebagai komponen klien

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const [ip, setIp] = useState('');
  const [time, setTime] = useState('');
  const [batteryLevel, setBatteryLevel] = useState('');

  const handleBellClick = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    // Fetch IP address
    const fetchIp = async () => {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
    };

    // Fetch battery level
    const fetchBatteryLevel = async () => {
      const battery = await navigator.getBattery();
      setBatteryLevel(`${Math.floor(battery.level * 100)}%`);
    };

    // Update time every second
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    fetchIp();
    fetchBatteryLevel();

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.bellButton} onClick={handleBellClick}>
        <span style={styles.bellIcon}>🔔</span>
      </div>

      {showInfo && (
        <div style={styles.infoBox}>
          <p style={styles.infoText}>CHANGELOG : </p>
          <p style={styles.infoText}>23 - NOV - 2024 : WEB WAS CREATED</p>
        </div>
      )}

      <div style={styles.infoBar}>
        <p style={styles.infoText}>W E L C O M E  -  D E V</p>
      </div>

      <h1 style={styles.heading}>HALAMAN UTAMA</h1>
      <p style={styles.description}>
        thanks for using and support me , untuk ke area Docs tekan tombol dibawah..
      </p>
      <Link href="/docs" style={styles.link}>Docs Page!</Link>
      <Link href="/image" style={styles.link}>Image Generator!</Link>
app.get("/image", (req, res) => {
  res.sendFile(__path + "/image.html");
});
      <section style={styles.faqSection}>
        <h2 style={styles.subHeading}>Frequently Asked Questions (FAQ)</h2>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>1. Apakah ini berbayar?</h3>
          <p style={styles.answer}>Tidak.</p>
        </div>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>2. Cara pakai?</h3>
          <p style={styles.answer}>Anda dapat menggunakan fitur kami di bagian docs.</p>
        </div>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>3. Di mana tempat laporan bug / error?</h3>
          <p style={styles.answer}>Anda dapat menghubungi tim dukungan kami melalui halaman kontak.</p>
        </div>
      </section>

      <section style={styles.bioSection}>
        <h2 style={styles.subHeading}>ABOUT ME</h2>
        <p style={styles.bio}>
          Saya hanya seorang pengembang pemula, jadi jangan dibully.
        </p>
      </section>

      <section style={styles.infoSection}>
        <h2 style={styles.subHeading}>INFO</h2>
        <p style={styles.infoText}>Waktu saat ini: {time}</p>
        <p style={styles.infoText}>IP Anda: {ip}</p>
        <p style={styles.infoText}>Tingkat Baterai: {batteryLevel}</p>
      </section>

      <section style={styles.socialSection}>
        <h2 style={styles.subHeading}>Connect with Me</h2>
        <div style={styles.buttonContainer}>
          <Link href="https://github.com/eggspm2" target="_blank" style={styles.socialButton}>
            GitHub
          </Link>
          <Link href="https://youtube.com/@sanzmd" target="_blank" style={styles.socialButton}>
            YouTube
          </Link>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    backgroundColor: "#ffffff",
  },
  bellButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
    backgroundColor: "#4A90E2",
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  bellIcon: {
    color: "#ffffff",
    fontSize: "24px",
  },
  infoBox: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  infoText: {
    margin: 0,
  },
  infoBar: {
    backgroundColor: "#4A90E2",
    color: "#ffffff",
    padding: "10px",
    textAlign: "center",
    marginBottom: "20px",
  },
  heading: {
    color: "#4A90E2",
  },
  description: {
    fontSize: "18px",
    marginTop: "10px",
  },
  link: {
    display: "inline-block",
    marginBottom: "30px",
    padding: "10px 20px",
    backgroundColor: "#4A90E2",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
  faqSection: {
    marginTop: "40px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  faqItem: {
    marginBottom: "15px",
  },
  question: {
    fontWeight: "bold",
  },
  answer: {
    marginLeft: "10px",
  },
  bioSection: {
    marginTop: "40px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  subHeading: {
    color: "#4A90E2",
  },
  bio: {
    fontSize: "16px",
  },
  infoSection: {
    marginTop: "40px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  socialSection: {
    marginTop: "40px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
  },
  socialButton: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    backgroundColor: "#4A90E2",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

// Tambahkan efek hover untuk tombol sosial
const socialButtonHover = {
  ...styles.socialButton,
  ':hover': {
    backgroundColor: '#005bb5', // Warna saat hover
  },
};

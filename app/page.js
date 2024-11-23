// app/page.js
// https://nextjs.org/docs/app/getting-started/installation

import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hellooo, Welcome!!!</h1>
      <p style={styles.description}>
        Selamat datang di halaman utama kami! Kami senang Anda di sini. 
        Jelajahi lebih lanjut tentang proyek kami dan jangan ragu untuk 
        menghubungi kami jika ada pertanyaan.
      </p>
      <Link href="/docs" style={styles.link}>Try Ke Docs Page!</Link>

      <section style={styles.faqSection}>
        <h2 style={styles.subHeading}>Frequently Asked Questions (FAQ)</h2>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>1. Apa itu proyek ini?</h3>
          <p style={styles.answer}>Proyek ini adalah platform yang menyediakan dokumentasi dan tutorial untuk membantu pengembang.</p>
        </div>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>2. Bagaimana cara menggunakan platform ini?</h3>
          <p style={styles.answer}>Anda dapat mulai dengan mengunjungi halaman dokumentasi dan mengikuti panduan yang tersedia.</p>
        </div>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>3. Di mana saya bisa mendapatkan bantuan lebih lanjut?</h3>
          <p style={styles.answer}>Anda dapat menghubungi tim dukungan kami melalui halaman kontak.</p>
        </div>
      </section>

      <section style={styles.bioSection}>
        <h2 style={styles.subHeading}>Tentang Developer</h2>
        <p style={styles.bio}>
          Saya adalah seorang pengembang web dengan pengalaman dalam membangun aplikasi yang responsif dan intuitif. 
          Saya selalu berusaha untuk belajar dan berbagi pengetahuan dengan orang lain.
        </p>
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
  },
  heading: {
    color: "#4A90E2",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
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
};

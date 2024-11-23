// app/page.js

import Link from "next/link";
import Image from "next/image"; // Import Image untuk gambar logo

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.infoBar}>
        <p style={styles.infoText}>Informasi: Selamat datang di API kami yang gratis!</p>
      </div>

      <h1 style={styles.heading}>Hellooo, Welcome!!!</h1>
      <p style={styles.description}>
        Selamat datang di halaman utama kami! Kami senang Anda di sini. 
        Jelajahi lebih lanjut web API kami.
      </p>
      <Link href="/docs" style={styles.link}>Docs Page!</Link>

      <section style={styles.faqSection}>
        <h2 style={styles.subHeading}>Frequently Asked Questions (FAQ)</h2>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>1. Apakah REST API ini berbayar?</h3>
          <p style={styles.answer}>Tidak, karena kami membuat REST API gratis untuk mempermudah dalam pengembangan.</p>
        </div>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>2. Cara pakai?</h3>
          <p style={styles.answer}>Anda dapat menggunakan fitur REST API kami di bagian docs.</p>
        </div>
        <div style={styles.faqItem}>
          <h3 style={styles.question}>3. Di mana tempat laporan bug/error?</h3>
          <p style={styles.answer}>Anda dapat menghubungi tim dukungan kami melalui halaman kontak.</p>
        </div>
      </section>

      <section style={styles.bioSection}>
        <h2 style={styles.subHeading}>ABOUT ME</h2>
        <p style={styles.bio}>
          Saya hanya seorang pengembang pemula, jadi jangan dibully
        </p>
      </section>

     <section style={styles.socialSection}>
        <h2 style={styles.subHeading}>Connect with Me</h2>
        <div style={styles.buttonContainer}>
          <Link href="https://github.com/yourusername" target="_blank" style={styles.socialButton}>
            <Image 
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
              alt="GitHub" 
              width={30} 
              height={30} 
            />
            GitHub
          </Link>
          <Link href="https://youtube.com/yourchannel" target="_blank" style={styles.socialButton}>
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" 
              alt="YouTube" 
              width={30} 
              height={30} 
            />
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
    backgroundColor: "#ffffff",
  },
  infoBar: {
    backgroundColor: "#4A90E2",
    color: "#ffffff",
    padding: "10px",
    textAlign: "center",
    marginBottom: "20px",
  },
  infoText: {
    margin: 0,
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

// Pastikan Anda mengganti "/path/to/github-logo.png" dan "/path/to/youtube-logo.png"
// dengan jalur yang benar ke gambar logo GitHub dan YouTube Anda.

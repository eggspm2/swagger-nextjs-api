"use client"; // Menandai file ini sebagai komponen klien

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  const [ip, setIp] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [batteryLevel, setBatteryLevel] = useState('');

  const [faqs, setFaqs] = useState([
    { question: "Apa itu Acez API's?", answer: "Acez API's adalah platform untuk mengakses berbagai API." },
    { question: "Bagaimana cara menggunakan?", answer: "Anda dapat menggunakan API dengan mengikuti dokumentasi yang tersedia." },
    { question: "Apakah ini gratis?", answer: "Ya, sebagian besar layanan kami gratis untuk digunakan." },
  ]);

  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  useEffect(() => {
    // Fetch IP address
    const fetchIp = async () => {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
    };

    // Update time and date every second
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toLocaleDateString());
    }, 1000);

    fetchIp();

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const toggleFaq = (index) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-blue-400 text-center mb-8">Acez API's</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
            <p className="text-sm">YOUR IP ADDRESS</p>
            <p className="text-2xl">{ip || 'Loading...'}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
            <p className="text-sm">CLOCK</p>
            <p className="text-2xl">{time}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
            <p className="text-sm">DATE</p>
            <p className="text-2xl">{date}</p>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="mb-2">Someone want to donate me?</p>
          <Link href="https://trakteer.id" target="_blank">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Trakteer
            </button>
          </Link>
        </div>

        <div className="faq-section">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-300"
                onClick={() => toggleFaq(index)}
              >
                <p className="font-medium">{faq.question}</p>
              </button>
              {expandedFaqIndex === index && (
                <div className="bg-gray-700 p-4 rounded-lg mt-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">Made with <i className="fas fa-heart text-red-500"></p>         
          </p>
        </div>
      </div>
    </div>
  );
}

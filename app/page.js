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
    <div className="bg-gray-900 text-white font-sans min-h-screen p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl text-blue-400">My Dashboard</h1>
          <div className="relative cursor-pointer" onClick={handleBellClick}>
            <i className="fas fa-bell text-white text-xl"></i>
            <span className="absolute top-0 right-0 bg-green-500 text-xs rounded-full px-1">3</span>
          </div>
        </div>

        {showInfo && (
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-lg">CHANGELOG:</p>
            <p>23 - NOV - 2024 : WEB WAS CREATED</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm">YOUR IP ADDRESS</p>
              <p className="text-2xl">{ip || 'Loading...'}</p>
            </div>
            <i className="fas fa-map-marker-alt text-blue-400 text-2xl"></i>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm">CLOCK</p>
              <p className="text-2xl">{time}</p>
            </div>
            <i className="fas fa-clock text-blue-400 text-2xl"></i>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm">YOUR BATTERY</p>
              <p className="text-2xl">{batteryLevel || 'Loading...'}</p>
            </div>
            <i className="fas fa-battery-full text-blue-400 text-2xl"></i>
          </div>
        </div>

        <section className="bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-lg">Frequently Asked Questions (FAQ)</h2>
          <div className="mt-2">
            <div className="mb-2">
              <h3 className="font-bold">1. Apakah ini berbayar?</h3>
              <p>Tidak.</p>
            </div>
            <div className="mb-2">
              <h3 className="font-bold">2. Cara pakai?</h3>
              <p>Anda dapat menggunakan fitur kami di bagian docs.</p>
            </div>
            <div className="mb-2">
              <h3 className="font-bold">3. Di mana tempat laporan bug / error?</h3>
              <p>              Anda dapat menghubungi tim dukungan kami melalui halaman kontak.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-lg">ABOUT ME</h2>
          <p>Saya hanya seorang pengembang pemula, jadi jangan dibully.</p>
        </section>

        <div className="text-center mb-4">
          <p className="mb-2">Someone want to donate me?</p>
          <Link href="https://trakteer.id" target="_blank">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Trakteer</button>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm">Made with <i className="fas fa-heart text-red-500"></i> by Sanz</p>
        </div>
      </div>
    </div>
  );
}

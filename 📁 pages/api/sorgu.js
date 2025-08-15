// App.jsx
import React, { useState } from "react";

const categories = {
  "Kişi Sorgulama": [
    { cmd: "/sorgu -tc", desc: "TC ile Sorgulama" },
    { cmd: "/sorgu -ad -soyad", desc: "Ad Soyad ile Sorgulama" },
    { cmd: "/sorgu -ad -ad2 -soyad", desc: "İki İsimli Kişi Sorgulama" },
    { cmd: "/sorgu -ad -soyad -il", desc: "Ad Soyad ve Şehir ile Sorgulama" },
    { cmd: "/aile", desc: "Aile Sorgulama" },
  ],
  "İletişim Sorgulama": [
    { cmd: "/gsm (TC'den GSM)", desc: "TC'den GSM" },
    { cmd: "/gsm (GSM'den TC)", desc: "GSM'den TC" },
  ],
  "Diğer Sorgular": [
    { cmd: "/mernis", desc: "Mernis Sorgu" },
    { cmd: "/urlscan", desc: "URL Virüs Tarama" },
    { cmd: "/ipadres", desc: "IP Sorgulama" },
  ],
  "Finansal Sorgular": [
    { cmd: "/iban", desc: "IBAN Sorgu" },
    { cmd: "/bin", desc: "BIN Sorgu" },
    { cmd: "/gen", desc: "Kart Üretici" },
  ],
  "Escrow Sistemi": [
    { cmd: "/escrow", desc: "Doğrulama" },
    { cmd: "/esc", desc: "Aracı Listesi" },
  ],
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Kişi Sorgulama");

  return (
    <>
      {/* Kar yağışı için 50 tane tane kar tanesi */}
      <div className="snow">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="snowflake">
            ❄
          </div>
        ))}
      </div>

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: 20,
          maxWidth: 600,
          margin: "auto",
          color: "white",
          minHeight: "100vh",
          backgroundColor: "black",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1>🌟 THOTH BOT KULLANIM REHBERİ 🌟</h1>

        <nav
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 16px",
                backgroundColor: cat === selectedCategory ? "#0070f3" : "#333",
                color: cat === selectedCategory ? "#fff" : "#ccc",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </nav>

        <section>
          <h2>{selectedCategory}</h2>
          <ul>
            {categories[selectedCategory].map(({ cmd, desc }, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
                <code
                  style={{
                    background: "#222",
                    padding: "2px 6px",
                    borderRadius: 4,
                    color: "#0ff",
                  }}
                >
                  {cmd}
                </code>{" "}
                - {desc}
              </li>
            ))}
          </ul>
        </section>

        <footer
          style={{ marginTop: 40, fontSize: 12, color: "#666", color: "white" }}
        >
          <p>⚠️ -18 yaş altı sorgulamalar kesinlikle yasaktır.</p>
          <p>© Project 2021 | Teknik destek: @</p>
        </footer>
      </div>

      {/* Kar yağışı stilleri */}
      <style>{`
        .snow {
          pointer-events: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 9999;
          overflow: hidden;
        }
        .snowflake {
          color: white;
          font-size: 1em;
          font-family: Arial, sans-serif;
          position: absolute;
          top: -10px;
          user-select: none;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* Her kar tanesi için farklı hız ve başlangıç noktası */
        ${[...Array(50)].map((_, i) => `
          .snowflake:nth-child(${i + 1}) {
            left: ${Math.random() * 100}vw;
            animation-duration: ${5 + Math.random() * 5}s;
            animation-delay: ${Math.random() * 10}s;
            font-size: ${10 + Math.random() * 20}px;
            opacity: ${0.3 + Math.random() * 0.7};
          }
        `).join("\n")}

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

}

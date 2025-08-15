import { useState, useEffect } from "react";

const mainCategories = [
  { name: "Valorant Hilesi", slug: "valorant" },
  { name: "CS2 HİLESİ", slug: "cs2" },
  { name: "YAKINDA", slug: "comingsoon" },
  { name: "Fivem Hilesi", slug: "fivem" },
];

const subCategories = {
  valorant: ["Skin Changer", "Aimbot", "Wallhack", "Silent Aim"],
  cs2: [],
  comingsoon: [],
  fivem: [],
};

export default function Home() {
  const [activeMainCat, setActiveMainCat] = useState("valorant");
  const [activeSubCat, setActiveSubCat] = useState(null);

  useEffect(() => {
    setActiveSubCat(null); // Reset subcategory on main category change
  }, [activeMainCat]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: radial-gradient(circle at center, #0b0c10, #1f2833);
          color: white;
          overflow-x: hidden;
        }
        a {
          color: #00bfff;
          text-decoration: none;
          cursor: pointer;
        }
        a:hover {
          text-decoration: underline;
        }
        /* Background animated stars */
        #stars {
          position: fixed;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: -1;
          pointer-events: none;
          animation: starAnim 60s linear infinite;
        }
        @keyframes starAnim {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -10000px 5000px;
          }
        }
      `}</style>

      {/* Background stars */}
      <div
        id="stars"
        style={{
          background:
            'url("https://www.transparenttextures.com/patterns/stardust.png") repeat',
        }}
      ></div>

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.6))",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(8px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.7)",
        }}
      >
        {/* Main categories */}
        <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {mainCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveMainCat(cat.slug)}
              style={{
                background:
                  activeMainCat === cat.slug ? "#00bfff" : "transparent",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                color: activeMainCat === cat.slug ? "#000" : "#fff",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.3s ease, color 0.3s ease",
                boxShadow:
                  activeMainCat === cat.slug
                    ? "0 0 10px #00bfff"
                    : "none",
              }}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* Discord link */}
        <a
          href="https://discord.gg/8xen5Anrgs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: "700",
            background: "#7289da",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            boxShadow: "0 0 12px #7289da",
            transition: "all 0.3s ease",
            userSelect: "none",
          }}
        >
          Discord Sunucumuz
        </a>
      </header>

      {/* Sub categories bar */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem 2rem",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))",
          borderBottom: "1px solid #222",
          flexWrap: "wrap",
        }}
      >
        {(subCategories[activeMainCat] || []).map((sub) => (
          <button
            key={sub}
            onClick={() => setActiveSubCat(sub)}
            style={{
              background:
                activeSubCat === sub ? "#00bfff" : "rgba(255,255,255,0.1)",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              color: activeSubCat === sub ? "#000" : "#fff",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow:
                activeSubCat === sub ? "0 0 8px #00bfff" : "none",
              transition: "all 0.3s ease",
            }}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Content area */}
      <main
        style={{
          padding: "3rem 2rem",
          minHeight: "60vh",
          maxWidth: "1200px",
          margin: "auto",
          background: "rgba(0,0,0,0.65)",
          borderRadius: "16px",
          boxShadow: "0 0 30px #00bfff88",
          backdropFilter: "blur(10px)",
          color: "white",
          transition: "all 0.5s ease",
        }}
      >
        <h1 style={{ fontWeight: "700", fontSize: "2.5rem", marginBottom: "1rem" }}>
          {activeSubCat ? activeSubCat : mainCategories.find(c => c.slug === activeMainCat).name}
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
          Burada <strong>{activeSubCat ? activeSubCat : mainCategories.find(c => c.slug === activeMainCat).name}</strong> kategorisine ait kaliteli içerikler yer alacak.
          Site sürekli güncel, güvenilir ve 2025 şartlarına uygun olarak hizmet vermektedir.
        </p>

        {/* Ücretli / VIP kategori */}
        <section
          style={{
            background: "rgba(0,0,0,0.7)",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 0 15px #ff9900aa",
            maxWidth: "400px",
            margin: "auto",
            textAlign: "center",
            cursor: "pointer",
            userSelect: "none",
            transition: "background 0.3s ease",
          }}
          onClick={() => alert("VIP ve Ücretli hile kategorisi yakında aktif olacak!")}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,153,0,0.9)")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.7)")}
          aria-label="Ücretli ve VIP hile kategorisi"
        >
          <h2 style={{ margin: "0 0 0.5rem 0" }}>Ücretli / VIP Hile Kategorisi</h2>
          <p>Özel ve güncel içerikler için tıklayın!</p>
        </section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          color: "#bbb",
          fontSize: "0.9rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "3rem",
          userSelect: "none",
        }}
      >
        <p>Site Güvenilir &nbsp;|&nbsp; 2025 Şartları Onaylı Site</p>
      </footer>
    </>
  );
}


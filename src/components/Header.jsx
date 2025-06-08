import React, { useState, useRef, useEffect } from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const overlayRef = useRef(null);

  const suggestions = [
    { label: "What are Dark Patterns?", link: "https://youtu.be/EDQkOyTW0g8" },
    { label: "Web Developer reviews to famous websites", link: "/reviews" },
    { label: "How to use ChatGPT like a PRO", link: "https://youtu.be/yGSbA3mIDTM" },
    {
      label: "Huge Freelance mistakes I made that costed me my Mental Health",
      link: "https://youtu.be/0wrXdOzwMAE",
    },
    { label: "My old Portfolio", link: "https://portfolio-c4508.web.app" },
    {
      label: "That one Girl in B.Tech",
      link: "https://www.youtube.com/@ThatOneGirlinBTech",
    },
  ];

  const toggleSearch = () => {
    setSearchOpen(true);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [searchOpen]);

  return (
    <>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <div className="header-left">
          <a href="/" className="logo">
            <h2>Drashti Shah</h2>
          </a>
        </div>

        <div className="right-icon" style={{ display: "flex", gap: "1rem" }}>
          <CiBellOn className="icon" />
          <CiSearch
            className="icon"
            onClick={toggleSearch}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {searchOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            ref={overlayRef}
            style={{
              width: "90%",
              maxWidth: "600px",
              backgroundColor: "#1e1e1e",
              borderRadius: "12px",
              padding: "2rem",
              position: "relative",
              height: "fit-content",
              paddingBottom: "0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  fontSize: "1.1rem",
                  backgroundColor: "#1e1e1e",
                  color: "white",
                }}
                autoFocus
              />
              <IoMdClose
                className="icon"
                onClick={() => setSearchOpen(false)}
              />
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {suggestions
                .filter((item) =>
                  item.label.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingBottom: "0.75rem",
                        marginBottom: "0.75rem",
                        cursor: "pointer",
                        color: "white",
                        textDecoration: "none",
                      }}
                      onClick={() => setSearchOpen(false)}
                    >
                      <CiSearch className="icon" />
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

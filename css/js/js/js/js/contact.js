
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #0e0e0e;
  color: white;
  overflow-x: hidden;
}

/* زرار اللغة */
.top-bar {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

#langToggle {
  padding: 8px 16px;
  cursor: pointer;
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Contact */
.contact {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
}

.contact-form input,
.contact-form button {
  padding: 12px;
  font-size: 16px;
}

.contact-form button {
  cursor: pointer;
}

/* موبايل */
@media (max-width: 768px) {
  .contact-form {
    width: 90%;
  }
}

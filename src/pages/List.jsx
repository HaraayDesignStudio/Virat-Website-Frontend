import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./list.module.css";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://virat-backend.onrender.com/api/contacts"
      );
      setContacts(response.data.reverse());
      setError(null);
    } catch (err) {
      setError("Failed to load contacts. Please try again later.");
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch data if authenticated
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    
    // Check credentials
    if (username === "virat" && password === "viratpass") {
      setIsAuthenticated(true);
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setContacts([]);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>Contact Management System</h1>
          {isAuthenticated && (
            <p>View and manage all contact form submissions</p>
          )}
        </div>

        {!isAuthenticated ? (
          <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Login</h2>
            {loginError && (
              <div className={styles.loginError}>{loginError}</div>
            )}
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className={styles.input}
                />
              </div>
              
              <button type="submit" className={styles.button}>
                Login
              </button>
            </form>
          </div>
        ) : loading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
          </div>
        ) : error ? (
          <div className={`${styles.message} ${styles.error}`}>{error}</div>
        ) : contacts.length === 0 ? (
          <div className={`${styles.message} ${styles.empty}`}>
            No contact submissions found
          </div>
        ) : (
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={contact._id}>
                    <td>{index + 1}</td>
                    <td>{contact.name || "—"}</td>
                    <td>{contact.email || "—"}</td>
                    <td>{contact.number || "—"}</td>
                    <td>{contact.company || "—"}</td>
                    <td className={styles.message}>{contact.message || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isAuthenticated && (
          <div className={styles.footer}>
            <div className={styles.footerActions}>
              <button onClick={fetchContacts} className={styles.button}>
                Refresh Data
              </button>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </div>
            <div className={styles.counter}>
              Total entries: {contacts.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
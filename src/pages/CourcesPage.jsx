import React, { useState, useRef } from "react";
import Modal from 'react-modal';
import '../styles/CourcesPage.css';

function CourcesPage() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '25%',
      left: '10%',
      right: '5%',
      bottom: '5%',
      transform: 'translate(-5%, -5%)',
      width: '90%',
      maxHeight: '90%',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'black',
      border: 'none',
      overflow: 'auto',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main>
      <section className="cources-section">
        <div className="cources-div flex flex-col transparent-container">
          <div className="cource-details flex flex-col w-100 text-left">
            <h1>Bachelor of Commerce</h1>
            <small>Duration: 3 years</small>
          </div>
          <p className="text-left">Explore the world of commerce with our Bachelor of Commerce program at Nirmand college. Gain in-depth knowledge in business, finance, and economics through a comprehensive curriculum. Prepare for a successful career in various industries and unlock endless opportunities with our esteemed program.</p>
          <button className="btn" onClick={openModal}>Know more</button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button
                  className="hamburger-icon close text-white"
                  onClick={closeModal}
                >
                  <span
                    className={`line ${modalIsOpen ? "line-open modal-line-open" : ""}`}
                  ></span>
                  <span
                    className={`line ${modalIsOpen ? "line-open modal-line-open" : ""}`}
                  ></span>
                  <span
                    className={`line ${modalIsOpen ? "line-open modal-line-open" : ""}`}
                  ></span>
                </button>
          <h2 >Course Details</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Subject Code</th>
                <th>Subject Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Financial Accounting</td>
                <td>BC1.1</td>
                <td>Core Course C-1</td>
              </tr>
              <tr>
                <td>Business Organization & Management</td>
                <td>BC1.2</td>
                <td>Core Course C-2</td>
              </tr>
              <tr>
                <td>Business Law</td>
                <td>BC1.3</td>
                <td>Core Course C-4</td>
              </tr>
              <tr>
                <td>Business Statistics and Mathematics</td>
                <td>BC1.4</td>
                <td>Core Course C-5</td>
              </tr>
              <tr>
                <td>English Core Compulsory for B.A/B.Com</td>
                <td>ENGCE1</td>
                <td>CC</td>
              </tr>
              <tr>
                <td>English Literature-I</td>
                <td>ENG 102 </td>
                <td>DSC-I</td>
              </tr>
              <tr>
                <td>English Literature-II</td>
                <td>ENG 103</td>
                <td>DSC-II</td>
              </tr>
              <tr>
                <td>English AECC-I</td>
                <td>ENG 104</td>
                <td>AECC</td>
              </tr>
            </tbody>
          </table>
        </Modal>

      </section>
    </main>
  );
}

export default CourcesPage;

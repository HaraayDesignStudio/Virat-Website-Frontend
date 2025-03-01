import { useState } from "react";
import styles from "./FAQ.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {openIndex === index && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
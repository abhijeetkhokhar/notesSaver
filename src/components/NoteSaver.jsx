// import React, { useState, jsPDF } from "react";
// import styles from "./NoteSaver.module.css";

// export default function NoteSaver() {
//   const [notes, setNotes] = useState("");
//   const handleSave = (e) => {
//     e.preventDefault();
//     setNotes(e.target.value);
//     alert("save button is working")
//   };
//   const doc = new jsPDF();

//   doc.text(notes, 10, 10);
//   doc.save("a4.pdf");

//   const handleClear = (e) => {
//     e.preventDefault();
//     alert("clear button is working");
//   };
//   return (
//     <>
//       <div className={styles.mainDiv}>
//         <div className={styles.textArea}>
//           <textarea cols={80}></textarea>
//         </div>
//         <div className={styles.btn}>
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleClear}>Clear all</button>
//         </div>
//       </div>
//     </>
//   );
// }



import React, { useState } from "react";
import styles from "./NoteSaver.module.css";
import jsPDF from "jspdf";

export default function NoteSaver() {
  const [notes, setNotes] = useState("");

  const handleChange = (e) =>{
    setNotes(e.target.value);
  }

  const handleSave = () => {
    const doc = new jsPDF();
    doc.text(notes, 10, 10);
    doc.save("notes.pdf");
    alert("Notes saved as PDF!");
  };

  const handleClear = () => {
    setNotes("");
    alert("Notes cleared!");
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.textArea}>
        <textarea
          cols={80}
          value={notes}
          onChange={handleChange}
          placeholder="Write your notes here..."
        ></textarea>
      </div>
      <div className={styles.btn}>
        <button onClick={handleSave} className={styles.btn1}>Save</button>
        <button onClick={handleClear} className={styles.btn2}>Clear</button>
      </div>
    </div>
  );
}


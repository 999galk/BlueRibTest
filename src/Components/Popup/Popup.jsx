import React from "react";
import Popup from "reactjs-popup";
import './Popup.css';
 
const AboutPopup = () => (
  <Popup trigger={<button>Read More</button>} position="center">
    <div>
      <p>שגיא מנהל משא ומתן ומנסח עבור לקוחותיו את מכלול ההסכמים המסחריים הנדרשים להם בכל שלב של פעילותם העסקית, כגון: הסכמי מייסדים, הסכמי בעלי מניות, הסכמי שותפות, הסכמי רכישה, הסכמי העסקה וייעוץ, הסכמי שירותים ואספקה, הסכמים בתחום הפיתוח והטכנולוגיה ורישיונות, מימון ובנקאות, מסחר בינלאומי ועוד.</p>
      <p>לשגיא ניסיון רב בייצוג וליווי משפטי של חברות ותאגידים בתחום דיני החברות וניירות ערך ובכלל זה בין היתר, הנפקות לראשונה לציבור (IPO), גיוסי הון וחוב ציבוריים ופרטיים, אחריות דירקטורים ונושאי משרה, תגמול בכירים וממשל תאגידי. כמו כן מעניק שגיא ליווי משפטי לפעילותן השוטפת של חברות ציבוריות שונות שניירות הערך שלהן נסחרות בבורסה, לרבות לדירקטוריונים, ועדות בלתי תלויות, הנהלה בכירה ובעלי המניות של חברות אלה ולו ניסיון רב בייצוגן בפני רשות ניירות ערך והבורסה לניירות ערך.</p>
      <p>שגיא הוא בעל תואר ראשון במשפטים (בהצטיינות) וחבר בלשכת עורכי הדין בישראל</p>
    </div>
  </Popup>
);

export default AboutPopup;
import React from 'react';
import { withRouter } from 'react-router-dom';
import people from '../../Articles/People-at-Work.jpg';

const FoundersAgreement = () => {
	return(
		<div>
			<h1 className='article-title' style={{maxWidth:'75%',marginLeft:'auto',marginRight:'auto'}}>המדריך לעריכת הסכם מייסדים</h1>
			<div className='article-text'>
				<p>
				<strong>מבוא</strong>
				הסכם מייסדים (Founders Agreement) הינו מסמך משפטי שתפקידו לקבוע את הזכויות והחובות של המייסדים של המיזם העסקי. תכליתו של הסכם המייסדים הינה לעגן ולהסדיר את אופן התנהלותה העסקית של החברה בין היזמים לבין עצמם ובין היזמים לבין ההתאגדות המוקמת. את הסכם המייסדים מקובל לערוך טרם הקמת התאגיד ובכך לחסוך זמן, כסף ולמנוע חילוקי דעות עתידיים.
				<br/><br/>
				<strong>נושאים מרכזיים בהסכם מייסדים</strong>
				<ul>
					<li><strong>הקמת התאגדות וחלוקת הון המניות –</strong> בחירת המסגרת המשפטית של העסק (חברה בע"מ, שותפות, עמותה וכיוצ"ב), קביעת מטרות ההתאגדות, חלוקת הון המניות בחברה, קביעת הרכב המניות וסוג המניות בחברה (כגון מניות הנהלה, מניות בכורה, מניות רגילות וכן מניות בעלות ערך נקוב או ללא ערך נקוב).</li>
					<li><strong>מימון -</strong> התייחסות לסוגיות מימון החברה עשויות לכלול העמדת הון עצמי על ידי המייסדים, הלוואות בעלים, מימון חיצוני מגורמים שונים כגון בנקים, מימון המונים ו/או משקיעים נוספים. חשוב להיערך למקרה שבו נדרש מימון נוסף לחברה ולהסדיר כיצד תיקבע ההשקעה, לפי איזה שווי חברה תבוצע ההשקעה, כיצד ידוללו בעלי מניות שלא הצטרפו להשקעה וכיוצ"ב.</li>
					<li><strong>ניהול החברה –</strong> תיאום ציפיות בין מייסדי החברה באשר להתנהלות השוטפת של החברה הינה הכרחית. בין היתר, חשוב להתייחס לאופן מינוי דירקטוריון החברה והגדרת סמכויותיו. כמו כן יש לקבוע מנגנוני קבלת החלטות בנושאים רגישים שבהן תתקבלנה ההחלטות בקרב בעלי המניות בחברה שלא בדרך של הכרעה על פי רוב רגיל (רוב מיוחד או החלטה פה אחד).</li>
					<li><strong>חלוקת תפקידים –</strong> רצוי שהסכם מייסדים יתייחס לחלוקת התפקידים ותחומי האחריות בין המייסדים. חשוב להגדיר מה יהיה, אם בכלל, היקף העסקתו בפועל של כל אחד מהמייסדים בחברה ואת תנאי העסקתם.</li>
					<li><strong>מנגנונים ליישוב מחלוקות –</strong> חשוב לעגן מנגנונים למצבים שבהם לא ניתן יהיה להחליט על אופן ניהול החברה עקב סכסוך בין בעלי המניות. מנגנונים אלו יכולים לקבוע פניה לבורר מוסכם על הצדדים, מינוי בורר ע"י בית המשפט וכיוצ"ב.</li>
					<li><strong>הפסקת הפעילות המשותפת –</strong> על הסכם מייסדים להסדיר את אופן היפרדות המייסדים אם כתוצאה מסכסוך מתמשך, אם כתוצאה מאובדן כושר עבודה או חלילה פטירה של אחד המייסדים. כך לדוגמא ניתן לקבוע מנגנון BMBY (Buy me Buy You) שבסופו אחד המייסדים רוכש את חלקם של יתר המייסדים.</li>
					<li><strong>סודיות ואי תחרות –</strong> הסכם המייסדים צריך לכלול סעיפי סודיות ואי תחרות סטנדרטיים ובכך למנוע מצב שבו אחד מהמייסדים ינצל את הידע שצבר במהלך פעילות החברה ולהקים בעצמו עסק מתחרה.</li>
					<li><strong>מנגנוני עבירות המניות: </strong> כל הסכם מייסדים צריך להתייחס לאירועים של העברת מניותיהם של המייסדים. קיימים מספר מנגנונים מקובלים שנמצאים ברוב הסכמי מייסדים, כאשר מאחורי כל מנגנון קיים רציונל אחר. להלן סקירה תמציתית לעניין מנגנונים מקובלים בנושא עבירות המניות:
					<br/><br/>
					<p style={{marginRight:'25px'}}>
					<strong>זכות סירוב ראשונה (Right of first refusal) –</strong>
					<br/>
					מנגנון זכות סירוב ראשונה (ROFR) מחייב בעל מניות המעוניין למכור את מניותיו בחברה לפנות תחילה לבעלי המניות הקיימים בחברה (או למי שזכאי לזכות זו) ולהציע להם תחילה לקנות את המניות באותם תנאים שבהם הם ימכרו לצד שלישי. המטרה העיקרית של סעיף זה היא למנוע כניסת צדדים שלישיים לחברה, כל עוד בעלי המניות הקיימים מעוניינים לקנות את המניות בעצמם.
					<br/><br/>
					<strong>זכות מצרנות (Pre-emption right) –</strong>
					<br/>
					מנגנון זה נועד להקנות לבעלי המניות בחברה, כולם או חלקם, את זכות "הראשונים" לרכוש תחילה ולפני צד שלישי (כגון משקיע חדש) מניות חדשות שטרם הוקצו בחברה. הזכות נועדה לאפשר לבעלי המניות הקיימים בחברה למנוע מצב שבו ידוללו אחזקותיהם בחברה, עקב הליך של הקצאת מניות.
					<br/><br/>
					<strong>מכירה כפויה (Bring along/Drag along) –</strong>
					<br/>
					מנגנון זה מאפשר לבעלי מניות הרוב לכפות על בעלי מניות המיעוט למכור, ביחד איתם, את מניותיהם לצד שלישי. לרוב, נועד המנגנון לאפשר הליך של מכירת החברה בשלמותה לרוכש שמתנה את רכישתו ברכישת מלוא ההון המונפק והנפרע של החברה ובעצם כך למנוע מבעלי מניות המיעוט לסחוט את בעלי מניות הרוב על ידי סירוב לרכישה כאמור.
					<br/><br/>
					<strong>זכות ההצטרפות (Tag along/Co-sale) –</strong>
					<br/>
					זכות הניתנת לבעלי מניות המיעוט להצטרף לבעלי המניות הרוב אם אלו יבחרו למכור את מניותיהם כאשר מגיע קונה אשר לא מתנה את רכישת מניות הרוב ברכישת מלוא הון המניות המונפק והנפרע של החברה. המנגנון נועד להגן על בעלי מניות המיעוט מנטישה של בעלי השליטה ולאפשר לבעלי מניות המיעוט למכור את מניותיהם במקרה שאינם רוצים להישאר כבעלי מניות בחברה עם בעל מניות רוב שונה.
					<br/><br/>
					<strong>איסור מכירת מניות - (No Sale)</strong>
					<br/>
					הוראה זו מבטיחה כי היזמים לא ימכרו את מניותיהם בחברה (או ימכרו את מניותיהם במשורה), לתקופת מסוימת מתוך ראיה שאם ימכרו את מניותיהם, או ימכרו יותר מהכמות שהוגבלה, יתפרש הדבר כחוסר אמון היזמים בחברה ובטכנולוגיה שלה.
					<br/><br/>
					<strong>מנגנון Reverse Vesting</strong>
					<br/>
					מנגנון חשוב במקרה שבו אחד או יותר מהמייסדים מועסקים בחברה. בהתאם למנגנון, אם העסקתו של אחד המייסדים בחברה תסתיים כתוצאה מהתפטרות ללא “סיבה מוצדקת” או על ידי פיטורים עם “סיבה מוצדקת” (כפי שאלו יוגדרו בהסכם המייסדים), אזי לחברה תהא הזכות לרכוש חזרה את מניותיו של אותו מייסד עבור תמורה מסוימת (לרוב בתמורה מינימאלית). רכישה כאמור תגדיל באופן יחסי את שיעור האחזקות של יתר בעלי המניות בחברה ללא צורך בתשלום נוסף. בדומה למנגנוני הבשלת אופציות לעובדים, רוב מנגנוני ה- Reverse Vesting קובעים הוראות לפיהם בסוף כל תקופה העסקה מסוימת (חודש, רבעון או שנה) אחוז מסוים מהמניות של אותו מייסד שהיו כפופות למנגנון הרכישה מחדש משתחררות מההגבלה.
					</p>
					</li>
				</ul>
				<br/>
				</p>
				<br/><br/>
				<p style={{textAlign:'center'}}>
				<strong>
				אודות המשרד
				<br/><br/>
				משרדנו בעל הידע, הניסיון והמומחיות בהקמה וליווי של עסקים ותאגידים מסוגים שונים. אנו מסייעים ללקוחותינו לתת את הדעת על הסוגיות החשובות שיש לכלול במסגרת הסכם המייסדים, תוך בחינה יסודית של רצון הצדדים ויצירת מנגנונים רלוונטיים אשר בפועל חוסכים זמן, כסף ומונעים מחלוקות, אגב שמירה על האינטרסים של כל הצדדים.
				<br/><br/>
				אין לראות באמור במאמר זה משום ייעוץ משפטי הנוגע לאדם, עסק או מקרה ספציפי. המחבר אינו נושא באחריות כלשהי כלפי מאן דהוא והלה נדרש לקבל עצה מקצועית, פרטנית ויסודית לנסיבות המקרה שלו, לפני כל פעולה המסתמכת על הדברים האמורים ו/או המצורפים להם.
				</strong>
				</p>
			</div>
		</div>
	);
}

export default withRouter(FoundersAgreement);
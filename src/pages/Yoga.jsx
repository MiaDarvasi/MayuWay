import { useEffect } from "react";

import ashtanga from "../assets/imgs/ashtanga.jpg";
import hata from "../assets/imgs/hata.jpg";
import viniasa from "../assets/imgs/viniasa2.jpg";
import butterfly from "../assets/imgs/butterfly.png";


export function Yoga() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeInUp');
                } else {
                    entry.target.classList.remove('fadeInUp');
                }
            });
        }, { threshold: 0.2 });  // 20% of the section must be in view to trigger

        const sections = document.querySelectorAll('.animated');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="yoga flex-col flex-col-center">
            <section className="flex-col flex-col-center">
                <img className="yoga-butterfly" src={butterfly} />
                <h1 className="yoga-title">מה אני מלמדת</h1>
            </section>
            <ul>
                <li className="flex-col flex-col-center animated animatedFadeInUp fadeInUp">
                    <img className="hata yoga-img" src={hata} />
                    <h1>האתה</h1>
                    <p dir="rtl">האתה יוגה היא הבסיס להרבה מסגנונות היוגה המודרניים ומתמקדת במודעות לגוף ולנשימה. מדובר בתרגול איטי וממוקד בו נשארים בכל תנוחה למשך זמן ממושך, כדי לאפשר לגוף להתרגל לתנוחה ולמצוא נינוחות גם בתוך אי הנוחות. זהו תרגול שמלמד אותנו להתמודד עם אתגרים פיזיים ומנטליים, תוך שמירה על נשימה רגועה ומודעות. האתה יוגה משלבת תנוחות (אסאנות), תרגולי נשימה (פראניאמה) ומדיטציה, ומטרתה לאזן בין הגוף והנפש. הסגנון מתאים הן למתחילים והן למתרגלים מנוסים המחפשים רוגע, איזון והעמקה בתנוחות.</p>
                </li>
                <li className="flex-col flex-col-center animated animatedFadeInUp fadeInUp">
                    <img className="ashtanga yoga-img" src={ashtanga} />
                    <h1>אשטנגה</h1>
                    <p dir="rtl">אשטנגה יוגה היא שיטה מובנית המאופיינת בסדר קבוע של תנוחות, המתקדמות בצורה שיטתית מרמה לרמה. כל סדרה נבנית על קודמתה ומשלבת תנועה זורמת (ויניאסה) יחד עם טכניקת נשימה ייחודית (אוג’אי) ונעילות אנרגיה (בנדהות). זהו תרגול אינטנסיבי ומאתגר הדורש משמעת עצמית, סבלנות והתמדה, אך מאפשר צמיחה אישית, שיפור הכוח הפיזי והגמישות, ופיתוח ריכוז ומודעות גבוהה. אשטנגה יוגה מתאימה למתרגלים שמחפשים מסגרת ברורה, תרגול עקבי ועבודה פיזית עמוקה לצד מדיטציה בתנועה.</p>
                </li>
                <li className="flex-col flex-col-center animated animatedFadeInUp fadeInUp">
                    <img className="viniasa yoga-img" src={viniasa} />
                    <h1>ויניאסה</h1>
                    <p dir="rtl">ויניאסה יוגה היא סגנון דינמי בו התרגול מבוסס על תנועה זורמת ורציפה המתואמת עם הנשימה. בכל שיעור נוצר רצף תנועות משתנה המוביל מתנוחה אחת לשנייה בהרמוניה, כך שנוצרת תחושת “ריקוד” בין התנוחות. התרגול משלב חוזק, גמישות ושיפור הסיבולת הפיזית, תוך חיבור עמוק בין הגוף, הנשימה והמיינד. ויניאסה יוגה מתאימה למי שמחפש גיוון בתרגול, אנרגיה ודינמיות. זהו סגנון המתאים במיוחד למתרגלים המעוניינים בתנועה זורמת המשלבת עבודה פיזית ומנטלית.</p>
                </li>
            </ul>
        </section>
    );
}

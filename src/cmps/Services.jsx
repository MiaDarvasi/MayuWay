import { useEffect } from "react";

import tibet1 from "../assets/imgs/tibet.jpg";
import tibet2 from "../assets/imgs/tibet2.jpg";
import tibet3 from "../assets/imgs/tibet3.jpg";
import butterfly from "../assets/imgs/butterfly.png";


export function Services() {

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
        <section className="services-container full">
        <section className="services">
            <section className="flex-col flex-col-center flex-gap animated animatedFadeInUp fadeInUp" id="services">
                <img className="services-butterfly" src={butterfly} />
                <h1>שירותים שאני מציעה</h1>
            </section>
            <ul>
                <li className="flex-gap animated animatedFadeInUp fadeInUp">
                    <section className="service-txt flex-col flex-col-center flex-gap">
                        <h2>שיעורים פרטיים ואישיים</h2>
                        <p dir="rtl">מפגשים מותאמים אישית המאפשרים התעמקות בתרגול יוגה פרטני. יחד נבנה תוכנית פרקטית ומסודרת, תוך הקשבה ליכולות הגוף והנפש ושילוב עקרונות מפילוסופיית היוגה לחיי היום-יום.</p>
                    </section>
                    <img className="service-img1" src={tibet1} />
                </li>
                <li className="flex-gap animated animatedFadeInUp fadeInUp">
                    <img className="service-img2" src={tibet3} />
                    <section className="service-txt flex-col flex-col-center flex-gap">
                        <h2>קבוצות תרגול קטנות</h2>
                        <p dir="rtl">שיעורים בקבוצה אינטימית בהם נעמיק בפרקטיקה הפיזית והמנטלית של היוגה. ניצור חיבור בין הגוף לנפש ונרחיב את הידע בתרגול מתוך חוויה משותפת ותמיכה קבוצתית.</p>
                    </section>
                </li>
                <li className="flex-gap animated animatedFadeInUp fadeInUp">
                    <section className="service-txt flex-col flex-col-center flex-gap">
                        <h2>ריטריטים וסדנאות</h2>
                        <p dir="rtl">ימי תוכן ייחודיים בהם נצלול לעומק פילוסופיית היוגה והבודהיזם, לצד תרגול פיזי מעמיק. בריטריטים ובסדנאות המשתתפים יקבלו כלים מעשיים להמשך התרגול והשראה לשילוב היוגה כדרך חיים.</p>
                    </section>
                    <img className="service-img3" src={tibet2} />
                </li>
            </ul>

        </section>
        </section>
    );
}

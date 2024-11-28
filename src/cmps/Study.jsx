import { useEffect } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import butterfly from "../assets/imgs/butterfly.png";
import study1 from "../assets/imgs/study1.jpg";
import study2 from "../assets/imgs/study2.jpg";
import study3 from "../assets/imgs/study3.jpg";


export function Study() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeInUp');
                } else {
                    entry.target.classList.remove('fadeInUp');
                }
            });
        }, { threshold: 0.1 });  // 20% of the section must be in view to trigger

        const sections = document.querySelectorAll('.animated');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="study">
            <section className="flex-col flex-col-center flex-gap animated animatedFadeInUp fadeInUp">
                <img className="study-butterfly" src={butterfly} />
                <h1>ההכשרות שעברתי</h1>
            </section>

            <Carousel responsive={responsive} infinite={true} className="skill-slider animated animatedFadeInUp fadeInUp">
                <div className="item">
                    <img src={study1} />
                    <section className="study-txt">
                        <section>
                            <h2>קורס מורים בשיטת ויניאסה</h2>
                            <h3 dir="rtl">250 שעות</h3>
                        </section>
                        <p dir="rtl">בקורס בהנחיית רוקסי במכמורת, קיבלתי בסיס מעמיק בשיטת ויניאסה ובפילוסופיית היוגה. חקרנו לעומק את עקרונות היוגה ודרכי יישומם בחיי היומיום, תוך שילוב תרגול פיזי ומנטלי. רכשתי כלים מקצועיים לבניית שיעורים משמעותיים, המחברים בין תנועה, נשימה ופילוסופיה.</p>
                    </section>
                </div>
                <div className="item">
                    <img src={study2} className="top-img-position" />
                    <section className="study-txt">
                        <section>
                            <h2>קורס מורים בשיטת האתה ואשטנגה</h2>
                            <h3 dir="rtl">200 שעות</h3>
                        </section>
                        <p dir="rtl">בהרי ההימלאיה שבהודו עברתי חודש אינטנסיבי, שבו למדתי את השיטות המסורתיות של האתה ואשטנגה יוגה. התוכנית כללה לימוד תנוחות, תרגילי נשימה והוראה מדויקת, תוך התאמה לצורכי המתרגלים. הקורס חיזק את היכולות שלי להנחות שיעורים המשלבים דיוק, נשימה ומודעות.</p>
                    </section>
                </div>
                <div className="item">
                    <img src={study3} />
                    <section className="study-txt">
                        <section>
                            <h2>קורס מדיטציה בסגנון שיבננדה</h2>
                            <h3 dir="rtl">50 שעות</h3>
                        </section>
                        <p dir="rtl">בקורס שנערך במרכז שיבננדה למדתי טכניקות נשימה ושיטות מדיטציה להתמודדות עם אתגרי היומיום. הקורס העניק לי כלים להנחות מדיטציה ולשלב נשימה מודעת ככלי ליציבות ורוגע בשיעורים ובחיים.</p>
                    </section>
                </div>
            </Carousel>
        </section>
    );
}

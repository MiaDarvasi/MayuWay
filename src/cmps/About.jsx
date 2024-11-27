
import mayu1 from "../assets/imgs/mayu1.jpeg";
import mayu2 from "../assets/imgs/mayu2.jpeg";
import mayu3 from "../assets/imgs/mayu3.jpeg";
import mayu4 from "../assets/imgs/mayu4.jpeg";
import mayu6 from "../assets/imgs/mayu6.jpeg";


import logo from "../assets/imgs/logoclean.png";
import butterfly from "../assets/imgs/butterfly.png";

import ig from "../assets/imgs/icons/ig.svg";
import whatsup from "../assets/imgs/icons/whatsup.svg";



export function About() {
    return <section className="about" id="about">
        <section className="about-top">
            <img className="main-profile-img" src={mayu2} />
            <section className="about-title">
                <section className="about-title-content">
                    <img className="logo" src={logo} />
                    <p>Maya Waisman</p>
                    <section className="about-social">
                        <a href="https://www.instagram.com/maya_way_yoga/profilecard/?igsh=YXdjcnFqaThtd3Yz" target="blank"><img src={ig} /></a>
                        <a href="https://wa.link/31grat" target="blank"><img src={whatsup} /></a>
                    </section>
                </section>
            </section>
            <section>
            </section>
        </section>
        <section className="flex-col flex-col-center flex-gap">
            <p className="mayu-catchphrase">אנחנו כבר כל מה שאנחנו שואפים להיות. גם ברגעים הקשים, הטוב והיופי כבר בתוכנו- רק צריך לאפשר להם להתגלות </p>
            <img className="about-butterfly" src={butterfly} />
        </section>
        <section className="about-gallery">
            <img className="about-gallery-img" src={mayu6} />
            <img className="about-gallery-img" src={mayu4} />
            <img className="about-gallery-img" src={mayu3} />
        </section>
        <section className="about-sum-content flex-col flex-col-center flex-gap">
            <img className="about-butterfly" src={butterfly} />
            <h1 className="about-sum-title">קצת עליי</h1>
            <p className="about-sum">הייתי ספורטאית תחרותית תמיד רודפת אחרי הישגים, תארים והכרה, ותמיד עם עין אחת מופנת החוצה- אל המתחרים, אל ההשוואות ואל הציפיות. כשפגשתי לראשונה את היוגה, מצאתי משהו שונה לחלוטין. זה היה המקום הראשון בו כל תשומת הלב שלי הופנתה פנימה, אל הגוף שלי, אל הנפש שלי, והקשר העמוק בינהם. היוגה לימדה אותי שהגוף והנפש שלנו זקוקים ליחס משתנה בכל יום ושאין צורך להיות ״בפסגה״ כל הזמן.
            </p>
            <p className="about-sum">יותר מכל, היוגה העניקה לי שקט- מקום לעצור את תנודות המחשבה, להשתחרר מהסיפורים שהמיינד שלי מספר לעצמו ללא הפסקה, ולהתחבר באמת לעצמי. דרך היוגה למדתי להתמודד עם אתגרים, כאבים ומשימות שבעבר היו נראות בלתי אפשריות, ולבנות חיים בהם השלווה והאמת הפנימית מובילות אותי.
            </p>
            <p className="about-sum">כיום, המטרה שלי היא להעביר את המתנה הזאת הלאה. אני רוצה לחלוק עם אחרים לא רק את התרגול הפיזי של היוגה, אלא גם את ליבה- את המהות העמוקה שלה שיכולה לשנות חיים, להוביל לרוגע פנימי ולקרבה לאמת האישית של כל אחד. אני מאמינה שדרך היוגה אנשים יכולים להיות גרסא שלמה יותר, חזרה ושלווה יותר של עצמם ואני כאן ללוות אותכם בדרך. </p>
        </section>

    </section>
}

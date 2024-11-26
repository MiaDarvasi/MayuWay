
import mayu1 from "../assets/imgs/mayu1.jpeg";
import logo from "../assets/imgs/logoclean.png";

import ig from "../assets/imgs/icons/ig.svg";
import whatsup from "../assets/imgs/icons/whatsup.svg";



export function About() {
    return <section className="about" id="about">
        <section className="about-top">
            <img className="main-profile-img" src={mayu1} />
            <section className="about-title">
                <section className="about-title-content">
                    <img className="logo" src={logo} />
                    <p>Maya Waisman</p>
                    <section className="about-social">
                        <a><img src={ig} /></a>
                        <a><img src={whatsup} /></a>
                    </section>
                </section>
            </section>
            <section>
            </section>
        </section>
        <p className="mayu-catchphrase">אנחנו כבר כל מה שאנחנו שואפים להיות. גם ברגעים הקשים, הטוב והיופי כבר בתוכנו- רק צריך לאפשר להם להתגלות </p>
        <section className="about-sum-content">
            <h1 className="about-sum-title">קצת עליי</h1>
            <p className="about-sum">הייתי ספורטאית תחרותית תמיד רודפת אחרי הישגים, תארים והכרה, ותמיד עם עין אחת מופנת החוצה- אל המתחרים, אל ההשוואות ואל הציפיות. כשפגשתי לראשונה את היוגה, מצאתי משהו שונה לחלוטין. זה היה המקום הראשון בו כל תשומת הלב שלי הופנתה פנימה, אל הגוף שלי, אל הנפש שלי, והקשר העמוק בינהם. היוגה לימדה אותי שהגוף והנפש שלנו זקוקים ליחס משתנה בכל יום ושאין צורך להיות ״בפסגה״ כל הזמן.
            </p>
            <br />
            <p className="about-sum">יותר מכל, היוגה העניקה לי שקט- מקום לעצור את תנודות המחשבה, להשתחרר מהסיפורים שהמיינד שלי מספר לעצמו ללא הפסקה, ולהתחבר באמת לעצמי. דרך היוגה למדתי להתמודד עם אתגרים, כאבים ומשימות שבעבר היו נראות בלתי אפשריות, ולבנות חיים בהם השלווה והאמת הפנימית מובילות אותי.
            </p>
            <br />
            <p className="about-sum">כיום, המטרה שלי היא להעביר את המתנה הזאת הלאה. אני רוצה לחלוק עם אחרים לא רק את התרגול הפיזי של היוגה, אלא גם את ליבה- את המהות העמוקה שלה שיכולה לשנות חיים, להוביל לרוגע פנימי ולקרבה לאמת האישית של כל אחד. אני מאמינה שדרך היוגה אנשים יכולים להיות גרסא שלמה יותר, חזרה ושלווה יותר של עצמם ואני כאן ללוות אותכם בדרך. </p>
        </section>

    </section>
}

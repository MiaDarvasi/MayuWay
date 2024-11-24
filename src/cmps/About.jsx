
import mayu1 from "../assets/imgs/mayu1.jpeg";
import lotus from "../assets/imgs/lotus.svg";



export function About() {
    return <section className="about" id="about">
        <div className="logo">
            <img src={lotus} />
            <p>Maya Weissman</p>
        </div>
        <img className="main-profile-img" src={mayu1} />

    </section>
}

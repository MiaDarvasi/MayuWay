import ig from "../assets/imgs/icons/ig.svg";
import whatsup from "../assets/imgs/icons/whatsup.svg";
import butterfly from "../assets/imgs/butterfly.png";



export function Connect() {
    return <section className="connect full" id="connect">
        <img className="connect-butterfly" src={butterfly} />
        <h1>דברו איתי</h1>
        <section>
            <p>Maya Weissman | מאיה וויסמן</p>
            <p>maya.waisman01@gmail.com</p>
        </section>
        <section className="connect-social">
            <a href="https://www.instagram.com/maya_way_yoga/profilecard/?igsh=YXdjcnFqaThtd3Yz" target="blank"><img src={ig} /></a>
            <a href="https://wa.link/31grat" target="blank"><img src={whatsup} /></a>
        </section>
    </section>
}

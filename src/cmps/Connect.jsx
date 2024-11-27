import ig from "../assets/imgs/icons/ig.svg";
import whatsup from "../assets/imgs/icons/whatsup.svg";


export function Connect() {
    return <section className="connect full" id="connect">
        <h1>דברו איתי</h1>
        <section>
            <p>Maya Weissman | מאיה וויסמן</p>
            <p>maya.waisman01@gmail.com</p>
        </section>
        <section className="connect-social">
            <img src={ig} />
            <img src={whatsup} />
        </section>
    </section>
}

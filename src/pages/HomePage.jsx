import { About } from '../cmps/About.jsx'
import { Services } from '../cmps/Services.jsx'
import { Study } from '../cmps/Study.jsx'



export function HomePage() {
    return <section className="home full" id="home">
        <About />
        <Study />
        <Services />
    </section>
}

import { Accordion } from "@/components/molecules/accordion"
import "./basic-paragraph.scss"

function BasicParagraph() {
    return (
        <section className="basic-paragraph">
            <div className="basic-paragraph__top-edge"></div>
            <div className="basic-paragraph__container">
                <div className="basic-paragraph__container-content">
                    <h2>
                        About Me
                    </h2>
                    <p>Anim irure aute occaecat minim nisi anim ad incididunt ea. Incididunt do laborum adipisicing mollit proident deserunt do.</p>
                </div>
                <Accordion items={accordionContent} />
            </div>
        </section>
    )
}

const accordionContent = [
    { title: "Test", content: "this is a test" },
    { title: "Test", content: "this is a test" },
    { title: "Test", content: "this is a test" },
    { title: "Test", content: "this is a test" },
]

export { BasicParagraph }
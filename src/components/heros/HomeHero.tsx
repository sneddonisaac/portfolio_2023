import "./home-hero.scss";

export default function HomeHero() {
    return (
        <section className="home-hero">
            <div />
            <div>
                <h1 className="home-hero_heading">
                    Developing efficient &<br />
                    effective technical <br />
                    teams.
                </h1>
            </div>
            <div className="home-hero_bottom-bar">
                <h3>
                    Current Role:<br />
                    <span className="font-bold">Head of Technology</span>
                </h3>
                <h3>
                    Current Location:<br />
                    <span className="font-bold">Great Britain</span>
                </h3>
            </div>
        </section>
    )
}
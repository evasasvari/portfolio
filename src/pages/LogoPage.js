import { NavLink } from "react-router-dom";

export default function GenBrun() {
    return (
        <main>
            <div className="header">
                <section className="headertype2">
                    <div>
                        <NavLink to="/home">
                            <img className="backarrow" src="images/backarrow.webp" alt="backarrow" />
                        </NavLink>
                    </div>
                    <div>
                        <h1 className="headertype2title">GenBRUN</h1>
                    </div>
                </section>
            </div>
        </main>);
}
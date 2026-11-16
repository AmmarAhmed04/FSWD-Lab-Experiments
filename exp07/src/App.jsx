import { useState, useEffect } from "react";

const skills = [
    ["HTML & CSS", 5],
    ["JavaScript", 4],
    ["React.js", 4],
    ["Node.js", 4]
];

const projects = [
    ["Campus Connect", "Student notice board web app"],
    ["TaskFlow", "Task manager with full CRUD"],
    ["WeatherNow", "Live weather dashboard"]
];

function Header({ dark, toggle }) {
    return (
        <header>
            <h1>Ammar Ahmed</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button onClick={toggle}>{dark ? "Light mode" : "Dark mode"}</button>
            </nav>
        </header>
    );
}

function SkillsTable({ data }) {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <table>
                <tbody>
                    {data.map(([name, rating]) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{rating}/5</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

function ProjectCard({ title, text }) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
}

function ProjectGallery({ data }) {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects">
                {data.map(([title, text]) => (
                    <ProjectCard key={title} title={title} text={text} />
                ))}
            </div>
        </section>
    );
}

function ContactForm() {
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    function submit(e) {
        e.preventDefault();
        if (!name.trim() || !msg.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        alert("Message submitted!");
        setName("");
        setMsg("");
    }

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={submit}>
                <input
                    value={name}
                    placeholder="Your name"
                    onChange={e => setName(e.target.value)}
                />
                <textarea
                    value={msg}
                    placeholder="Your message"
                    onChange={e => setMsg(e.target.value)}
                />
                <button type="submit">Submit</button>
                {error && <p className="error">{error}</p>}
            </form>
        </section>
    );
}

function GitHubStats({ username }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(r => r.json())
            .then(setUser)
            .catch(() => setUser(null));
    }, [username]);

    return (
        <section>
            <h2>GitHub</h2>
            {user ? (
                <p>
                    {user.login}: {user.followers} followers, {user.public_repos} public repos
                </p>
            ) : (
                <p>Loading GitHub stats...</p>
            )}
        </section>
    );
}

export default function App() {
    const [dark, setDark] = useState(false);

    return (
        <div className={dark ? "dark" : ""}>
            <Header dark={dark} toggle={() => setDark(!dark)} />
            <section id="about">
                <h2>About</h2>
                <p>
                    B.E. CSE student at Lords Institute of Engineering and Technology,
                    learning to build full-stack applications with the MERN stack.
                </p>
            </section>
            <SkillsTable data={skills} />
            <ProjectGallery data={projects} />
            <GitHubStats username="AmmarAhmed04" />
            <ContactForm />
        </div>
    );
}

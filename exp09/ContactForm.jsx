// React ContactForm that submits to the Express API (replaces the client-only flow from Exp 7)
import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function submit(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();
        alert(data.message || data.error);

        if (response.ok) {
            setName("");
            setEmail("");
            setMessage("");
        }
    }

    return (
        <form onSubmit={submit}>
            <input value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
            <input value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <textarea value={message} placeholder="Message" onChange={e => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
}

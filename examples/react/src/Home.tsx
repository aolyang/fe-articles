import { Link } from "react-router-dom"

const playgrounds = [{ label: "react-transport", path: "/react-transport" }]
export function HomePage() {
    return (
        <main>
            <h1>home page</h1>
            <h2>playgrounds</h2>
            <hr style={{ margin: "10px 0" }} />
            <div style={{ padding: 10 }}>
                {playgrounds.map((item) => (
                    <Link key={item.path} to={item.path}>
                        {item.label}
                    </Link>
                ))}
            </div>
        </main>
    )
}

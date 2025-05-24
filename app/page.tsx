import Link from "next/link";

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/power-plants">Power Plants</Link>
                </li>
            </ul>
        </div>
    );
}

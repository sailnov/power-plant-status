import Link from "next/link";

export default function Home() {
    return (
        <div className="p-6 max-w-6xl mx-auto w-full">
            <h1 className="text-xl font-bold mb-1">発電量・設備利用率データ</h1>
            <ul className="list-disc pl-6 mb-6">
                <li>
                    <Link
                        className="text-blue-600"
                        href="/data?id=1"
                    >
                        東灘小水力１
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-blue-600"
                        href="/data?id=2"
                    >
                        東灘小水力2
                    </Link>
                </li>
            </ul>
            <h1 className="text-xl font-bold mb-1">発電所監視カメラ</h1>
            <ul className="list-disc pl-6 mb-6">
                <li>
                    <Link
                        className="text-blue-600"
                        href="/webcam?id=1"
                    >
                        東灘小水力１
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-blue-600"
                        href="/webcam?id=2"
                    >
                        東灘小水力2
                    </Link>
                </li>
            </ul>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col py-4">
      <div className="border-l-4 border-l-red-500 flex flex-col px-2 mb-4">
        <p>You onli love one</p>
        <Link href={""} className="text-blue-500 self-end">
          ~mukesh
        </Link>
      </div>
      <div className="border-l-4 border-l-red-500 flex flex-col px-2 mb-4">
        <p>You onli love one</p>
        <Link href={""} className="text-blue-500 self-end">
          ~mukesh
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="text-3xl font-semibold text-white">ProcX</p>
      <p className="text-lg mb-5">Procurement Management System</p>
      <div className="flex flex-row gap-x-4">
        <Link href="/sign-in">
          <Button variant="outline">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
      <Image
        fill={true}
        src="/Home/construction-home-bg.jpg"
        className="absolute -z-10 object-cover object-center"
        alt="Construction Home Background"
      />
    </main>
  );
}

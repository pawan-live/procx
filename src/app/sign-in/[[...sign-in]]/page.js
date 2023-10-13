import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h2 className="mb-8 text-xl text-white">Log in to ProcX</h2>
      <SignIn />
      <Image
        fill={true}
        src="/Home/construction-home-bg.jpg"
        className="absolute -z-10 object-cover object-center"
        alt="Construction Home Background"
      />
    </div>
  );
};

export default Page;

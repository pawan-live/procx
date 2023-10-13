import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h2 className="mb-8 text-xl text-white">Register to ProcX</h2>
      <SignUp />
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

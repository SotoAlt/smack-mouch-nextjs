"use client";

import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth/RainbowKitCustomConnectButton";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const router = useRouter();

  const handlePlayAsGuest = () => {
    router.push("/game"); // Navigate to the game page
  };

  // Function to get the nickname
  const getNickname = () => {
    if (connectedAddress) {
      return connectedAddress.slice(-4); // Get last 4 digits of the address
    }
    return "Guest";
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-end p-4">
          <div className="bg-primary text-primary-content px-4 py-2 rounded-full">{getNickname()}</div>
        </div>
        <div className="flex items-center flex-col flex-grow pt-10">
          <h1 className="text-center text-4xl font-bold mb-4">Smack Mouch</h1>
          <div className="flex flex-col space-y-4">
            <button onClick={handlePlayAsGuest} className="btn btn-primary">
              Play as Guest
            </button>
            <RainbowKitCustomConnectButton />
          </div>
          {connectedAddress && <p className="mt-4">Connected Address: {connectedAddress}</p>}
        </div>
      </div>
    </>
  );
};

export default Home;

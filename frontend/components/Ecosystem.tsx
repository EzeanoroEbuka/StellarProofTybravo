"use client";

import Image from "next/image";

const CREATOR_STACK = [
  { name: "MetaMask", src: "/logos/metamask.svg" },
  { name: "WalletConnect", src: "/logos/walletconnect.svg" },
  { name: "IPFS", src: "/logos/ipfs.svg" },
  { name: "Arweave", src: "/logos/arweave.svg" },
];

const DEVELOPER_STACK = [
  { name: "Ethereum", src: "/logos/ethereum.svg" },
  { name: "Polygon", src: "/logos/polygon.svg" },
  { name: "Arbitrum", src: "/logos/arbitrum.svg" },
  { name: "Optimism", src: "/logos/optimism.svg" },
  { name: "Filecoin", src: "/logos/filecoin.svg" },
];

function LogoMarquee({ items }: { items: typeof CREATOR_STACK }) {
  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="group flex h-20 w-44 items-center justify-center
                       rounded-xl border border-white/5
                       bg-white/5 backdrop-blur
                       transition-all duration-300
                       hover:border-primary/40 hover:bg-white/10"
          >
            <div
              className="relative h-10 w-28 grayscale transition-all duration-300
                         group-hover:grayscale-0
                         group-hover:drop-shadow-[0_0_14px_rgba(37,106,244,0.6)]"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-darkblue to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-darkblue to-transparent" />
    </div>
  );
}

export default function Ecosystem() {
  return (
    <section className="relative bg-darkblue py-32">
      {/* Global glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px]
                        -translate-x-1/2 -translate-y-1/2
                        rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        

        <div className="mb-24 text-center">
          <h2 className="text-4xl font-semibold text-white">
            Ecosystem Integrations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-md text-gray-300">
            StellarProof is built as core Web3 infrastructure — seamlessly
            connecting creators and developers to the tools they already trust.
          </p>
        </div>

       
        <div id="creator" className="scroll-mt-32 grid place-items-center">
          <h3 className="text-2xl font-semibold text-white">
            For Creators
          </h3>
          <p className="mt-3 max-w-xl text-md text-center text-gray-300">
            Publish, verify, and protect digital work using familiar wallets
            and decentralized storage networks.
          </p>

          <LogoMarquee items={CREATOR_STACK} />
        </div>

     
        <div id="developer" className="mt-32 scroll-mt-32 grid place-items-center">
          <h3 className="text-2xl font-semibold text-white">
            For Developers
          </h3>
          <p className="mt-3 max-w-xl text-md text-center text-gray-300">
            Integrate StellarProof directly into your stack using battle-tested
            blockchains and decentralized infrastructure.
          </p>

          <LogoMarquee items={DEVELOPER_STACK} />
        </div>
      </div>
    </section>
  );
}
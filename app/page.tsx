"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Fetching NFT data
    fetch("/api/nfts?limit=5")
      .then((response) => response.json())
      .then((data) => setNfts(data))
      .catch((error) => console.error("Error fetching NFT data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">
        NFT Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* NFT Image */}
            <img
              src={nft.image_url}
              alt={nft.name}
              className="w-full h-64 object-cover"
            />

            {/* NFT Info */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-100">{nft.name}</h2>
              <p className="text-gray-400 text-sm mt-2">{nft.description}</p>
              <p className="text-green-400 font-bold mt-4">Price: {nft.price}</p>

              {/* Sale Status */}
              {nft.sold ? (
                <p className="text-red-500 font-semibold mt-2">Sold</p>
              ) : (
                <p className="text-green-500 font-semibold mt-2">Available</p>
              )}

              {/* Networks */}
              <div className="mt-4">
                <span className="text-gray-300 text-sm">Networks:</span>
                <ul className="text-gray-400 flex gap-2 mt-2">
                  {nft.networks.map((network, index) => (
                    <li
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-sm rounded-lg"
                    >
                      {network}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buyer Info */}
            {nft.sold && nft.sale_details && (
              <div className="bg-gray-700 p-4 border-t border-gray-600">
                <h3 className="text-gray-100 font-semibold">Buyer:</h3>
                <div className="flex items-center mt-2">
                  <img
                    src={nft.sale_details.buyer.profile_image}
                    alt={nft.sale_details.buyer.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-gray-100 font-medium">
                      {nft.sale_details.buyer.name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {nft.sale_details.buyer.wallet_address}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

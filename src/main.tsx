import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import "./styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <App />
    </Web3sdkioProvider>
  </React.StrictMode>
);

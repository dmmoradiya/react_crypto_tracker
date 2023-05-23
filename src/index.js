import React from "react";
import process from 'process';
import buffer from 'buffer';
// global.Buffer = buffer.Buffer;
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";
<script defer src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.padEnd|always"></script>
ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);

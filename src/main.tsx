import React from "react";
import ReactDOM from "react-dom/client";
import App from "../app/Page.tsx";
import "../app/globals.css";

// biome-ignore lint/style/noNonNullAssertion: default
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
	console.log(message);
});

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
	const [count, setCount] = useState(0);

	const handleClick = async () => {
		// IPC経由でmainプロセスにマウス操作を依頼
		console.log("Requesting to move mouse to center and click");
		const result = await ipcRenderer.invoke("moveMouseToCenterAndClick");
		alert(
			`Mouse moved and clicked at the center of the screen! (x: ${result.x}, y: ${result.y})`,
		);
	};
	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<Button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
				<Button onClick={handleClick}>mouse move</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

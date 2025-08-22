import robot from "robotjs";

export function moveMouseToCenterAndClick() {
	const screenSize = robot.getScreenSize();
	const x = screenSize.width / 2;
	const y = screenSize.height / 2;
	robot.moveMouse(x, y);
	robot.mouseClick();
	return { x, y };
}

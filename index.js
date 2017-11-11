const express = require("express");
const bodyParser = require("body-parser");
const puppeteer = require("puppeteer");
const prependHttp = require("prepend-http");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	// Send built frontend files...
	res.send("hello world");
});

app.post("/api/screenshots", async (req, res) => {
	try {
		const { url, viewports } = req.body;
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.goto(prependHttp(url));
		const screenshot = await getScreenshot(page, viewports[0]);
		res.send(screenshot);
		await browser.close();
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

async function getScreenshot(page, viewport) {
	await page.setViewport({
		width: viewport.width,
		height: viewport.height,
		isMobile: false
	});
	return await page.screenshot();
}

app.listen(3000);

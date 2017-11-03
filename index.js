const express = require("express");
const bodyParser = require("body-parser");
const puppeteer = require("puppeteer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	// Send built frontend files...
	res.send("hello world");
});

app.post("/api/screenshots", async (req, res) => {
	try {
		const viewports = req.body.viewports;
		console.log(viewports);
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.setViewport({
			width: viewports[0].width,
			height: viewports[0].height,
			isMobile: false
		});
		await page.goto("http://kwintenvdb.com");
		const screenshot = await page.screenshot();
		res.send(screenshot);
		await browser.close();
	} catch (e) {
		console.log(e);
	}
});

app.listen(3000);

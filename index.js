const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

app.get("/", (req, res) => {
	// Send built frontend files...
	res.send("hello world");
});

app.get("/api/screenshots", async (req, res) => {
	try {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.setViewport({
			width: 1920,
			height: 1080,
			isMobile: false
		});
		await page.goto("http://kwintenvdb.com");
		const buffer = await page.screenshot();
		res.write(buffer);
		res.end();
	
		await browser.close();
	} catch (e) {
		console.log(e);
	}
});

app.listen(3000);

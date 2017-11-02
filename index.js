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
		const viewport = req.body.viewport;
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.setViewport({
			width: viewport.w,
			height: viewport.h,
			isMobile: false
		});
		await page.goto("http://kwintenvdb.com");
		const screenshot = await page.screenshot();
		const img = new Buffer(screenshot, "base64");
		console.log(img);

		res.writeHead(200, {
			"Content-Type": "image/png",
			"Content-Length": img.length
		});
		res.end(img);
		await browser.close();
	} catch (e) {
		console.log(e);
	}
});

app.listen(3000);

import axios from "axios";

export default async function(url, viewports) {
	const config = {
		responseType: "blob"
	};
	const res = await axios.post("/api/screenshots", {
		url,
		viewports
	}, config);
	return res.data;
}

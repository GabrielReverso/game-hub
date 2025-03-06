const keepOnlyEnglish = (text: string): string => {
	if (!text.includes("Español")) {
		return text;
	}

	const parts = text.split("Español");
	return parts[0].trim();
};

export default keepOnlyEnglish;

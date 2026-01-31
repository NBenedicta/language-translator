document.getElementById("translateBtn").addEventListener("click", async () => {
    const text = document.getElementById("inputText").value.trim();
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;
    const output = document.getElementById("outputText");

    if (!text) {
        output.textContent = "Please enter some text!";
        return;
    }

    output.textContent = "Translating...";

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
    )}&langpair=${source}|${target}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.responseStatus !== 200) {
            throw new Error("Translation failed");
        }

        output.textContent = data.responseData.translatedText;
    } catch (error) {
        console.error(error);
        output.textContent = "Translation failed. Please try again.";
    }
});


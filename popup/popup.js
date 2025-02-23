document.getElementById("showPrivacyTip").addEventListener("click", function () {
    const tips = [
      "Use strong, unique passwords for every site.",
      "Enable two-factor authentication (2FA).",
      "Use a privacy-focused search engine like DuckDuckGo.",
      "Clear cookies and cache regularly.",
      "Avoid clicking on suspicious links."
    ];
    
    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("privacyTip").innerText = randomTip;
  });
  
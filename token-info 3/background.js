importScripts('token-fetch.js');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchToken') {
    const apiKey = 'bc250aa3-bfd6-4854-a435-e3c41c46c6c1'; // Your Helius API key
    const assetId = message.assetId;

    fetchTokenInfo(apiKey, assetId).then((asset) => {
      sendResponse({ asset });
    });

    return true;  // Keeps the message channel open for async response
  }
});

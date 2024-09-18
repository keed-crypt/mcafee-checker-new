const fetchTokenInfo = async (apiKey, assetId) => {
    const url = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'my-request-id',
          method: 'getAsset',
          params: {
            id: assetId,
            displayOptions: {
              showFungible: true, // Optional, can be false for non-fungible tokens
            }
          },
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const { result } = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching token data:", error);
      return null;
    }
  };
  
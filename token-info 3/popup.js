
document.getElementById("tokenForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const tokenMint = document.getElementById("tokenMint").value;
    
    try {
        const response = await fetch("https://pool-burn-mcafee-73bf67791cf5.herokuapp.com/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ tokenMint })
        });

        const data = await response.json();
        
        if (response.ok) {
            document.getElementById("result").innerText = JSON.stringify(data, null, 2);
        } else {
            document.getElementById("result").innerText = "Error: " + data.error;
        }
    } catch (error) {
        document.getElementById("result").innerText = "Something went wrong: " + error.message;
    }
});

document.getElementById('bt').addEventListener('click', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseMessage = document.getElementById('responseMessage');
    const authToken = localStorage.getItem('authToken'); // Get token from local storage
console.log(authToken)
    if (!fullName || !email || !mobile || !message) {
        responseMessage.textContent = 'Please fill in all fields.';
        responseMessage.className = 'error';
        return;
        document.getElementById('bt').addEventListener('click', function (e) {
            e.preventDefault();
        
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const mobile = document.getElementById('mobile').value.trim();
            const message = document.getElementById('message').value.trim();
            const responseMessage = document.getElementById('responseMessage');
            const authToken = localStorage.getItem('authToken'); // Get token from local storage
        
            console.log("Auth Token:", authToken); // Debugging
        
            if (!fullName || !email || !mobile || !message) {
                responseMessage.textContent = 'Please fill in all fields.';
                responseMessage.className = 'error';
                return;
            }
        
            if (!authToken) {
                responseMessage.textContent = 'Authentication error: No token found.';
                responseMessage.className = 'error';
                return;
            }
        
            const data = {
                title: fullName,
                email: email,
                mobile: mobile,
                description: message
            };
        
            fetch('https://library-management-system-backend-6sda.onrender.com/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                console.log("Response Status:", response.status);
                console.log("Response Headers:", response.headers);
        
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
            })
            .then(data => {
                if (data.success) {
                    responseMessage.textContent = 'Feedback submitted successfully!';
                    responseMessage.className = 'success';
                } else {
                    responseMessage.textContent = data.message || 'Something went wrong, please try again.';
                    responseMessage.className = 'error';
                }
            })
            .catch(error => {
                responseMessage.textContent = 'Network error: Unable to connect to the server.';
                responseMessage.className = 'error';
                console.error('Error:', error);
            });
        });
        
    const data = {
        title: fullName,
        email: email,
        mobile: mobile,
        description: message
    };

    fetch('https://library-management-system-backend-6sda.onrender.com/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}` // Send token in header
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            responseMessage.textContent = 'Feedback submitted successfully!';
            responseMessage.className = 'success';
        } else {
            responseMessage.textContent = data.message || 'Something went wrong, please try again.';
            responseMessage.className = 'error';
        }
    })
    .catch(error => {
        responseMessage.textContent = 'Network error: Unable to connect to the server.';
        responseMessage.className = 'error';
        console.error('Error:', error);
    });
});

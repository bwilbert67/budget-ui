const getBaseURL = () => {
    // Check the current URL of the UI to determine the environment
    const isLocalhost = window.location.hostname.includes('localhost');
    
    if (isLocalhost) {
        // If the UI is running on localhost, use the local backend URL
        return 'http://127.0.0.1:8080';  // Replace with your actual local BFF URL if different
    } else {
        // If the UI is not on localhost, use the production API Gateway URL
        return 'http://budget-env.eba-cnytm39p.us-east-2.elasticbeanstalk.com/';
    }
};

export default getBaseURL;

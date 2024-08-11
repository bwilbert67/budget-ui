const baseURL = 'http://127.0.0.1:5000';

// Function to submit form data
export async function submitForm(data) {
    try {
        const response = await fetch(`${baseURL}/form/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log('Form Submission Response:', result);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

export async function getCategories() {
    try {
        const response = await fetch(`${baseURL}/form/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const categories = await response.json();
        return categories;
    } catch (error) {
        console.error('Error retrieving categories:', error);
        return [];
    }
}


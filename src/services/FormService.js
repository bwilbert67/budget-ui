import getBaseURL from './Config';

const baseURL = getBaseURL();

export async function submitForm(data) {
    try {
        const response = await fetch(`${baseURL}/form/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Log the response status for debugging
        console.log('Response Status:', response.status);

        
    } catch (error) {
        // Log errors for debugging
        console.error('Error submitting form:', error);
        // Still reload the page even if there was an error
        window.location.reload();
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
export async function getPurchases() {
    try {
        const response = await fetch(`${baseURL}/form/purchases`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const purchases = await response.json();
        return purchases;
    } catch (error) {
        console.error('Error retrieving purchases:', error);
        return [];
    }
}
export async function getBudgetLeftData() {
    try {
        const response = await fetch(`${baseURL}/form/budget-left-data`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const budgetData = await response.json();
        return budgetData;
    } catch (error) {
        console.error('Error retrieving budget left:', error);
        return null;
    }
}
export async function updateMonthlyData(data) {
    try {
        const response = await fetch(`${baseURL}/form/update-monthly-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        const result = await response.json();
        console.log('Update Monthly Data Response:', result);
    } catch (error) {
        console.error('Error updating monthly data:', error);
    }
}
export async function getMonthlyData() {
    try {
        const response = await fetch(`${baseURL}/form/get-monthly-data`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const monthlyData = await response.json();
        return monthlyData;
    } catch (error) {
        console.error('Error retrieving monthly data:', error);
        return null;
    }
}




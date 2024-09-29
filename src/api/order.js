export const orderUser = async (data) => {
    try {
        const url = 'http://localhost:3977/api/v1/order';
        
        const params = {
            method: 'POST',
            
            body: JSON.stringify(data)
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result;
        return result;

    } catch (error) {
        throw error
    }
}
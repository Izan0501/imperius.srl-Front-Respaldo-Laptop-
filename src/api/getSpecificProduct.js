export const getProduct = async () => {
    
    const location = window.location;
    const path = location.pathname;
    const lastpos = path.lastIndexOf("/");
    const id = path.substr(lastpos + 1);

    try {
        const url = `http://localhost:3977/api/v1//product/${id}`;

        const res = await fetch(url);
        const data = await res.json();

        if (res.status !== 200) throw res;
        return data;
    } catch (error) {
        throw error
    }
}
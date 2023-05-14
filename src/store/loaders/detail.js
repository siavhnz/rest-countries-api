import { API_URL } from "../utility/api-url";

export const loadCountry = async ({ params }) => {
    try {
        const name = params.name.split("_").join(" ");

        // Specific country
        let url = `${API_URL}name/${name}?fullText=true`;
        
        // Fetch data
        const res = await fetch(url);

        if(res.status >= 400) {
            throw new Error(res.statusText);            
        }

        const country = await res.json();
        return { country };
    }
    catch (err) {
        throw new Error(err);
    }
}
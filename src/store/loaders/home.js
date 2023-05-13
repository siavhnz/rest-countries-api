import { API_URL } from "../utility/api-url";

export const loadAllCountries = async ({ request }) => {
    try {
        // All countries
        let url = `${API_URL}all?fields=cioc,flags,name,population,region,capital`;
        
        const requestedUrl = new URL(request.url);
        const q = requestedUrl.searchParams.get("q");
        const r = requestedUrl.searchParams.get("r");
        
        // Filter by user search
        if(q){
            url = `${API_URL}name/${q}`;
        } 
        // Filter by region
        else if (r) {
            url = `${API_URL}region/${r}`;
        }
        
        // Fetch data
        const res = await fetch(url);
        const countries = await res.json();
        return { countries, q, r };
    }
    catch (err) {
        throw new Error(err);
    }
}
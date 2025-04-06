import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);

const shortenURL = async (orginalUrl: string, customUrl?: string) => {
    const response = await axios.post(`${apiUrl}/api/shorten`, {
        original_url: orginalUrl,
        custom_url: customUrl,
    })
    // console.log(response.data);
    return `${apiUrl}/api/${response.data.short_url}`
};

export default shortenURL
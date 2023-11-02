import axios from 'axios'

const API_BASE_URL = 'https://oliverhale.internal.halopsa.com/api'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchData = async (endpoint: string, params: any) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`, { params });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

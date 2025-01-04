import axios from 'axios';
import { ref } from 'vue';

export const useGetData = () => { 
    const loading = ref(true);
    const data = ref(null);
    const errorMsg = ref(null);

    const getData = async (url) => {
        try {
            const response = await axios.get(url)
            data.value = response.data;
        } catch (error) {
            errorMsg.value = error.message;
        } finally {
            loading.value = false;
        }
    }

    return { getData, data, loading, errorMsg }
}
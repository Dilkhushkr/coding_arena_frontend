import api from "./api";

export const getUserProfileApi = async () => {
    const response = await api.get('account/profile/');
    return response.data;
}


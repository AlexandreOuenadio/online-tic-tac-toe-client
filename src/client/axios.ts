import axios from "axios";

export const axiosAuth = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

export const axiosAPI = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const axiosPublic = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/public`,
});

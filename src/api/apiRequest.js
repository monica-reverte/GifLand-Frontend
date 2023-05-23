import api from "./api";

const GHIPHY_BASE_REQUEST = `https://api.giphy.com/v1/gifs/`;

const DEFAULT_PARAMS = {
    api_key: import.meta.env.VITE_API_KEY, 
    limit: 15
}

export const fetchTrending = () => {
    return api.get("trending", {
        baseURL: GHIPHY_BASE_REQUEST,
        params: DEFAULT_PARAMS
    });

};

export const fetchSearched = (query) => {
    return api.get("search", {
        baseURL: GHIPHY_BASE_REQUEST,
        params: {
            ...DEFAULT_PARAMS,
            q: query,
        },
    });
};


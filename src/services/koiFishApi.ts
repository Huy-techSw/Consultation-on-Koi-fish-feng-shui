import axiosClient from "./axiosClient";

const koiFishApi = {
    getAllFish() {
        const url = "/v1/KoiFishes?page=1&limit=10";
        return axiosClient.get(url);
      },
}

export default koiFishApi;
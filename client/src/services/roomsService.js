import httpService from "./httpService";

const roomsEndPoint = "/rooms";

const roomsService = {
    get: async () => {
        const { data } = await httpService.get(roomsEndPoint);
        return data;
    },
    post: async (payload) => {
        const { data } = await httpService.post(roomsEndPoint, payload);
        return data;
    },
};

export default roomsService;

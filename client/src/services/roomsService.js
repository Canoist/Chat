import httpService from "./httpService";

const roomsEndPoint = "rooms/";

const roomsService = {
    get: async () => {
        const { data } = await httpService.get(roomsEndPoint);
        return data;
    },
    post: async (payload) => {
        console.log(payload);
    },
};

export default roomsService;

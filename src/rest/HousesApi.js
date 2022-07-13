// const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
const HOUSES_ENDPOINT = 'https://62b51cffda3017eabb14e834.mockapi.io/houseProject';

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;

        } catch (e) {
            console.log('Looks like fetchHouses had an issue', e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log('Looks like updating houses had an issue', e)
        }

    }
}


export const housesApi = new HousesApi();


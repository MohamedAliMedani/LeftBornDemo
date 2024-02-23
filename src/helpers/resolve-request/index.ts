export const resolveRequest = async (request: (...ff: any) => any, store: (data: any) => void, ...params: Array<any>) => {
    try {
        let data = await request(...params);
        store(data);
    } catch (e) {
        console.log('e', e)
        store([]);

    }

}
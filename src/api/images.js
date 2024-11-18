import client from './pocketbase';
import generateURL from '../utils/generateURL.js'

export async function viewTotes() {
    try {
        const records = await client.collection('Totes').getFullList();

        const recordsWithUrls = records.map(record => ({
            ...record,
            url: generateURL(record, record.Image),
        }));

        //console.log(recordsWithUrls);
        return recordsWithUrls;

    } catch (error) {
        console.log('ERROR: ', error);
    }
}
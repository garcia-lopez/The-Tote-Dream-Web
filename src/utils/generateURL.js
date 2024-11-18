import client from '../api/pocketbase.js';

export default function generateURL(record, imageField) {

    if (record && imageField) {
        
        const imageUrl = client.getFileUrl(record, imageField);
        
        return imageUrl;
    }

    return null; 
}


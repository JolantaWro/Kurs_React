import { createClient } from 'pexels';

class Redaction {
    constructor() {
        this.portal = "";
    }
    findPhotos(category) {
        this.portal.findPhotos(category);
    }
    setStrategy(strategy) {
        this.portal = strategy;
    }
}

class Pexels {
    constructor() {
        this.apiKey = "gLBDEubJcLgIj6taQc4DLJjVXkX3Dd2xIxf8xFbd85aaZB2UkIh1FgTP";
    }
    findPhotos(category) {
        const client = createClient(this.apiKey);
        const query = category;

        const getData = async (client, query) => {
            const r = await client.photos.search({ query, per_page: 50 });
            console.log(r.photos);
            return r.photos;
        }

        return getData(client, query);
    }
}

class Pixabay {
    constructor() {
        this.apiKey = "34586294-b634b5be29dfc96939f0d320c";
    }
    findPhotos(category) {
        const getData = async (url) => {
            const r = await fetch(url);
            const data = await r.json();
            console.log(data);
            return data.hits;
        }
        return getData(`https://pixabay.com/api/?key=${this.apiKey}&category=${category}&image_type=photo`);
    }
}

const pexel = new Pexels();
const pixabay = new Pixabay();
const redaction = new Redaction();
redaction.setStrategy(pexel);
redaction.findPhotos("Nature");
redaction.setStrategy(pixabay);
redaction.findPhotos("Nature");
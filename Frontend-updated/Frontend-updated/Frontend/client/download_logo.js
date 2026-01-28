import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const destDir = path.join(__dirname, 'public/images/docs');
const dest = path.join(destDir, 'cdac-logo.png');
const url = 'https://upload.wikimedia.org/wikipedia/commons/a/a2/C-DAC_Logo.png';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

async function download() {
    console.log('Downloading to:', dest);
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });
        const writer = fs.createWriteStream(dest);
        response.data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', () => {
                console.log('Download success');
                resolve();
            });
            writer.on('error', reject);
        });
    } catch (error) {
        console.error('Download failed:', error.message);
    }
}

download();

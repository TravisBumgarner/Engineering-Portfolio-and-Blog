import { readdir, stat, writeFile } from 'fs/promises';
import { join } from 'path';
import { encodeImageToBlurHash } from './blur-hash';

const PHOTO_PATH = '/Users/travisbumgarner/Programming/Engineering-Portfolio-and-Blog/app/public';
const OUTPUT_FILE = './output.json';

const processImages = async (dir: string, output: Record<string, any>) => {
    const files = await readdir(dir);
    for (const file of files) {
        const filePath = join(dir, file);
        const fileStat = await stat(filePath);
        const isValidPhoto = file.endsWith('.jpg') || file.endsWith('.png')
        if (fileStat.isDirectory()) {
            await processImages(filePath, output);
        } else if (fileStat.isFile() && isValidPhoto) {
            console.log('\tProcessing:', filePath);
            const { blurHash, width, height } = await encodeImageToBlurHash(filePath);
            const relativePath = filePath.replace(PHOTO_PATH, '');
            console.log(relativePath)
            if(output[relativePath]){
                console.error('Duplicate file path:', relativePath);
                process.exit(1);
            }

            output[relativePath] = {blurHash, width, height};
        }
    }
};

const main = () => {
    const output: Record<string, string> = {};
    processImages(PHOTO_PATH, output)
        .then(() => writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2)))
        .then(() => console.log('Done!'))
        .catch((err) => console.error(err));
}
main()
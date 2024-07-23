const sharp = require('sharp');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs').promises;
const path = require('path');

const argv = yargs(hideBin(process.argv))
    .option('input', {
        describe: 'Directory with images to be compressed',
        type: 'string',
        demandOption: true
    })
    .option('output', {
        describe: 'Directory where compressed images will be saved',
        type: 'string',
        demandOption: true
    })
    .parse();

const inputDir = argv.input;
const outputDir = argv.output;

async function compressImages(inputDir, outputDir) {
    try {
        const files = await fs.readdir(inputDir);

        if (outputDir) {
            await fs.mkdir(outputDir, { recursive: true });
        }

        const compressPromises = files.map(async file => {
            const inputPath = path.join(inputDir, file);
            const outputPath = outputDir ? path.join(outputDir, file) : inputPath;

            try {
                await sharp(inputPath)
                    .resize(800)
                    .toFile(outputPath);
                console.log(`Image ${file} compressed and saved to ${outputPath}`);
            } catch (err) {
                console.error(`Error compressing ${file}: ${err.message}`);
            }
        });

        await Promise.all(compressPromises);
        console.log('All images compressed successfully');
    } catch (err) {
        console.error(`Error reading directory: ${err.message}`);
    }
}

compressImages(inputDir, outputDir).catch(err => console.error(`Unexpected error: ${err.message}`));

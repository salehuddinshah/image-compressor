# Image Compression Utility

## Description

This project is an image compression utility built with Node.js and the Sharp library. It allows you to compress all images in a specified input directory and save the compressed images to an optional output directory. If no output directory is provided, the original images will be overwritten.

## Features

- Compress images to a specified size (default is 100 pixels width).
- Save compressed images to a specified output directory or overwrite the original images.
- Concurrent processing of multiple images for improved performance.

## Requirements

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/image-compression-utility.git
    ```

2. Navigate to the project directory:

    ```sh
    cd image-compression-utility
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

Run the script with the following command:

```sh
node index.js --input <input-directory> --output <output-directory>

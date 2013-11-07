# jekyll2harp

A script to convert posts with YAML metadata (as used by Jekyll) to bare files with the metadata in data.json (Harp's format)

It also notices leading dates in file names and moves them to data.json.

It requires that you pass a non-existent destination directory, and does not modify any existing files/directories.


## Note 

This script doesn't try to preserve URLs. Harp doesn't add a trailing slash by default. If you have control over your web server you could manually set up redirects via `.htaccess` or similar. I decided to just go ahead and break URLs.

## Install

```bash
npm install -g jekyll2harp
```

## Usage

```
% jekyll2harp -h                                                                                                                                                                  ✭

  Usage: jekyll2harp [options] <file ...>

  Options:

    -h, --help                  output usage information
    -V, --version               output the version number
    -s --skip_keys <skip_keys>  Skip keys
    -d --dest <dest>            Destination directory
```

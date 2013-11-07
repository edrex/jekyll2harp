# jekyll2harp

A script to convert posts from Jekyll to Harp

 - Moves YAML metadata into data.json
 - Notices leading dates in file names and moves them to data.json
 - Outputs to a fresh directory, never modifies existing files or folders
 - Strips out metadata keys specified with `-s`

Note that this script doesn't preserve old URLs. The best approach would probably be send `301 moved permanently` for all your old URLs using `.htaccess` or similar.

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

# jekyll2harp

A script to convert posts from Jekyll to Harp

## Example:

```
cd mysite/_posts
jekyll2harp -d ./out mysite/_posts/*.md
```

## Features

 - Parses YAML metadata
 - Parses leading dates in file names 
 - Outputs files with metadata stripped
 - Saves metadata to `_data.json`
 - Outputs to a fresh directory, never modifies existing files or folders
 - Strips out metadata keys specified with `-s`

## Things to know

 - The order of documents in `_data.json` is the order that you specify files in. You may have to reorder after converting. 
 - Think carefully about which metadata fields you want to strip out. The defaults are `layout` and `published`.
 - This script doesn't try to preserve old URLs. This sort of thing is possible, but depends on how you plan to deploy (nginx, apache, s3, etc)

## Install

```bash
npm install -g jekyll2harp
```

Or if you want to hack on it (pull requests welcome) run it from source like so:

```bash
git clone git@github.com:edrex/jekyll2harp.git
cd jekyll2harp
npm install
npm link
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


## TODO

 * Add sorting (+/-fieldname)

# testrange
*Simple and clean gulp-based project.*
***

## How to get
### Requirements:
Testrange uses **[gulp](http://gulpjs.com/ "Gulp.js")**, so you need **[node.js](https://nodejs.org/en/ "Node.js")** and **npm** placed in your system.
Execute following to check it installed:
```sh
node --version
npm --version
```
Do not forget to install gulp globally:
```sh
npm install gulp -g
```
### Get the testrange
1. Clone the repo to ```<yourProjectDirectory>```:
```sh
git clone git@github.com:51ck/testrange.git <yourProjectDirectory>
```
2. Install requiried node modules locally in ```<yourProjectDirectory>```:
```sh
npm install
```
3. Run it:
```sh
gulp
```
If your browser popped up with blank page at `localhost:3000` you have done all right.
***

## Usage
Your work directory is `src/` now. You should place your index and other **.html** files there.
Place **.js** in `src/js/`, **.sass** and **.css** in `src/styles/`, use `src/static/` for images etc.

**Gulp** compiles your project and places the result to `release/`. Then it launches web-server in this folder.

|Type|Source|Files|Destinition|
|---|---|---|---|
|Pages|`src/`|**.html**|`release/`|
|Styles|`src/styles/`|**.css**, **.sass**|`release/css/`|
|Scripts|`src/js/`|**.js**|`release/js/`|
|Static|`src/static/`|__.*__|`release/static/`|

Finally open `gulpfile.js`and feel free to edit it.
Do not forget to remove all my info from `package.json`.

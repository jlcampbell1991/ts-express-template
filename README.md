### Install
1. Open `~/.bash_profile` or make if it doesn't exist.
2. Add function:
```
function ts-express() {
  node /Users/username/path/to/ts-express/index.js $1
}

export -f ts-express
```
3. Restart terminal
4. ts-express <new-app-name>

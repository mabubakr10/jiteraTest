import fs from 'fs'

class ReadFile {
  async readFileWithKey (filename, key) {
    const fileData = fs.readFileSync('src/data/' + filename + '.json');
    const parsedData = JSON.parse(fileData);
    return parsedData[key];
  }

  async writeFileWithKey (filename, key, value) {
    const jsonData = this.readFileWithKey(filename, key)
    jsonData[key] = value
    fs.writeFileSync('src/data/' + filename + '.json', JSON.stringify(jsonData))
  }
}
export default new ReadFile()

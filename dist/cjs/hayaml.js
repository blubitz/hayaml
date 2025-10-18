const yaml = require('js-yaml')
const { html2json, json2html } = require('../../lib/html2json/src/html2json.js')

class HAYAML {
    static stringify(originalObj) {
        const obj = JSON.parse(JSON.stringify(originalObj))

        function traverse(obj) {
            for (const [k, v] of Object.entries(obj)) {
                try {
                    if (typeof v == "string" && k == 'content') {
                        obj[k] = html2json(v)
                    } else if (typeof v == "object") {
                        traverse(v)
                    }
                } catch (err) { }
            }
        }

        traverse(obj)
        return yaml.dump(obj)
    }

    static parse(hayaml) {
        const obj = yaml.load(hayaml)

        function traverse(obj) {
            for (const [k, v] of Object.entries(obj)) {
                try {
                    if (v.node) {
                        obj[k] = json2html(v)
                    } else if (typeof v == "object") {
                        traverse(v)
                    }
                } catch (err) { }
            }
        }

        traverse(obj)
        return obj
    }
}

module.exports = HAYAML

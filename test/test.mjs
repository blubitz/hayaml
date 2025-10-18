import HAYAML from 'hayaml'

const data = {
    "type": "image-gallery",
    "gallery-title": "Summer Vacation",
    "content": {
        "type": "image-panel",
        "content": "<div class=\"center\"><img src=\"vacation1.png\" style=\"max-width:200px\" alt=\"beach\"></div>"
    }
}

const serialized = HAYAML.stringify(data)
const deserialized = HAYAML.parse(serialized)

console.log('\n\nYAML')
console.log(serialized)
console.log('\n\nObject')
console.log(deserialized)
console.log('\n\nMatch:', JSON.stringify(deserialized) == JSON.stringify(data))
console.log(JSON.stringify(deserialized))
console.log(JSON.stringify(data))
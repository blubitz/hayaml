const fs = require('fs');

const [src, dest] = process.argv.slice(2)

// Delete destination if it exists
if (fs.existsSync(dest)) fs.unlinkSync(dest);

// Move the file
fs.renameSync(src, dest);


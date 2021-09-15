const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "../db/contacts.json");

async function listContacts() {
  try {
    const contactsFile = await fs.readFile(contactsPath, "utf8");
    const contactsParsed = JSON.parse(contactsFile);
    console.table(contactsParsed);
  } catch (error) {
    console.log(error);
  }
}

module.exports = listContacts;

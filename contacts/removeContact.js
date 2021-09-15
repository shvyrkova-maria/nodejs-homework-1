const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "../db/contacts.json");

async function removeContact(contactId) {
  try {
    const contactsFile = await fs.readFile(contactsPath, "utf8");
    const contactsParsed = JSON.parse(contactsFile);
    const contactsFiltred = contactsParsed.filter(
      ({ id }) => String(id) !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(contactsFiltred, null, 2));
    console.table(contactsFiltred);
  } catch (error) {
    console.log(error);
  }
}

module.exports = removeContact;

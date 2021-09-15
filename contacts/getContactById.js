const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "../db/contacts.json");

async function getContactById(contactId) {
  try {
    const contactsFile = await fs.readFile(contactsPath, "utf8");
    const contactsParsed = JSON.parse(contactsFile);

    contactsParsed.map((contact) => {
      if (String(contact.id) === contactId) {
        console.log(contact);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = getContactById;

const { nanoid } = require("nanoid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "../db/contacts.json");

async function addContact(name, email, phone) {
  try {
    const contactsFile = await fs.readFile(contactsPath, "utf8");
    const contactsParsed = JSON.parse(contactsFile);
    contactsParsed.push({
      id: nanoid(2),
      name: name,
      email: email,
      phone: phone,
    });
    await fs.writeFile(contactsPath, JSON.stringify(contactsParsed, null, 2));
    console.table(contactsParsed);
  } catch (error) {
    console.log(error);
  }
}

module.exports = addContact;

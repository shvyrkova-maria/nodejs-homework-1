// const { nanoid } = require("nanoid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
  const contactsFile = await fs.readFile(contactsPath, "utf8");
  const contactsParsed = JSON.parse(contactsFile);
  console.table(contactsParsed);
}

async function getContactById(contactId) {
  const contactsFile = await fs.readFile(contactsPath, "utf8");
  const contactsParsed = JSON.parse(contactsFile);

  contactsParsed.map((contact) => {
    if (contact.id === contactId) {
      console.log(contact);
    }
  });
}

async function removeContact(contactId) {
  const contactsFile = await fs.readFile(contactsPath, "utf8");
  const contactsParsed = JSON.parse(contactsFile);
  const contactsFiltred = contactsParsed.filter(
    ({ id }) => id !== Number(contactId)
  );
  await fs.writeFile(contactsPath, JSON.stringify(contactsFiltred, null, 2));
  console.table(contactsFiltred);
}

async function addContact(name, email, phone) {
  const contactsFile = await fs.readFile(contactsPath, "utf8");
  const contactsParsed = JSON.parse(contactsFile);
  contactsParsed.push({
    // id: nanoid(2),
    name: name,
    email: email,
    phone: phone,
  });
  await fs.writeFile(contactsPath, JSON.stringify(contactsParsed, null, 2));
  console.table(contactsParsed);
}

module.exports = { listContacts, getContactById, removeContact, addContact };

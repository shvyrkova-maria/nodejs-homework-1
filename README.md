### Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
[https://monosnap.com/file/hFCwsNr5vdVAUXN0OFCx26HpFncj1g](https://monosnap.com/file/hFCwsNr5vdVAUXN0OFCx26HpFncj1g)

### Получаем контакт по id

node index.js --action get --id 5
[https://monosnap.com/file/0atV5iWwbMVV1edv5Pes64jhFr0fQx](https://monosnap.com/file/0atV5iWwbMVV1edv5Pes64jhFr0fQx)

### Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
[https://monosnap.com/file/GtbcWxpOfCRtyTn3NRvzVhFJjghxtq](https://monosnap.com/file/GtbcWxpOfCRtyTn3NRvzVhFJjghxtq)

### Удаляем контакт

node index.js --action remove --id=3
[https://monosnap.com/file/mwrGMGJpVu21nOI9kkwRRtS2AuvQoU](https://monosnap.com/file/mwrGMGJpVu21nOI9kkwRRtS2AuvQoU)

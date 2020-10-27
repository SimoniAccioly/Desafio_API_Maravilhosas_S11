let data = require('../data/data.json');

//selectAllData
const selectAllData = () => data;

//selectDataById
const selectDataById = (id) => data.find(item => item.id === id);

//insertData
const insertData = (newData) => {
    const { name, photo, subtitle, about, phrase, history } = newData

    const existName = data.find(data => data.name == name)
    const isAllFieldsFilled = name && photo && subtitle && about && phrase && history

    if (isAllFieldsFilled) {        

        if(!existName) {

            const id = (data.length > 0) ? data[data.length - 1].id + 1 : 1;

            const addedData = {
                id: id,
                name: name,
                photo: photo,
                subtitle: subtitle,
                about: about,
                phrase: phrase,
                history: history
            }
    
            data.push(addedData)

            return addedData 
            
        } else {
            return 'Maravilhosa já existe no banco de dados!'
        }
              
    }
}

//updateData
const updateData = (updatedData, id) => {
    const ids = data.map(data => data.id)
    const index = ids.indexOf(id)
    if(index !== -1) {
        const dataUpdate = { id, ...updatedData}
        data.splice(index, 1, dataUpdate)
        return dataUpdate
    }
    
} 

//deleteData
const deleteData = (id) => {
    const dataToDelete = data.find(item => item.id === id)
    if (dataToDelete) {
        const index = data.indexOf(dataToDelete)
        data.splice(index, 1)
        return data
    }
}

module.exports = {
    selectAllData,
    selectDataById,
    insertData,
    updateData,
    deleteData
}
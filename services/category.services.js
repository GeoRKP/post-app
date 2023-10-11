const CategoryEntity = require('../model/Category').CategoryEntity
const dataSource = require('../connect').dataSource



function findAll() {
    return dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder
        .select('category')
        .from(CategoryEntity, 'category')
        .getMany()
}

function findOne(id) {
    return dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .select('ct')
        .from(CategoryEntity, 'ct')
        .where("ct.id = :id", {id: id})
        .getOne()
}

function create(name) {
    return dataSource
            .getRepository(CategoryEntity)
            .createQueryBuilder()
            .insert
            .into(CategoryEntity)
            .values([
                {name: name}
            ])
            .execute()
            .catch(error => console.log(error))
}

function update(data) {
    return dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .update(CategoryEntity)
        .set({name: data.name})
        .where("id= :id", {id: data.id})
        .execute()
        .catch(error => console.log(error))
}

function deleteCategory(id) {
     return dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .delete()
        .from(CategoryEntity)
        .where("id= :id", {id: id})
        .execute()
        .catch(err => console.log(err))
}

module.exports = { findAll, create, findOne, update, deleteCategory }

require('mongoose')

class BaseService {
    constructor(model) {
        this.model = model,
            this.filename = model.name
    }

    save(objects) {
        return this.model.insertMany(objects)
    }

    load() {
        return this.model.find()
    }

    async insert(object) {
        return await this.model.create(object)
    }

    async findBy(property, value) {
        return await this.model.find({ [property]: value })
    }
}

module.exports = BaseService
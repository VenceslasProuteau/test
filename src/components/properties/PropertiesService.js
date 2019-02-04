const properties = require('./generated-property');

export const PropertiesService = {
    fetch() {
        return new Promise((resolve, reject) => resolve([properties]));
    }
}
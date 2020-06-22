module.exports = () => {
    const faker = require( 'faker' );
    const data = { products: [] }

    for ( let i = 0; i < 50; i++ ) {
        const product = { id: faker.random.uuid().split( '-' )[0], name: faker.commerce.productName(), price: faker.commerce.price( 1, 999, 2, '€ ' ), brand: faker.company.companyName() };
        data.products.push( product );
    }

    return data;
}
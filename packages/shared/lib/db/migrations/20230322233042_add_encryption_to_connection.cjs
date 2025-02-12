exports.up = async function (knex, _) {
    return knex.schema.withSchema('nango').alterTable('_nango_connections', function (table) {
        table.string('credentials_iv');
        table.string('credentials_tag');
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable('_nango_connections', function (table) {
        table.dropColumn('credentials_iv');
        table.dropColumn('credentials_tag');
    });
};

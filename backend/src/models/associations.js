function associationsBelongsToMany({firstTable, secondTable, nameFKFirstTable, nameFKSecondTable, transitiveTable}){
    firstTable.belongsToMany(secondTable,{
        foreignKey:nameFKFirstTable,
        through:{
            model:transitiveTable
        },
        timestamps:false,
        uniqueKey:false
    });
    secondTable.belongsToMany(firstTable,{
        foreignKey:nameFKSecondTable,
        through:{
            model:transitiveTable
        },
        timestamps:false,
        uniqueKey:false
    });
}
function associationsBelongsTo({firstTable, secondTable, nameFK}) {
    firstTable.belongsTo(secondTable, {foreignKey:nameFK})
};
function associationsHasMany({firstTable, secondTable, nameFK}){
    firstTable.hasMany(secondTable, {foreignKey: nameFK});
};

module.exports = {
    associationsBelongsToMany,
    associationsBelongsTo,
    associationsHasMany
}
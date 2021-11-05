const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    color: 'string?',
    entries: 'Entry[]',
  },
};

export default CategorySchema;

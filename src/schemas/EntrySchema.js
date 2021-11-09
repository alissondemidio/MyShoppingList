const EntrySchema = {
  name: 'Entry',
  primaryKey: 'id',
  properties: {
    id: 'string',
    product: 'string',
    amount: 'double?',
    entryAt: 'string',
    color: 'string?',
    category: 'Category?',
  },
};

export default EntrySchema;

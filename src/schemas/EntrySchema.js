const EntrySchema = {
  name: 'Entry',
  primaryKey: 'id',
  properties: {
    id: 'string',
    product: 'string',
    amount: 'double?',
    entryAt: 'date',
    color: 'string?',
    category: 'Category?',
  },
};

export default EntrySchema;

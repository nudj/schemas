module.exports = {
  created: {
    type: 'string',
    example: {
      fn: 'replace',
      args: ['{{date}}T{{time}}.000+00:00']
    }
  },
  modified: {
    type: 'string',
    example: {
      fn: 'replace',
      args: ['{{date}}T{{time}}.000+00:00']
    }
  },
  companyId: {
    example: {
      fn: 'choice',
      args: [['1']]
    }
  },
  personId: {
    example: {
      fn: 'choice',
      args: [['21']]
    }
  }
}

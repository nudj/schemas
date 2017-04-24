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
  jobId: {
    example: {
      fn: 'choice',
      args: [['1']]
    }
  },
  personId: {
    example: {
      fn: 'choice',
      args: [['22', '23', '24']]
    }
  }
}

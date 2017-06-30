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
      args: [['1', '2', '3', '4', '5']]
    }
  },
  referralId: {
    example: {
      fn: 'choice',
      args: [[null]]
    }
  }
}

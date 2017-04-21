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
  firstName: {
    example: {
      fn: 'first_name'
    }
  },
  lastName: {
    example: {
      fn: 'last_name'
    }
  },
  email: {
    example: {
      fn: 'email'
    }
  },
  url: {
    example: {
      fn: 'url'
    }
  },
  title: {
    example: {
      fn: 'title'
    }
  },
  type: {
    example: {
      fn: 'choice',
      args: [[
        'internal',
        'external'
      ]]
    }
  },
  company: {
    example: {
      fn: 'company_name'
    }
  },
  status: {
    example: {
      fn: 'choice',
      args: [[
        'lead',
        'user'
      ]]
    }
  }
}

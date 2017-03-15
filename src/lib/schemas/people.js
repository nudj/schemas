module.exports = {
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
  urls: {
    example: {
      fn: 'array_of_words',
      args: [3]
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

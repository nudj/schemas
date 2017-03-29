module.exports = {
  title: {
    example: {
      fn: 'title'
    }
  },
  slug: {
    example: {
      fn: 'slug',
      args: ['title']
    }
  },
  url: {
    example: {
      fn: 'url'
    }
  },
  status: {
    example: {
      fn: 'choice',
      args: [[
        'Open',
        'Filled'
      ]]
    }
  },
  bonus: {
    example: {
      fn: 'integer',
      args: [0, 1000]
    }
  },
  description: {
    example: {
      fn: 'description'
    }
  },
  type: {
    example: {
      fn: 'choice',
      args: [[
        'Permanent',
        'Contract',
        'Freelance'
      ]]
    }
  },
  remuneration: {
    example: {
      fn: 'integer',
      args: [25, 120]
    }
  },
  tags: {
    example: {
      fn: 'array_of_words',
      args: [3]
    }
  },
  location: {
    example: {
      fn: 'city'
    }
  },
  companyId: {
    example: {
      fn: 'choice',
      args: [['1', '2', '3', '4', '5']]
    }
  }
}

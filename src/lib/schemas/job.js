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
      fn: 'words',
      args: [3]
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
  },
  related: {
    example: {
      fn: 'array_of_objects',
      args: [{
        url: {
          example: {
            fn: 'replace',
            args: ['/{{word}}/{{word}}-{{word}}']
          }
        },
        title: {
          example: {
            fn: 'title'
          }
        },
        location: {
          example: {
            fn: 'city'
          }
        }
      }, 3]
    }
  }
}

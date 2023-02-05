{
  $jsonSchema: {
    required: [
      'subjects'
    ],
    properties: {
      _id: {
        bsonType: 'objectId'
      },
      name: {
        bsonType: 'string'
      },
      classteacher: {
        bsonType: 'string'
      },
      subjects: {
        bsonType: 'array',
        items: {
          required: [
            '_id'
          ],
          properties: {
            _id: {
              bsonType: 'objectId'
            },
            name: {
              bsonType: 'string'
            },
            teacher: {
              bsonType: 'string'
            },
            color: {
              bsonType: 'string',
              description: 'Hex-Code of color'
            }
          }
        }
      },
      students: {
        bsonType: 'array',
        items: {
          required: [
            'student_id'
          ],
          properties: {
            role_id: {
              bsonType: 'objectId'
            },
            student: {
              bsonType: 'object',
              required: [
                '$ref',
                '$id'
              ],
              properties: {
                $ref: {
                  bsonType: 'string'
                },
                $id: {
                  bsonType: 'objectId'
                }
              }
            }
          }
        }
      },
      roles: {
        bsonType: 'array',
        items: {
          properties: {
            _id: {
              bsonType: 'objectId'
            },
            name: {
              bsonType: 'string'
            },
            permissions: {
              bsonType: 'array',
              items: {
                'enum': [
                  'homework.add',
                  'homework.modify',
                  'homework.delete',
                  'subject.add',
                  'subject.modify',
                  'subject.delete',
                  'class.admin',
                  'comment.delete'
                ]
              }
            }
          }
        }
      },
      homework: {
        bsonType: 'array',
        items: {
          required: [
            '_id'
          ],
          properties: {
            _id: {
              bsonType: 'objectId'
            },
            subject: {},
            body: {
              bsonType: 'string'
            },
            comments: {
              bsonType: 'array',
              items: {
                properties: {
                  _id: {
                    bsonType: 'objectId'
                  },
                  body: {
                    bsonType: 'string'
                  },
                  author: {
                    bsonType: 'object',
                    properties: {
                      $ref: {
                        bsonType: 'string'
                      },
                      $id: {
                        bsonType: 'objectId'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
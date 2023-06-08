
const users = [
    {
      "userId": 1,
      "email": "user1@example.com",
      "login": "user1"
    },
    {
      "userId": 2,
      "email": "user2@example.com",
      "login": "user2"
    }
]

const categories = [
    { "categoryId": 1, "name": 'knitting'},
    { "categoryId": 2, "name": 'crochet'},
    { "categoryId": 3, "name": 'sewing'},
    { "categoryId": 4, "name": 'cross-stitch'},
    { "categoryId": 5, "name": 'embroidery'},
    { "categoryId": 6, "name": 'painting'},
    { "categoryId": 7, "name": 'polymer clay'},
    { "categoryId": 8, "name": 'other'}
  ];

const types = [
    { "typeId": 1, "name": "decoration" },
    { "typeId": 2, "name": "accessory" },
    { "typeId": 3, "name": "clothing" },
    { "typeId": 4, "name": "other" }
  ];

const images = [
    { "imageId": 1 },
    { "imageId": 2 }
  ]
  
const patterns = [
    {
      "patternId": 1,
      "name": "Lily Shawl",
      "userId": 1,
      "typeId": 2,
      "categoryId": 2,
      "imageId": 1
    },
    {
      "patternId": 2,
      "name": "Winter Cowl",
      "userId": 2,
      "typeId": 3,
      "categoryId": 1,
      "imageId": 2
    }
  ]
  
const projects = [
    {
      "projectId": 1,
      "name": "Blue Winter Cowl",
      "userId": 1,
      "typeId": 2,
      "categoryId": 4,
      "patternId": 2,
      "imageId": 1
    },
    {
      "projectId": 2,
      "name": "Ladybug Brooch",
      "userId": 2,
      "typeId": 1,
      "categoryId": 7,
      "patternId": null,
      "imageId": null
    }
  ]

  // export default {patterns, projects, types, categories, images};
  
  
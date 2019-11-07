'use strict'

const db = require('../server/db')
const {User, Product} = require('../server/db/models')
const Checkout = require('../server/db/models/checkout')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const products = [
    {
      name: 'Life Jacket with Shark Fin',
      price: 555,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://ak9.picdn.net/shutterstock/videos/1037370149/thumb/1.jpg?ip=x480',
      type: 'dog'
    },
    {
      name: 'Ripped Denim Jacket',
      price: 499,
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0470/2117/products/squarish_2_2048x.jpg?v=1566880912',
      type: 'dog'
    },
    {
      name: 'Three Piece Suit with Tophat',
      price: 950,
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://img6.androidappsapk.co/300/a/e/4/com.CatsWearingClothesbelbo.png',
      type: 'cat'
    },
    {
      name: 'Sweatshirt',
      price: 399,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://peopledotcom.files.wordpress.com/2018/04/zappa-the-cat-3.jpg',
      type: 'cat'
    },
    {
      name: 'Cozy, Plush Fleece',
      price: 410,
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl:
        'https://www.wanimo.com/img/fiche/selection_nowel/8353/500x500/1/blouson-pour-furet.jpg',
      type: 'other'
    },
    {
      name: 'Lion Mane Trimmed Winter Coat',
      price: 575,
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      imageUrl: 'http://xad.xanga.com/931f8a4602c33284550308/m227046427.jpeg',
      type: 'cat'
    },
    {
      name: 'Cozy Sweather with Bell Sleeves',
      price: 650,
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      imageUrl: 'https://luny.ru/bundles/app/img/photo/olya.png',
      type: 'cat'
    },
    {
      name: 'Preppy Turtleneck Sweater',
      price: 725,
      description:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      imageUrl: 'http://livedoor.blogimg.jp/buzzrall/imgs/c/a/cac997d1.jpg',
      type: 'other'
    },
    {
      name: 'Oversized Acetate Glasses',
      price: 395,
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.',
      imageUrl:
        'https://image.freepik.com/free-photo/border-collie-dog-wearing-black-glasses-isolated-white-background_77749-93.jpg',
      type: 'dog'
    },
    {
      name: 'Five Carat Diamond Dog Collar',
      price: 9999,
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      imageUrl:
        'https://www.puppywire.com/wp-content/uploads/2017/05/la-jeune-tulipe-dog-collar.jpg',
      type: 'dog'
    },
    {
      name: 'Couture Royal Harness Dress',
      price: 975,
      description:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      imageUrl:
        'https://www.puppywire.com/wp-content/uploads/2017/05/couture-futuristic-royal-harness-dress.jpg',
      type: 'dog'
    }
  ]

  const checkoutItems = [
    {
      quantity: 1,
      status: 'Ordered',
      orderId: 1000
    },
    {
      quantity: 2,
      status: 'Fulfilled',
      orderId: 1001
    },
    {
      quantity: 1,
      status: 'In cart',
      orderId: 1002
    },
    {
      quantity: 1,
      status: 'Fulfilled',
      orderId: 1003
    }
  ]

  await Promise.all(
    checkoutItems.map(item => {
      return Checkout.create(item)
    })
  )
  console.log(`seeded ${checkoutItems.length} checkout`)

  await Promise.all(
    products.map(product => {
      return Product.create(product)
    })
  )
  console.log(`seeded ${products.length} products`)

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'ThePug'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      firstName: 'Murphy',
      lastName: 'TheMan'
    })
  ])
  console.log(`seeded ${users.length} users`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

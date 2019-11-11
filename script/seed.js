'use strict'

const db = require('../server/db')
const {User, Product, Orders, OrderItems} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const products = [
    {
      name: 'Life Jacket with Shark Fin',
      price: 555,
      description:
        'A while new way to doggie paddle!  Full-body water flotation support for your dog.  Vest is designed with a cute shark fin that`s flexible, but solid enough to grab onto.',
      imageUrl:
        'https://ak9.picdn.net/shutterstock/videos/1037370149/thumb/1.jpg?ip=x480',
      type: 'dog'
    },
    {
      name: 'Ripped Denim Jacket',
      price: 499,
      description:
        'Oversized denim jacket.  Vintage effect at collar Buttoned flap pockets on chest.  Piped pockets at front.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0470/2117/products/squarish_2_2048x.jpg?v=1566880912',
      type: 'dog'
    },
    {
      name: 'Three Piece Suit with Tophat',
      price: 950,
      description: 'The Downton Abbey look for your gentlemanly cat.',
      imageUrl:
        'https://img6.androidappsapk.co/300/a/e/4/com.CatsWearingClothesbelbo.png',
      type: 'cat'
    },
    {
      name: 'Sweatshirt',
      price: 399,
      description:
        'This Supreme hoodie is the ultimate cozy experience for your cat.  The luxurious sherpa lining takes the coziness to the next level by decking our your pooch in the softest mix of cozy sherpa and marled fleece.',
      imageUrl:
        'https://peopledotcom.files.wordpress.com/2018/04/zappa-the-cat-3.jpg',
      type: 'cat'
    },
    {
      name: 'Cozy, Plush Fleece',
      price: 410,
      description:
        'Northern knit fleece-lined sweater.  Fashion meets function with this fleece.',
      imageUrl:
        'https://www.wanimo.com/img/fiche/selection_nowel/8353/500x500/1/blouson-pour-furet.jpg',
      type: 'other'
    },
    {
      name: 'Lion Mane Trimmed Winter Coat',
      price: 575,
      description: 'Lion mane trimmed winter coat with detachable hood.',
      imageUrl: 'http://xad.xanga.com/931f8a4602c33284550308/m227046427.jpeg',
      type: 'cat'
    },
    {
      name: 'Cozy Sweater with Bell Sleeves',
      price: 650,
      description: 'Hand knit cozy sweater with bell sleeves.',
      imageUrl: 'https://luny.ru/bundles/app/img/photo/olya.png',
      type: 'cat'
    },
    {
      name: 'Preppy Turtleneck Sweater',
      price: 725,
      description: 'Unbelievably soft, cashmere turtleneck sweater.',
      imageUrl: 'http://livedoor.blogimg.jp/buzzrall/imgs/c/a/cac997d1.jpg',
      type: 'other'
    },
    {
      name: 'Oversized Acetate Glasses',
      price: 395,
      description: 'The Warby Parker for your woofie.',
      imageUrl:
        'https://image.freepik.com/free-photo/border-collie-dog-wearing-black-glasses-isolated-white-background_77749-93.jpg',
      type: 'dog'
    },
    {
      name: 'Five Carat Diamond Dog Collar',
      price: 9999,
      description: 'Five carat ethically sourced diamond dog collar.',
      imageUrl:
        'https://www.puppywire.com/wp-content/uploads/2017/05/la-jeune-tulipe-dog-collar.jpg',
      type: 'dog'
    },
    {
      name: 'Couture Royal Harness Dress',
      price: 975,
      description:
        'Taking your best friend to the Met gala?  This couture royal dress with adjustable harness is the look of the season.',
      imageUrl:
        'https://www.puppywire.com/wp-content/uploads/2017/05/couture-futuristic-royal-harness-dress.jpg',
      type: 'dog'
    },
    {
      name: 'Polar Vortex Vest',
      price: 600,
      description:
        'Chevron quilted exterior with 100% goose down insulation. Waterproof, size-adjustable velcro closure, with functional pockets.',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1323/0731/products/UAC0086BK91-Front_BARBOUR_LIDDESDALE_DOG_COAT_2048x2048.jpg?v=1527191069',
      type: 'dog'
    },
    {
      name: 'Fur-Trimmed Wool Blend Coat',
      price: 1100,
      description:
        'Prada`s coat is unapologetically luxurious with its voluminous fur trim and darling mauve color palette. It`s been crafted in Italy from a blend wool, angora and cashgora.',
      imageUrl:
        'https://i.pinimg.com/originals/81/42/8e/81428e6fc23a0e62a128050656eb5af1.jpg',
      type: 'cat'
    },
    {
      name: 'Traditional Hanbok Outfit',
      price: 777,
      description:
        'Luxury traditional hanbok ceremonial outfit for your bunny.',
      imageUrl:
        'https://live.staticflickr.com/8519/8548033974_0b9bb28560_b.jpg',
      type: 'cat'
    },
    {
      name: 'Acid Washed Vest and Hat ',
      price: 695,
      description: 'Hip acid washed designer vest and hat.',
      imageUrl:
        'https://files.slack.com/files-pri/T024FPYBQ-FPZ3VFRRQ/image.png',
      type: 'dog'
    },
    {
      name: 'Fleece-Lined Grey hoodie',
      price: 899,
      description: 'Sherpa fleece-lined grey hoodie with zip front.',
      imageUrl: 'https://i.ebayimg.com/images/g/kbQAAOSwZGFdZq6y/s-l300.jpg',
      type: 'dog'
    },
    {
      name: 'Everest Explorer Jacket',
      price: 499,
      description:
        'The warmth of a parka combined with the flexibility of a vest.',
      imageUrl:
        'https://files.slack.com/files-pri/T024FPYBQ-FQDNMKF0X/image.png',
      type: 'dog'
    },
    {
      name: 'Down Hoodie Jacket',
      price: 599,
      description:
        'Sporty take on a classic down jacket includes toasty extras like long recessed knit cuffs and a plush, fur-trimmed hood for a look that`s both slopes-and downtown-streets-worthy.',
      imageUrl:
        'https://files.slack.com/files-pri/T024FPYBQ-FQBD3FY5S/image.png',
      type: 'dog'
    }
  ]

  const orders = [
    {
      status: 'Ordered',
      userId: 1
    },
    {
      status: 'Fulfilled',
      userId: 1
    },
    {
      status: 'In cart',
      userId: 2
    },
    {
      status: 'In cart',
      userId: 2
    }
  ]

  const orderItems = [
    {
      quantity: 1,
      productId: 4,
      orderId: 1
    },
    {
      quantity: 2,
      productId: 5,
      orderId: 2
    },
    {
      quantity: 1,
      productId: 2,
      orderId: 3
    },
    {
      quantity: 1,
      productId: 7,
      orderId: 4
    }
  ]

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

  await Promise.all(
    orders.map(order => {
      return Orders.create(order)
    })
  )

  await Promise.all(
    orderItems.map(item => {
      return OrderItems.create(item)
    })
  )

  console.log(`seeded ${orders.length} orders`)
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

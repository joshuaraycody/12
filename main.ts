namespace SpriteKind {
    export const alkhtab = SpriteKind.create()
}
let lk = sprites.create(img`
    .......bbbbbbbbbbbbbbbbbb.......
    ......bdfddfddfdfdfddddddb......
    .....bdfffdfddfffdfffdddfdb.....
    ....bddfdfdfdfffddffffdfffdb....
    ...bddffffffdfdffdfddfddfdddb...
    ..bdddfdddffdfddddfddfddfddddb..
    ..c11111111111111111111111111c..
    ..c11111111111111111111111111c..
    .bccccccccccccccccccccccccccccb.
    bb11111ddffd22222222dffdd11111bb
    c11bbccffddffd2222dffddffccbb11c
    c1bbddbcbffddffffffddffbcbddbb1c
    c1bbbddbdbdffddddddffdbdbddbbb1c
    c11bbddcddbbdffffffdbbddcddbb11c
    cb1111dcbd11bbbffbbb11dbcd1111bc
    .cb111ccbdd111dffd111ddbcc111bc.
    ..cccc.cbdbb122ff221bbdbc.cccc..
    .......cbdbb1d2ff2d1bbdbc.......
    .......cbdb21ddffdd12bdbc.......
    .......cbdb21ddffdd12bdbc.......
    ......ccbdb21ddffdd12bdbcc......
    .....cbbbdb21ddffdd12bdbbbc.....
    .....cdbbdb21ddffdd12bdbbdc.....
    .....c11bbb21ddffdd12bbb11c.....
    .....cd111bbbbbddbbbbb111dc.....
    ....cccd1111111dd1111111dccc....
    ...cbddbbb111111111111bbbddbc...
    ..cbddddddbbbbbbbbbbbbddddddbc..
    ..c1dd111d11dd11d11dd11ddd1ddc..
    ..cdddd11d11ddd1d1dddddddddddc..
    ..cd11d11d11d111d1dd11dd11d1dd..
    ..cbbbbbbbbbbbbbbbbbbbbbbbbbbc..
    `, SpriteKind.alkhtab)
lk.setPosition(136, 82)
lk.sayText("im going to protect food")
let jho = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Enemy)
jho.sayText("i will eat you food")
jho.setPosition(126, 26)
let mySprite = sprites.create(img`
    ........................
    ..............fff.......
    .............f2fffff....
    ...........ff22eeeeeff..
    ..........ff222eeeeeeff.
    ..........feeeefffeeeef.
    .........fe2222eeefffff.
    .........f2efffff222efff
    ..cc.....fffeeefffffffff
    ..cdcc...fee44fbbe44efef
    ..ccddcc..feddfbb4d4eef.
    ....cdddceefddddd4eeef..
    .....ccdcddee2222222f...
    ......cccdd44e544444f...
    .........eeeeffffffff...
    .............ff...fff...
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Food)
mySprite.sayText("oh no im going to die protect plc")
mySprite.setPosition(26, 89)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
mySprite2.sayText("im going to beat alkhtab and eat food")
mySprite2.setPosition(27, 20)

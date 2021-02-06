namespace SpriteKind {
    export const Story = SpriteKind.create()
}
function writeStroy (text: string) {
    info.setScore(text.length)
    script2 = story.createEmptyScript()
    for (let index = 0; index <= 2; index++) {
        script2.addLineToCurrentPage(text.substr(index * 23, 23), story.TextSpeed.Normal)
    }
    story.printScript(script2, 80, 60, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Story, function (sprite, otherSprite) {
    if (otherSprite == Story1 && controller.A.isPressed()) {
        script = story.createEmptyScript()
        script.newPage()
        script.setPagePauseLength(2000)
        script.addLineToCurrentPage("I am living in new zealand", story.TextSpeed.Normal)
        script.addLineToCurrentPage(". I am living in south", story.TextSpeed.Normal)
        script.addLineToCurrentPage(" africa. I love BBQ and ", story.TextSpeed.Normal)
        script.addLineToCurrentPage("juice.", story.TextSpeed.Normal)
        story.printScript(script, 80, 60, 0)
    } else if (otherSprite == Story2) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
let script: story.Script = null
let script2: story.Script = null
let Story2: Sprite = null
let Story1: Sprite = null
scene.setBackgroundColor(10)
let option_list = [
img`
    11111771111177111117711117717771
    17777777717777177717717777717771
    17777777717777177717717777711111
    17777777717777177717717777777771
    11111777717777177717717777777771
    77771777717777177717717777777771
    77771777717777177717717777717771
    77771777717777177717717777717771
    11111777717777111117717777711111
    77777777777777777777777777777777
    77777777777777777777777777777777
    17777777777777777777777777777777
    17777777777777777777777777777777
    17777777777777777777777777777777
    17777777777777777777777777777777
    17777777777777777777777777777777
    17777777777777777777777777777777
    17777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777111777777777
    11177777171117777777171777777777
    71771117171717777777177777777777
    71771717171117771111117777777777
    71771117171777771717177777777777
    77777717171117771117177777777777
    77777777777777777777777777777777
    77777777777777111777777777777777
    11177777177777171777777777777777
    71771117171117111717777777177777
    71771717171717771711171117111777
    71771117171117771717771717171777
    77777717177717111717771117171777
    `,
img`
    11111221111122111112211112212221
    12222222212222122212212222212221
    12222222212222122212212222211111
    12222222212222122212212222222221
    11111222212222122212212222222221
    22221222212222122212212222222221
    22221222212222122212212222212221
    22221222212222122212212222212221
    11111222212222111112212222211111
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    11112222222222222222222222222222
    22212222222222222222222222222222
    22212222222222222222222222222222
    11112222222222222222222222222222
    12222222222222222222222222222222
    12222222222222222222222222222222
    11112222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    11112111121221212222122222222222
    12222122121221211112122122212221
    12222122121221212211112111212221
    12222122121221212212122121211111
    12222122121221212212122122222221
    11112111121111212212122122212221
    22222222222221222222222222211111
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    `,
img`
    11111661111166111116611116616661
    16666666616666166616616666616661
    16666666616666166616616666611111
    16666666616666166616616666666661
    11111666616666166616616666666661
    66661666616666166616616666666661
    66661666616666166616616666666661
    66661666616666166616616666616661
    11111666616666111116616666611111
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    11111666666666666666666666666666
    66661666666666666666666666666666
    66661666666666666666666666666666
    66661666666666666666666666666666
    66661666666666666666666666666666
    11111666666666666666666666666666
    66661666666666666666666666666666
    66661666666666666666666666666666
    66661666666666666666666666666666
    11111666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    16611661666666616666666666666666
    16616666666666616666611166666666
    16166666666666616666616161116111
    11166661616666616166611166616166
    16611661611161116111616661116111
    16661661616161616161611161666661
    16666161616161116161666661116111
    `,
img`
    11111441111144111114411114414441
    14444444414444144414414444414441
    14444444414444144414414444411111
    14444444414444144414414444444441
    11111444414444144414414444444441
    44441444414444144414414444444441
    44441444414444144414414444414441
    44441444414444144414414444414441
    11111444414444111114414444411111
    44444444444444444444444444444444
    44444444444444444444444444444444
    44444444444444444444444444444444
    14444444444444444444444444444444
    14444444444444444444444444444444
    14414444444444444444444444444444
    14414444444444444444444444444444
    11111144444444444444444444444444
    44414444444444444444444444444444
    44414444444444444444444444444444
    44444444444444444444444444444444
    44444444444444444444444444444444
    14141114111444141444444444444444
    14441414111444441114444444444444
    14111144144444141414444444444444
    14141444111444141414444444444444
    44444444444444444444444444444444
    44444444444444444444444444444444
    11114111414444141111411114444444
    14414141411114441444414414444444
    14411114414414141444414414444444
    11114144414444141444411114444444
    44414144414444141111444414444444
    `,
img`
    11111133111111133111113311131331
    13333333333133333133313313331331
    13333333333133333133313313331111
    13333333333133333133313313333331
    13333333333133333133313313333331
    11111133333133333133313313333331
    33333133333133333133313313331331
    33333133333133333133313313331331
    33333133333133333133313313331331
    11111133333133333111113313331111
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    33333333333333333333333333333333
    11111113333333333333333333333333
    13333333333333333333333333333333
    13333333333333333333333333333333
    11111111333333333333333333333333
    33333331333333333333333333333333
    33333331333333333333333333333333
    11111111333333333333333333333333
    33333333333333333333333333333333
    33333313333333333333333333333333
    11113333311313111313333333333331
    13331313113333131311131113113131
    13331313133313131313131313133111
    13331313133313131313131313133331
    13331313133313131313131313133331
    13331313133313131313131313133331
    13331313133313131313131313131331
    13331313113313131313131113131331
    11113313311313111313133313131111
    `,
img`
    11111ff11111ff1111ff1111ff1ffff1
    1ffffffff1ffff1ff1ff1fffff1ffff1
    1ffffffff1ffff1ff1ff1fffff111111
    11111ffff1ffff1ff1ff1ffffffffff1
    ffff1ffff1ffff1ff1ff1ffffffffff1
    ffff1ffff1ffff1ff1ff1fffff1ffff1
    11111ffff1ffff1111ff1fffff1ffff1
    ffffffffffffffffffffffffff111111
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    11111fffffffffffffffffffffffffff
    1fffffffffffffffffffffffffffffff
    1fffffffffffffffffffffffffffffff
    11111fffffffffffffffffffffffffff
    1fff1fffffffffffffffffffffffffff
    1fff1fffffffffffffffffffffffffff
    11111fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    111ff111f11ff1f1f1111fffffffffff
    1ff1f1f1f1f1f1f1f1ffffffffffffff
    1ff1f1f1f1f1f111f1ffffffffffffff
    1111f1f1f111fff1f1111fffffffffff
    1ff1f1f1f1f1fff1ffff1fffffffffff
    1ff1f1f1f1f1fff1ffff1fffffffffff
    1ff1f1f1f1f1f1f1ffff1fffffffffff
    1ff1f111f1f1f1f1ffff1fffffffffff
    111ffff1f111f111f1111fffffffffff
    `
]
Story1 = sprites.create(option_list[0], SpriteKind.Story)
Story2 = sprites.create(option_list[1], SpriteKind.Story)
let Story3 = sprites.create(option_list[2], SpriteKind.Story)
let Story4 = sprites.create(option_list[3], SpriteKind.Story)
let Story5 = sprites.create(option_list[4], SpriteKind.Story)
let Story6 = sprites.create(option_list[5], SpriteKind.Story)
Story1.setPosition(16, 16)
Story2.setPosition(49, 16)
Story3.setPosition(82, 16)
Story4.setPosition(16, 49)
Story5.setPosition(49, 49)
Story6.setPosition(82, 49)
let mouse = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mouse, 100, 100)
mouse.setPosition(55, 91)
mouse.setStayInScreen(true)
writeStroy("I live in New Zealand. I live in South Africa. I love BBQ and juice.")

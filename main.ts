scene.setBackgroundColor(1)
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
    `, SpriteKind.Projectile)
controller.moveSprite(mouse, 100, 100)
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]

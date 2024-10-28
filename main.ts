namespace SpriteKind {
    export const BG = SpriteKind.create()
}
let BG_SKY_RAW = sprites.create(assets.image`BG_SKY`, SpriteKind.BG)
let BG_PART_1_RAW = sprites.create(assets.image`BG_PART_1`, SpriteKind.BG)
BG_PART_1_RAW.setScale(1.5, ScaleAnchor.Middle)
forever(function () {
    BG_PART_1_RAW.x += -1
})

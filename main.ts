namespace SpriteKind {
    export const BG = SpriteKind.create()
}
let i = 0
scene.setBackgroundColor(9)
let BG_SKY_RAW = sprites.create(assets.image`BG_SKY`, SpriteKind.BG)
BG_SKY_RAW.setScale(1.2, ScaleAnchor.Middle)
let BG_PART_1_RAW = sprites.create(assets.image`GRASS`, SpriteKind.BG)
BG_PART_1_RAW.setScale(1.5, ScaleAnchor.Middle)
let BG_PART_2_RAW = sprites.create(assets.image`TREES`, SpriteKind.BG)
BG_PART_2_RAW.setScale(1.5, ScaleAnchor.Middle)
game.onUpdateInterval(100, function () {
    i += 1
    BG_PART_1_RAW.x += Math.sin(i) * 10
    BG_PART_1_RAW.y += Math.cos(i) * 5
    BG_PART_2_RAW.x += Math.sin(i) * 8
    BG_PART_2_RAW.y += Math.cos(i) * 3
    BG_SKY_RAW.x += Math.sin(i) * 2
    BG_SKY_RAW.y += Math.cos(i) * 2
})

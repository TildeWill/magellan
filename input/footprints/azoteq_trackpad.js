// Author: Ergogen + @infused-kim improvements
//
// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    hotswap: default is true
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    solder: default is false
//      if true, will include holes to solder switches (works with hotswap too)
//    outer_pad_width_front: default 2.6
//    outer_pad_width_back: default 2.6
//      Allow you to make the outer hotswap pads smaller to silence DRC
//      warnings when the sockets are to close to the edge cuts.
//    show_keycaps: default is true
//      if true, will add choc sized keycap box around the footprint
//    keycaps_x: default is 18
//    keycaps_y: default is 17
//      Allows you to adjust the width of the keycap outline. For example,
//      to show a 1.5u outline for easier aligning.
//
// notes:
// - hotswap and solder can be used together. The solder holes will then be
// - added above the hotswap holes.
//
// @infused-kim's improvements:
//  - Added hotswap socket outlines
//  - Moved switch corner marks from user layer to silk screen
//  - Added option to adjust keycap size outlines (to show 1.5u outline)
//  - Added option to add hotswap sockets and direct soldering holes at the
//    same time
//  - Made hotswap pads not overlap holes to fix DRC errors
//  - Fixed DRC errors "Drilled holes co-located"

module.exports = {
    params: {
        designator: 'TP',
        from: "",
        to: ""
    },
    body: p => {
        const outline = `
            (module TPS65 (layer F.Cu) (tedit 5DD50112)
            ${p.at /* parametric position */}
            (attr virtual)

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))

            ${''/* corner marks - front */}
            (fp_line (start -32.5 -24.5) (end -32.5 24.5) (layer F.SilkS) (width 0.15))
            (fp_line (start -32.5 24.5) (end 32.5 24.5) (layer F.SilkS) (width 0.15))
            (fp_line (start 32.5 24.5) (end 32.5 -24.5) (layer F.SilkS) (width 0.15))
            (fp_line (start 32.5 -24.5) (end -32.5 -24.5) (layer F.SilkS) (width 0.15))
            )
        `


        const final = `
            ${outline}
        `

        return final
    }
}
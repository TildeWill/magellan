
module.exports = {
  params: {
    designator: 'FFC',
    side: 'F',
    P0: {type: 'net', value: 'P0'},
    P1: {type: 'net', value: 'P1'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    P4: {type: 'net', value: 'P4'},
    P5: {type: 'net', value: 'P5'},
    P6: {type: 'net', value: 'P6'},
    P7: {type: 'net', value: 'P7'},
    P8: {type: 'net', value: 'P8'},
    P9: {type: 'net', value: 'P9'}
  },
  body: p => {
    const footprint = `
      (module 686110183522 (layer ${p.side}.Cu) (tedit 658D0856)
        ${p.at /* parametric position */}
        (attr virtual)
        
        (fp_text reference "${p.ref}" (at 0.665 5 0) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1.0 1.0) (thickness 0.15))))
        (fp_text value 686110183522 (at 5.17 3.435 0) (layer ${p.side}.Fab) ${p.ref_hide} (effects (font (size 1.0 1.0) (thickness 0.15))))
        (pad Z1 smd rect (at -7.275 0.0) (size 1.65 1.3) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102))
        (pad Z2 smd rect (at 7.275 0.0) (size 1.65 1.3) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102))
        
        (fp_text user P0 (at -4.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 0 smd rect (at -4.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P0.str})
        (fp_text user P1 (at -3.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 1 smd rect (at -3.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P1.str})
        (fp_text user P2 (at -2.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 2 smd rect (at -2.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P2.str})
        (fp_text user P3 (at -1.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 3 smd rect (at -1.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P3.str})
        (fp_text user P4 (at -0.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 4 smd rect (at -0.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P4.str})
        (fp_text user P5 (at 0.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 5 smd rect (at 0.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P5.str})
        (fp_text user P6 (at 1.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 6 smd rect (at 1.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P6.str})
        (fp_text user P7 (at 2.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 7 smd rect (at 2.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P7.str})
        (fp_text user P8 (at 3.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 8 smd rect (at 3.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P8.str})
        (fp_text user P9 (at 4.5 0) (layer ${p.side}.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (pad 9 smd rect (at 4.5 -1.9 ${p.rot}) (size 0.3 1.0) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102) ${p.P9.str})
        (fp_line (start -8.1 -1.65) (end 8.1 -1.65) (layer ${p.side}.Fab) (width 0.127))
        (fp_line (start 8.1 -1.65) (end 8.1 2.15) (layer ${p.side}.Fab) (width 0.127))
        (fp_line (start 8.1 2.15) (end -8.1 2.15) (layer ${p.side}.Fab) (width 0.127))
        (fp_line (start -8.1 2.15) (end -8.1 -1.65) (layer ${p.side}.Fab) (width 0.127))
        (fp_line (start -8.1 0.84) (end -8.1 2.15) (layer ${p.side}.SilkS) (width 0.127))
        (fp_line (start -8.1 2.15) (end 8.1 2.15) (layer ${p.side}.SilkS) (width 0.127))
        (fp_line (start 8.1 2.15) (end 8.1 0.84) (layer ${p.side}.SilkS) (width 0.127))
        (fp_line (start -4.98 -1.65) (end -8.1 -1.65) (layer ${p.side}.SilkS) (width 0.127))
        (fp_line (start -8.1 -1.65) (end -8.1 -0.85) (layer ${p.side}.SilkS) (width 0.127))
        (fp_line (start 4.92 -1.65) (end 8.1 -1.65) (layer ${p.side}.SilkS) (width 0.127))
        (fp_line (start 8.1 -1.65) (end 8.1 -0.87) (layer ${p.side}.SilkS) (width 0.127))
        (fp_circle (center -5.0 -2.0) (end -4.9 -2.0) (layer ${p.side}.SilkS) (width 0.127))
        (fp_poly
          (pts
            (xy -8.3 -2.5)
            (xy 8.3 -2.5)
            (xy 8.3 2.4)
            (xy -8.3 2.4)
          ) (layer ${p.side}.CrtYd) (width 0.127)
        )
      )
      `;
    return footprint;
  }
}

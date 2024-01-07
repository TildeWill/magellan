module.exports = {
  params: {
    designator: 'MCU',
    D3: {type: 'net', value: 'D3'},
    D2: {type: 'net', value: 'D2'},
    GND: {type: 'net', value: 'GND'},
    D1: {type: 'net', value: 'D1'},
    D0: {type: 'net', value: 'D0'},
    D4: {type: 'net', value: 'D4'},
    C6: {type: 'net', value: 'C6'},
    D7: {type: 'net', value: 'D7'},
    E6: {type: 'net', value: 'E6'},
    B4: {type: 'net', value: 'B4'},
    B5: {type: 'net', value: 'B5'},
    B7: {type: 'net', value: 'B7'},
    D5: {type: 'net', value: 'D5'},
    C7: {type: 'net', value: 'C7'},
    F1: {type: 'net', value: 'F1'},
    F0: {type: 'net', value: 'F0'},
    B6: {type: 'net', value: 'B6'},
    B2: {type: 'net', value: 'B2'},
    B3: {type: 'net', value: 'B3'},
    B1: {type: 'net', value: 'B1'},
    F7: {type: 'net', value: 'F7'},
    F6: {type: 'net', value: 'F6'},
    F5: {type: 'net', value: 'F5'},
    F4: {type: 'net', value: 'F4'},
    VCC: {type: 'net', value: 'VCC'},
    RST: {type: 'net', value: 'RST'},
    B0: {type: 'net', value: 'B0'}
  },
  body: p => {
    const footprint = `
      (module "Elite-C-castellated-29pin-holes" (layer F.Cu) (tedit 5E2C9FAC)
        ${p.at /* parametric position */}
        (fp_text reference "${p.ref}" (at 0 1.625) (layer F.SilkS) ${p.ref_hide}
          (effects (font (size 1.2 1.2) (thickness 0.2032)))
        )
        (fp_text value "Elite-C-castellated-29pin-holes" (at 0 0) (layer F.SilkS) ${p.ref_hide}
          (effects (font (size 1.2 1.2) (thickness 0.2032)))
        )
        
        (fp_line (start -15.24 6.35) (end -15.24 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -15.24 6.35) (end -15.24 8.89) (layer B.SilkS) (width 0.381))
        (fp_line (start -19.304 -3.556) (end -14.224 -3.556) (layer Dwgs.User) (width 0.2))
        (fp_line (start -19.304 3.81) (end -19.304 -3.556) (layer Dwgs.User) (width 0.2))
        (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.2))
        (fp_line (start -14.224 -3.556) (end -14.224 3.81) (layer Dwgs.User) (width 0.2))
        (fp_line (start -17.78 8.89) (end -15.24 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer B.SilkS) (width 0.381))
        (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer B.SilkS) (width 0.381))
        (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer B.SilkS) (width 0.381))
        (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer B.SilkS) (width 0.381))
        (fp_poly (pts (xy -9.35097 -5.844635) (xy -9.25097 -5.844635) (xy -9.25097 -6.344635) (xy -9.35097 -6.344635)) (layer B.SilkS) (width 0.15))
        (fp_poly (pts (xy -9.35097 -5.844635) (xy -9.05097 -5.844635) (xy -9.05097 -5.944635) (xy -9.35097 -5.944635)) (layer B.SilkS) (width 0.15))
        (fp_poly (pts (xy -8.75097 -5.844635) (xy -8.55097 -5.844635) (xy -8.55097 -5.944635) (xy -8.75097 -5.944635)) (layer B.SilkS) (width 0.15))
        (fp_poly (pts (xy -9.35097 -6.244635) (xy -8.55097 -6.244635) (xy -8.55097 -6.344635) (xy -9.35097 -6.344635)) (layer B.SilkS) (width 0.15))
        (fp_poly (pts (xy -8.95097 -6.044635) (xy -8.85097 -6.044635) (xy -8.85097 -6.144635) (xy -8.95097 -6.144635)) (layer B.SilkS) (width 0.15))
        (fp_poly (pts (xy -8.76064 -4.931568) (xy -8.56064 -4.931568) (xy -8.56064 -4.831568) (xy -8.76064 -4.831568)) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -9.36064 -4.531568) (xy -8.56064 -4.531568) (xy -8.56064 -4.431568) (xy -9.36064 -4.431568)) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -9.36064 -4.931568) (xy -9.26064 -4.931568) (xy -9.26064 -4.431568) (xy -9.36064 -4.431568)) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -8.96064 -4.731568) (xy -8.86064 -4.731568) (xy -8.86064 -4.631568) (xy -8.96064 -4.631568)) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -9.36064 -4.931568) (xy -9.06064 -4.931568) (xy -9.06064 -4.831568) (xy -9.36064 -4.831568)) (layer F.SilkS) (width 0.15))
        (fp_line (start -12.7 6.35) (end -12.7 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -15.24 6.35) (end -12.7 6.35) (layer F.SilkS) (width 0.381))
        (fp_line (start 15.24 -8.89) (end -15.24 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -15.24 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.381))
        
        (fp_text user "TX0/D3" (at -13.97 3.571872 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "D2" (at -11.43 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "GND" (at -6.35 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "GND" (at -8.89 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "D1" (at -3.81 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "D0" (at -1.27 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "D4" (at 1.27 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "C6" (at 3.81 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "D7" (at 6.35 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "E6" (at 8.89 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "B4" (at 11.43 5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "B5" (at 12.7 6.4 ${p.rot + 45}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))) )
        (fp_text user "B7" (at 12.6 4.5 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))) )
        (fp_text user "D5" (at 12.4 2.54 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "C7" (at 12.4 0 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "F1" (at 12.4 -2.54 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "F0" (at 12.6 -4.5 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))) )
        (fp_text user "B6" (at 12.7 -6.4 ${p.rot + 135} unlocked) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))) )
        (fp_text user "B2" (at 11.43 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "B3" (at 8.89 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "B1" (at 6.35 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "F7" (at 3.81 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "F6" (at 1.27 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "F5" (at -1.27 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "F4" (at -3.81 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "VCC" (at -6.35 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "RST" (at -8.92 -5.73312 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "GND" (at -11.43 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        (fp_text user "B0" (at -13.97 -5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))) )
        
        (fp_text user "TX0/D3" (at -13.97 3.571872 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "D2" (at -11.43 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "GND" (at -8.89 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "GND" (at -6.35 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "D1" (at -3.81 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "D0" (at -1.27 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "D4" (at 1.27 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "C6" (at 3.81 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "D7" (at 6.35 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "E6" (at 8.89 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "B4" (at 11.43 5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "B5" (at 12.7 6.4 ${p.rot + 45}) (layer B.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15)) (justify mirror)) )
        (fp_text user "B7" (at 12.6 4.5 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15)) (justify mirror)) )
        (fp_text user "D5" (at 12.4 2.54 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "C7" (at 12.4 0 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "F1" (at 12.4 -2.54 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "F0" (at 12.6 -4.5 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15)) (justify mirror)) )
        (fp_text user "B6" (at 12.7 -6.4 ${p.rot + 135} unlocked) (layer B.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15)) (justify mirror)) )
        (fp_text user "B2" (at 11.43 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "B3" (at 8.89 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "B1" (at 6.35 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "F7" (at 3.81 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "F6" (at 1.27 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "F5" (at -1.27 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "F4" (at -3.81 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "VCC" (at -6.35 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "RST" (at -8.91 -5.04 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "GND" (at -11.43 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        (fp_text user "B0" (at -13.97 -5.461 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)) )
        
        (fp_line (start -15.24 6.35) (end -12.7 6.35) (layer B.SilkS) (width 0.381))
        (fp_line (start -12.7 6.35) (end -12.7 8.89) (layer B.SilkS) (width 0.381))
        (pad "1" thru_hole rect (at -13.97 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D3.str})
        (pad "2" thru_hole circle (at -11.43 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D2.str})
        (pad "3" thru_hole circle (at -8.89 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "4" thru_hole circle (at -6.35 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "5" thru_hole circle (at -3.81 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D1.str})
        (pad "6" thru_hole circle (at -1.27 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D0.str})
        (pad "7" thru_hole circle (at 1.27 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D4.str})
        (pad "8" thru_hole circle (at 3.81 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.C6.str})
        (pad "9" thru_hole circle (at 6.35 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D7.str})
        (pad "10" thru_hole circle (at 8.89 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.E6.str})
        (pad "11" thru_hole circle (at 11.43 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B4.str})
        
        (pad "12" thru_hole circle (at 13.97 7.3914) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B5.str})
        (pad "25" thru_hole circle (at 13.97 5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B7.str})
        (pad "26" thru_hole circle (at 13.97 2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.D5.str})
        (pad "27" thru_hole circle (at 13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.C7.str})
        (pad "28" thru_hole circle (at 13.97 -2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F1.str})
        (pad "29" thru_hole circle (at 13.97 -5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F0.str})
        
        (pad "13" thru_hole circle (at 13.97 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask)  ${p.B6.str})
        (pad "14" thru_hole circle (at 11.43 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B2.str})
        (pad "15" thru_hole circle (at 8.89 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B3.str})
        (pad "16" thru_hole circle (at 6.35 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B1.str})
        (pad "17" thru_hole circle (at 3.81 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F7.str})
        (pad "18" thru_hole circle (at 1.27 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F6.str})
        (pad "19" thru_hole circle (at -1.27 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F5.str})
        (pad "20" thru_hole circle (at -3.81 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.F4.str})
        (pad "21" thru_hole circle (at -6.35 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VCC.str})
        (pad "22" thru_hole circle (at -8.89 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RST.str})
        (pad "23" thru_hole circle (at -11.43 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "24" thru_hole circle (at -13.97 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.B0.str})
        
        
        
        (pad "1" smd rect (at -13.97 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "2" smd rect (at -11.43 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "3" smd rect (at -8.89 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "4" smd rect (at -6.35 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "5" smd rect (at -3.81 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "6" smd rect (at -1.27 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "7" smd rect (at 1.27 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "8" smd rect (at 3.81 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "9" smd rect (at 6.35 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "10" smd rect (at 8.89 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "11" smd rect (at 11.43 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "12" smd rect (at 13.97 9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "13" smd rect (at 13.97 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "14" smd rect (at 11.43 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "15" smd rect (at 8.89 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "16" smd rect (at 6.35 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "17" smd rect (at 3.81 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "18" smd rect (at 1.27 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "19" smd rect (at -1.27 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "20" smd rect (at -3.81 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "21" smd rect (at -6.35 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "22" smd rect (at -8.89 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "23" smd rect (at -11.43 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "24" smd rect (at -13.97 -9.398 ${p.rot}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "25" smd rect (at 15.875 5.08 ${p.rot + 90}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "26" smd rect (at 15.875 2.54 ${p.rot + 90}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "27" smd rect (at 15.875 0 ${p.rot + 90}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "28" smd rect (at 15.875 -2.54 ${p.rot + 90}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "29" smd rect (at 15.875 -5.08 ${p.rot + 90}) (size 2 3.25) (layers "F.Cu" "F.Paste" "F.Mask"))
        
      )
    `;
    return footprint;
  }
}

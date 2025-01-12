// Copyright 2023 QMK
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
     /*
      * ┌───┬───┬───┬───┬───┐       ┌───┬───┬───┬───┬───┐
      * │ Q │ W │ F │ P │ B │       │ J │ L │ U │ Y │ ' │
      * ├───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┤
      * │ A │ R │ S │ T │ G │       │ M │ N │ E │ I │ O │
      * ├───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┤
      * │ Z │ X │ C │ D │ V │       │ K │ H │ , │ . │ / │
      * └───┴───┴───┴───┴───┘       └───┴───┴───┴───┴───┘
      *         ┌───┬───┬───┐       ┌───┬───┬───┐
      *         │ESC│Spc│Tab│       │Ent│Bsp│Del│
      *         └───┴───┴───┘       └───┴───┴───┘
      *
      */



    [0] = LAYOUT_36key_split(
        KC_Q,         KC_W,       KC_F,         KC_P,         KC_B,                  KC_J,         KC_L,          KC_U,         KC_Y,         KC_QUOT,
        LGUI_T(KC_A), LALT(KC_R), LCTL(KC_S),   LSFT_T(KC_T), KC_G,                  KC_M,         LSFT_T(KC_N),  LCTL_T(KC_E), LALT_T(KC_I), LGUI_T(KC_O),
        KC_Z,         KC_X,       KC_C,         KC_D,         KC_V,                  KC_K,         KC_H,          KC_COMM,      KC_DOT,       KC_SLSH,
                                  LT(3,KC_ESC), LT(1,KC_SPC), LT(2,KC_TAB),          LT(5,KC_ENT), LT(4,KC_BSPC), LT(6,KC_DEL)
    ),
    [1] = LAYOUT_36key_split(
        KC_NO,        KC_NO,      KC_NO,        KC_NO,        KC_NO,                 KC_AGIN,      KC_PSTE,        KC_COPY,      KC_CUT,      KC_UNDO,
        KC_LGUI,      KC_LALT,    KC_LCTL,      KC_LSFT,      KC_NO,                 KC_CAPS,      KC_LEFT,        KC_DOWN,      KC_UP,       KC_RGHT,
        KC_NO,        KC_NO,      KC_NO,        KC_NO,        KC_NO,                 KC_INS,       KC_HOME,        KC_PGDN,      KC_PGUP,     KC_END,
                                  KC_NO,        KC_NO,        KC_NO,                 KC_ENT,       KC_BSPC,        KC_DEL
    ),
    [2] = LAYOUT_36key_split(
        KC_NO,        KC_NO,      KC_NO,        KC_NO,        KC_NO,                 KC_AGIN,      KC_PSTE,        KC_COPY,      KC_CUT,      KC_UNDO,
        KC_LGUI,      KC_LALT,    KC_LCTL,      KC_LSFT,      KC_NO,                 KC_NO,        KC_MS_L,        KC_MS_D,      KC_MS_U,     KC_MS_R,
        KC_NO,        KC_NO,      KC_NO,        KC_NO,        KC_NO,                 KC_NO,        KC_LEFT,        KC_DOWN,      KC_UP,       KC_RGHT,
                                  KC_NO,        KC_NO,        KC_NO,                 KC_BTN1,      KC_BTN2,        KC_BTN3
    ),
    [3] = LAYOUT_36key_split(
        KC_NO,        KC_NO,      KC_NO,        KC_NO,        KC_NO,                 KC_NO,        KC_NO,          KC_NO,        KC_NO,       KC_NO,
        KC_LGUI,      KC_LALT,    KC_LCTL,      KC_LSFT,      KC_NO,                 KC_NO,        KC_MPRV,        KC_VOLD,      KC_VOLU,     KC_MNXT,
        KC_NO,        KC_NO,      KC_NO,        KC_NO,        KC_NO,                 KC_NO,        KC_NO,          KC_NO,        KC_NO,       KC_NO,
                                  KC_NO,        KC_NO,        KC_NO,                 KC_MSTP,      KC_MPLY,        KC_MUTE
    ),
    [4] = LAYOUT_36key_split(
        KC_LBRC,      KC_7,       KC_8,         KC_9,         KC_RBRC,               KC_NO,        KC_NO,          KC_NO,        KC_NO,       KC_NO,
        KC_SCLN,      KC_4,       KC_5,         KC_6,         KC_EQL,                KC_NO,        KC_LSFT,        KC_LCTL,      KC_LALT,     KC_LGUI,
        KC_GRV,       KC_1,       KC_2,         KC_3,         KC_BSLS,               KC_NO,        KC_NO,          KC_NO,        KC_NO,       KC_NO,
                                  KC_DOT,       KC_0,         KC_MINS,               KC_NO,        KC_NO,          KC_NO
    ),
    [5] = LAYOUT_36key_split(
        KC_LCBR,      KC_AMPR,    KC_ASTR,      KC_LPRN,      KC_RCBR,               KC_NO,        KC_NO,          KC_NO,        KC_NO,       KC_NO,
        KC_COLN,      KC_DLR,     KC_PERC,      KC_CIRC,      KC_PLUS,               KC_NO,        KC_LSFT,        KC_LCTL,      KC_LALT,     KC_LGUI,
        KC_TILD,      KC_EXLM,    KC_AT,        KC_HASH,      KC_PIPE,               KC_NO,        KC_NO,          KC_NO,        KC_NO,       KC_NO,
                                  KC_LPRN,      KC_RPRN,      KC_UNDS,               KC_NO,        KC_NO,          KC_NO
    ),
    [6] = LAYOUT_36key_split(
        KC_F12,       KC_F7,      KC_F8,        KC_F9,        KC_PSCR,               KC_NO,        KC_NO,          KC_NO,        KC_NO,       KC_NO,
        KC_F11,       KC_F4,      KC_F5,        KC_F6,        KC_SCRL,               KC_NO,        KC_LSFT,        KC_LCTL,      KC_LALT,     KC_LGUI,
        KC_F10,       KC_F1,      KC_F2,        KC_F3,        KC_PAUS,               KC_NO,        KC_NO,          KC_NO,        KC_NO,       KC_NO,
                                  KC_NO,        KC_SPC,       KC_TAB,                KC_NO,        KC_NO,          KC_NO
    )
};

Blockly.Python['toneWithBeat'] = function (block) {
    // tslint:disable-next-line: radix
    const bpm = parseInt(block.getFieldValue('tone'));
    const ticks = parseFloat(block.getFieldValue('beatValue'));
    const time = ticks * 500;
    const duration = Math.floor(time);
    const code = `music.pitch(` + bpm + `,` + duration + `,wait=True)\n`;
    return code;
};

// Micro-python code generated for Tone With Beat block here.

Blockly.Python['tone'] = function (block) {
    // tslint:disable-next-line: radix
    const bpm = parseInt(block.getFieldValue('tone'));
    const ticks = 1;
    let code = `music.pitch(` + bpm + `,duration=-1,wait=True)\n`;
    code += `music.set_tempo(ticks=` + ticks + `,bpm=120)\n`;
    return code;
};

// Micro-python code generated for Play Music block here.

Blockly.Python['playMusic'] = function (block) {
    const music = block.getFieldValue('musicTone');
    const code = 'music.play(' + music + ', loop=False' + ')\n';
    return code;
};

// Micro-python code generated for Show Number block here.

Blockly.Python['showNumber'] = function (block) {
    const operator = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_NONE);
    const code = 'display.scroll(' + operator + ')' + '\n';
    return code;
};

// Micro-python code generated for Show String block here.

Blockly.Python['string'] = function (block) {
    const operator = block.getFieldValue('value');
    const code = 'display.scroll("' + operator + '")' + '\n';
    return code;
};

// Micro-python code generated for Show Icons block here.

Blockly.Python['icons'] = function (block) {
    const icon = block.getFieldValue('iconValue');
    const code = 'display.show(' + icon + ')' + '\n';
    return code;
};

// Micro-python code generated for Clear Screen block here.

Blockly.Python['clear'] = function (block) {
    const code = 'display.clear()' + '\n';
    return code;
};
// Micro-python code generated for Plot led pixel block here.

Blockly.Python['plotLed'] = function (block) {
    const valueX = {
        0: ['0', Blockly.Python.ORDER_ATOMIC],
        1: ['1', Blockly.Python.ORDER_ATOMIC],
        2: ['2', Blockly.Python.ORDER_ATOMIC],
        3: ['3', Blockly.Python.ORDER_ATOMIC],
        4: ['4', Blockly.Python.ORDER_ATOMIC]
    };
    const valueY = {
        0: ['0', Blockly.Python.ORDER_ATOMIC],
        1: ['1', Blockly.Python.ORDER_ATOMIC],
        2: ['2', Blockly.Python.ORDER_ATOMIC],
        3: ['3', Blockly.Python.ORDER_ATOMIC],
        4: ['4', Blockly.Python.ORDER_ATOMIC]
    };
    const tuple = valueX[block.getFieldValue('plotx')];
    const tuple1 = valueY[block.getFieldValue('ploty')];
    const operator = tuple[0];
    const operator1 = tuple1[0];
    const value = 9;
    const code = 'display.set_pixel(' + operator + ',' + operator1 + ',' + value + ')' + '\n';
    return code;

};

// Micro-python code generated for unplot led pixel block here.

Blockly.Python['unplotLed'] = function (block) {
    const valueX = block.getFieldValue('plotx');
    const valueY = block.getFieldValue('ploty');
    const value = 0;
    const code = 'display.set_pixel(' + valueX + ',' + valueY + ',' + value + ')' + '\n';
    return code;
};


// Micro-python code generated for Show led block here.

Blockly.Python['showLedNew'] = function (block) {
    let ledString = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            ledString += block.getFieldValue('led' + i + j) === 'TRUE' ? 9 : 0;
        }
        if (i !== 4) {
            ledString += ':';
        }
    }
    const code = `display.show(Image("${ledString}"))\n`;
    return code;
};


Blockly.Blocks['toneWithBeat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('play tone')
            .appendField(new Blockly.FieldDropdown([
                ['Low C', '131'],
                ['Low C#', '139'],
                ['Low D', '147'],
                ['Low D#', '156'],
                ['Low E', '165'],
                ['Low F', '175'],
                ['Low F#', '185'],
                ['Low G', '196'],
                ['Low G#', '208'],
                ['Low A', '220'],
                ['Low A#', '233'],
                ['Low B', '247'],
                ['Middle C', '262'],
                ['Middle C#', '277'],
                ['Middle D', '294'],
                ['Middle D#', '311'],
                ['Middle E', '330'],
                ['Middle F', '349'],
                ['Middle F#', '370'],
                ['Middle G', '392'],
                ['Middle G#', '415'],
                ['Middle A', '440'],
                ['Middle A#', '466'],
                ['Middle B', '494'],
                ['High C', '523'],
                ['High C#', '554'],
                ['High D', '587'],
                ['High D#', '622'],
                ['High E', '659'],
                ['High F', '698'],
                ['High F#', '740'],
                ['High G', '784'],
                ['High G#', '831'],
                ['High A', '880'],
                ['High A#', '932'],
                ['High B', '988'],
            ]), 'tone');
        this.appendDummyInput()
            .appendField('for')
            .appendField(new Blockly.FieldDropdown([
                ['1', '1'],
                ['1/2', '0.5'],
                ['1/4', '0.25'],
                ['1/8', '0.125'],
                ['1/16', '0.0625'],
                ['2', '2'],
                ['4', '4'],
            ]), 'beatValue');
        this.appendDummyInput()
            .appendField('beat');
        this.setInputsInline(true);
        this.setColour('#6fa004');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Plays a tone for a given duration');
        this.setHelpUrl('');
    }
};

// Tone With Beat Blockly's body is created here.

Blockly.Blocks['tone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('play tone')
            .appendField(new Blockly.FieldDropdown([
                ['Low C', '131'],
                ['Low C#', '139'],
                ['Low D', '147'],
                ['Low D#', '156'],
                ['Low E', '165'],
                ['Low F', '175'],
                ['Low F#', '185'],
                ['Low G', '196'],
                ['Low G#', '208'],
                ['Low A', '220'],
                ['Low A#', '233'],
                ['Low B', '247'],
                ['Middle C', '262'],
                ['Middle C#', '277'],
                ['Middle D', '294'],
                ['Middle D#', '311'],
                ['Middle E', '330'],
                ['Middle F', '349'],
                ['Middle F#', '370'],
                ['Middle G', '392'],
                ['Middle G#', '415'],
                ['Middle A', '440'],
                ['Middle A#', '466'],
                ['Middle B', '494'],
                ['High C', '523'],
                ['High C#', '554'],
                ['High D', '587'],
                ['High D#', '622'],
                ['High E', '659'],
                ['High F', '698'],
                ['High F#', '740'],
                ['High G', '784'],
                ['High G#', '831'],
                ['High A', '880'],
                ['High A#', '932'],
                ['High B', '988'],
            ]), 'tone');
        this.appendDummyInput();
        this.setInputsInline(true);
        this.setColour('#6fa004');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Plays a tone for a given duration');
        this.setHelpUrl('');
    }
};


// Play music Blockly's body is created here.

Blockly.Blocks['playMusic'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('start melody')
            .appendField(new Blockly.FieldDropdown([
                ['Entertainer', 'music.ENTERTAINER'],
                ['Prelude', 'music.PRELUDE'],
                ['Ode', 'music.ODE'],
                ['Nyan', 'music.NYAN'],
                ['Ringtone', 'music.RINGTONE'],
                ['Funk', 'music.FUNK'],
                ['Blues', 'music.BLUES'],
                ['Birthday', 'music.BIRTHDAY'],
                ['Wedding', 'music.WEDDING'],
                ['Funeral', 'music.FUNERAL'],
                ['Punchline', 'music.PUNCHLINE'],
                ['Python', 'music.PYTHON'],
                ['Baddy', 'music.BADDY'],
                ['Chase', 'music.CHASE'],
                ['Ba_Ding', 'music.BA_DING'],
                ['Wawawawaa', 'music.WAWAWAWAA'],
                ['Jump_Up', 'music.JUMP_UP'],
                ['Jump_Down', 'music.JUMP_DOWN'],
                ['Power_Up', 'music.POWER_UP'],
                ['Power_Down', 'music.POWER_DOWN'],
            ]), 'musicTone');
        this.setColour('#6fa004');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Starts playing a melody');
        this.setHelpUrl('');
    }
};

// showNumber Blockly's body is created here.

Blockly.Blocks['showNumber'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('show number');
        this.appendValueInput('value')
            .setCheck(null);
        this.appendDummyInput();
        this.setColour('#a3a305');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

// showString Blockly's body is created here.


Blockly.Blocks['string'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('show string')
            .appendField(new Blockly.FieldTextInput(''), 'value');
        this.setColour('#a3a305');
        this.setTooltip('');
        this.setHelpUrl('nourl');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

// Icons Blockly's body is created here.

Blockly.Blocks['icons'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Show icon')
            .appendField(new Blockly.FieldDropdown([
                ['Heart', 'Image.HEART'],
                ['Happy', 'Image.HAPPY'],
                ['Sad', 'Image.SAD'],
                ['Confused', 'Image.CONFUSED'],
                ['Angry', 'Image.ANGRY'],
                ['Asleep', 'Image.ASLEEP'],
                ['Surprised', 'Image.SURPRISED']
            ]), 'iconValue');
        this.setColour('#a3a305');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

// clear Blockly's body is created here.

Blockly.Blocks['clear'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('clear Screen');
        this.setColour('#a3a305');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setNextStatement(true);
        this.setPreviousStatement(true);

    }
};

// Plot led pixel Blockly's body is created here.

Blockly.Blocks['plotLed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('plot x')
            .appendField(new Blockly.FieldDropdown([
                ['0', '0'],
                ['1', '1'],
                ['2', '2'],
                ['3', '3'],
                ['4', '4']
            ]), 'plotx');
        this.appendDummyInput()
            .appendField('y')
            .appendField(new Blockly.FieldDropdown([
                ['0', '0'],
                ['1', '1'],
                ['2', '2'],
                ['3', '3'],
                ['4', '4']
            ]), 'ploty');
        this.setInputsInline(true);
        this.setColour('#bd94dd');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

// Unplot led pixel Blockly's body is created here.

Blockly.Blocks['unplotLed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('unplot x')
            .appendField(new Blockly.FieldDropdown([
                ['0', '0'],
                ['1', '1'],
                ['2', '2'],
                ['3', '3'],
                ['4', '4']
            ]), 'plotx');
        this.appendDummyInput()
            .appendField('y')
            .appendField(new Blockly.FieldDropdown([
                ['0', '0'],
                ['1', '1'],
                ['2', '2'],
                ['3', '3'],
                ['4', '4']
            ]), 'ploty');
        this.setInputsInline(true);
        this.setColour('#bd94dd');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

// Led Blockly's body is created here.


Blockly.Blocks['showLedNew'] = {
    init() {
        this.appendDummyInput()
            .appendField('show leds');
        Blockly.FieldCheckbox.CHECK_CHAR = '\u2b1b';
        for (let i = 0; i < 5; i++) {
            const dummy = this.appendDummyInput();
            for (let j = 0; j < 5; j++) {
                dummy.appendField(new Blockly.FieldCheckbox(false, (e, k) => { }), 'led' + i + j);
            }
        }
        this.setColour('#bd94dd');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


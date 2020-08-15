Blockly.Blocks['start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('on Start');
        this.setColour('#7cce76');
        this.setTooltip('');
        this.setHelpUrl('');
        this.appendStatementInput('DO');
    }
};

// forever Blockly's body is created here.

Blockly.Blocks['forever'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('forever');
        this.setColour('#7cce76');
        this.setTooltip('');
        this.setHelpUrl('');
        this.appendStatementInput('DO');

    }
};

// pause Blockly's body is created here.

Blockly.Blocks['pause'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('wait sec');
        this.appendValueInput('seconds').setCheck(['Boolean', 'Number']);
        this.appendDummyInput();
        this.setColour('#7cce76');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

// Repeat loop Blockly's body is created here.

Blockly.Blocks['repeat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('repeat');
        // .appendField(new Blockly.FieldTextInput(''), 'value')
        this.appendValueInput('val');
        this.appendDummyInput()
            .appendField('times');
        this.appendStatementInput('DO')
            .appendField('do');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#76cec2');
    }
};

// For loop Blockly's body is created here.

Blockly.Blocks['for'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('for')
            .appendField(new Blockly.FieldVariable('x'), 'var1')
            .appendField('from 0 to ');
        this.appendValueInput('index');
        this.appendDummyInput();
        // .appendField(new Blockly.FieldTextInput(''), 'index');
        this.appendStatementInput('DO')
            .appendField('do');
        this.setColour('#76cec2');
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setHelpUrl('');
        this.setTooltip('');
    }
};

// While loop Blockly's body is created here.

Blockly.Blocks['while'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('while')
            .appendField(new Blockly.FieldDropdown([
                ['TRUE', 'True'],
                ['FALSE', 'False']
            ]), 'bool');
        this.appendStatementInput('DO')
            .appendField('do');
        this.setColour('#76cec2');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};


Blockly.Blocks['simpleIf'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('if');
        this.appendValueInput('condition')
            .setCheck(['Boolean', 'Number']);
        this.appendDummyInput()
            .appendField('then');
        this.appendStatementInput('in_if')
            .setCheck(null);
        this.setInputsInline(true, 'new');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a8ce76');
        this.setTooltip('');
        this.setHelpUrl('');

    }
};

// If else Blockly's body is created here.

Blockly.Blocks['ifElse'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('if');
        this.appendValueInput('condition')
            .setCheck(['Boolean', 'Number']);
        this.appendStatementInput('in_if')
            .setCheck(null);
        this.appendDummyInput()
            .appendField('else');
        this.appendStatementInput('in_else')
            .setCheck(null);
        this.setInputsInline(true, 'new');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a8ce76');
        this.setTooltip('');
        this.setHelpUrl('');

    }
};


Blockly.Python['start'] = function (block) {
    const branch = Blockly.Python.statementToCode(block, 'DO');

    const code2 = branch + '\n';
    let code;
    if (branch.length > 0) {
        code = '#\n' + 'if True :' + '\n' + code2;
    } else {
        code = '#\n' + 'if True :' + '\n' + '    ' + 'pass';
    }
    return code;
};


// Micro-python code generated for Forever block here.

Blockly.Python['forever'] = function (block) {
    const branch = Blockly.Python.statementToCode(block, 'DO');
    const code2 = branch + '\n';
    let code;
    if (branch.length > 0) {
        code = 'while True:' + '\n' + code2;
    } else {
        code = 'while True:' + '\n' + '    ' + 'pass';
    }
    return code;
};

// Micro-python code generated for Pause block here.

Blockly.Python['pause'] = function (block) {
    const timeValue = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_NONE) || '';
    const code = 'sleep(' + timeValue * 1000 + ')' + '\n';
    return code;
};


// Micro-python code generated for Repeat Loop block here.

Blockly.Python['repeat'] = function (block) {
    const branch = Blockly.Python.statementToCode(block, 'DO');
    const val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_NONE) || '';
    const code = 'for i in range(0,' + val + '):' + '\n' + branch + '\n';
    return code;
};

// Micro-python code generated for For Loop block here.


Blockly.Python['for'] = function (block) {
    const branch = Blockly.Python.statementToCode(block, 'DO');
    const indexVal = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_NONE) || '';
    const variable0 = Blockly.Python.variableDB_.getName(block.getFieldValue('var1'), Blockly.Variables.NAME_TYPE);
    const code = 'for ' + variable0 + ' in range(0,' + indexVal + '):' + '\n' + branch + '\n';
    return code;
};

// Micro-python code generated for While Loop block here.


Blockly.Python['while'] = function (block) {
    const branch = Blockly.Python.statementToCode(block, 'DO');
    const value = block.getFieldValue('bool');
    const code = 'while ' + value + ':' + '\n' + branch + '\n';
    return code;
};

// Micro-python code generated for  Simple if block here.


Blockly.Python['simpleIf'] = function (block) {
    const condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE);
    let branch = Blockly.Python.statementToCode(block, 'in_if');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const code = 'if ' + condition + ':' + '\n' + branch + '\n';

    return code;

};

// Micro-python code generated for If else block here.

Blockly.Python['ifElse'] = function (block) {
    const condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE);
    let branch = Blockly.Python.statementToCode(block, 'in_if');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    let branch1 = Blockly.Python.statementToCode(block, 'in_else');
    branch1 = Blockly.Python.addLoopTrap(branch1, block.id) || Blockly.Python.PASS;
    const code = 'if ' + condition + ':' + '\n' + branch + 'else:' + '\n' + branch1 + '\n';
    return code;

};

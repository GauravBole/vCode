Blockly.Python['arithmetics'] = function (block) {
      const OPERATORS = {
        ADD: ['+', Blockly.Python.ORDER_ADDITIVE],
        SUBTRACT: ['-', Blockly.Python.ORDER_ADDITIVE],
        MULTIPLY: ['*', Blockly.Python.ORDER_MULTIPLICATIVE],
        DIVIDE: ['/', Blockly.Python.ORDER_MULTIPLICATIVE],
        REMAINDER: ['%', Blockly.Python.ORDER_MULTIPLICATIVE],
        POWER: [' ** ', Blockly.Python.ORDER_EXPONENTIATION]
      };
      const tuple = OPERATORS[block.getFieldValue('operator')];
      const operator = tuple[0];
      const order = tuple[1];
      const argument0 = Blockly.Python.valueToCode(block, 'input1', order) || '0';
      const argument1 = Blockly.Python.valueToCode(block, 'input2', order) || '0';
      const code = argument0 + operator + argument1;
      return [code, order];
    };


    // Micro-python code generated for Min-Max value operation block here.
    Blockly.Python['minMax'] = function (block) {
      const OPERATORS = {
        min: ['min(', Blockly.Python.ORDER_ATOMIC],
        max: ['max(', Blockly.Python.ORDER_ATOMIC]
      };
      const tuple = OPERATORS[block.getFieldValue('minMaxValue')];
      const operator = tuple[0];
      const order = tuple[1];
      const argument0 = Blockly.Python.valueToCode(block, 'value1', order) || '0';
      const argument1 = Blockly.Python.valueToCode(block, 'value2', order) || '0';
      const code = operator + argument0 + ',' + argument1 + ')';
      return [code, order];
    };

    // Micro-python code generated for Square root operation block here.
    Blockly.Python['sqrRoot'] = function (block) {
      const OPERATORS = {
        square_root: ['math.sqrt(', Blockly.Python.ORDER_ATOMIC],
        sin: ['math.sin(', Blockly.Python.ORDER_ATOMIC],
        cos: ['math.cos(', Blockly.Python.ORDER_ATOMIC],
        tan: ['math.tan(', Blockly.Python.ORDER_ATOMIC]
      };
      const tuple = OPERATORS[block.getFieldValue('squareRootValue')];
      const operator = tuple[0];
      const order = tuple[1];
      const argument0 = Blockly.Python.valueToCode(block, 'value1', order) || '0';
      const code = operator + argument0 + ')';
      return [code, order];
    };

    // Micro-python code generated for Round operation block here.
    Blockly.Python['round'] = function (block) {
      const OPERATORS = {
        round: ['round(', Blockly.Python.ORDER_ATOMIC]
      };
      const tuple = OPERATORS[block.getFieldValue('roundValue')];
      const operator = tuple[0];
      const order = tuple[1];
      const round = Blockly.Python.valueToCode(block, 'value1', order) || '0';
      const code = operator + round + ')';
      return [code, order];
    };

    // Micro-python code generated for Absolute Value operation block here.
    Blockly.Python['absolute'] = function (block) {
      const argument0 = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_NONE) || '0';
      const code = 'abs(' + argument0 + ')';
      return [code, Blockly.Python.ORDER_NONE];
    };

    // Micro-python code generated for Number Value block here.
    Blockly.Python['randomNumber'] = function (block) {
      const randomValue = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_NONE) || '';
      const randomValue1 = Blockly.Python.valueToCode(block, 'val2', Blockly.Python.ORDER_NONE) || '';
      const code = 'random.randint(' + randomValue + ',' + randomValue1 + ')';
      return [code, Blockly.Python.ORDER_NONE];
    };



    Blockly.Blocks['arithmetics'] = {
      init: function () {
        this.appendDummyInput();
        this.appendValueInput('input1').setCheck('Number');
        this.appendDummyInput();
        this.appendValueInput('input2').setCheck('Number')
          .appendField(new Blockly.FieldDropdown([
            ['+', 'ADD'],
            ['-', 'SUBTRACT'],
            ['*', 'MULTIPLY'],
            ['/', 'DIVIDE'],
            ['**', 'POWER'],
            ['%', 'REMAINDER']
          ]), 'operator');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour('#F2C357');
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };


    // Min-Max value operation Blockly's body is created here.

    Blockly.Blocks['minMax'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ['min', 'min'],
            ['max', 'max']
          ]), 'minMaxValue')
          .appendField('of');
        this.appendValueInput('value1')
          .setCheck('Number');
        this.appendDummyInput()
          .appendField('and');
        this.appendValueInput('value2')
          .setCheck('Number');
        this.appendDummyInput();
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour('#F2C357');
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    // Sruare root operation Blockly's body is created here.
    Blockly.Blocks['sqrRoot'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ['square_root', 'square_root'],
            ['sin', 'sin'],
            ['cos', 'cos'],
            ['tan', 'tan']
          ]), 'squareRootValue');
        this.appendValueInput('value1')
          .setCheck('Number');
        this.appendDummyInput();
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour('#F2C357');
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    // Round operation Blockly's body is created here.
    Blockly.Blocks['round'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ['round', 'round']
          ]), 'roundValue');
        this.appendValueInput('value1')
          .setCheck('Number');
        this.appendDummyInput();
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour('#F2C357');
        this.setTooltip('');
        this.setHelpUrl('');
      }
    };

    // Absolute value operation Blockly's body is created here.
    Blockly.Blocks['absolute'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('absolute of');
        this.appendValueInput('value')
          .setCheck('Number');
        this.appendDummyInput();
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour('#F2C357');
        this.setTooltip('');
        this.setHelpUrl('');
      }
    }

    // Random Number operation Blockly's body is created here.
    Blockly.Blocks['randomNumber'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('pick random');
        this.appendValueInput('val1');
        this.appendDummyInput()
          .appendField('to');
        this.appendValueInput('val2');
        this.appendDummyInput();
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour('#F2C357');
        this.setTooltip('');
        this.setHelpUrl('');
      }
    }

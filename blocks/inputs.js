Blockly.Blocks['gesture'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('on')
            .appendField(new Blockly.FieldDropdown([
                ['shake', 'shake'],
                ['logo up', 'up'],
                ['logo down', 'down'],
                ['screen up', 'face up'],
                ['screen down', 'face down'],
                ['tilt left', 'left'],
                ['tilt right', 'right'],
                ['free fall', 'free fall'],
                ['3g', '3g'],
                ['6g', '6g'],
                ['8g', '8g']
            ]), 'gesture_value');
        this.setOutput(true, 'Boolean');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};


// Reading of ButtonPressed Blockly's body is created here.

Blockly.Blocks['readingButtonPressed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('button')
            .appendField(new Blockly.FieldDropdown([
                ['A', '(button_a.is_pressed())'],
                ['B', '(button_b.is_pressed())'],
                ['A+B', '(button_a.is_pressed() and button_b.is_pressed())']
            ]), 'buttonIsPressed');
        this.appendDummyInput()
            .appendField('pressed');
        this.setOutput(true, 'Boolean');
        this.setInputsInline(true);
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

// Reading of Pin's pressed Blockly's body is created here.

Blockly.Blocks['readingPinPressed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('pin')
            .appendField(new Blockly.FieldDropdown([
                ['P0', 'pin0.is_touched()'],
                ['P1', 'pin1.is_touched()'],
                ['P2', 'pin2.is_touched()']
            ]), 'pinIsPressed');
        this.appendDummyInput()
            .appendField('pressed');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

// Acceleration's Blockly's body is created here.
Blockly.Blocks['acceleration'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('acceleration (mg)')
            .appendField(new Blockly.FieldDropdown([
                ['x', 'get_x()'],
                ['y', 'get_y()'],
                ['z', 'get_z()'],
                ['strength', 'get_values()'],
            ]), 'accelerate');
        this.setOutput(true);
        this.setOutput(true, 'Number');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

// Reading of Temperature Blockly's body is created here.

Blockly.Blocks['Temperature'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Temperature(Celcius)');
        this.setOutput(true, 'Number');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};



// Sensor Get Reading Blockly's body is created here.

Blockly.Blocks['getReading'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('get reading')
            .appendField(new Blockly.FieldDropdown([
                ['right_IR', '0'],
                ['center_IR', '2'],
                ['left_IR', '4'],
                ['bottom Right_IR', '3'],
                ['bottom Left_IR', '1'],
                ['sound', '5'],
            ]), 'sensorGetReading');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour('#74B6E2');
        this.setTooltip('Returns the reading of the sensor selected');
        this.setHelpUrl('');
    }
};

// Sensor obstacle detection Blockly's body is created here.

Blockly.Blocks['obstacleDetection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('obstacle detection')
            .appendField(new Blockly.FieldDropdown([
                ['right_IR', '0'],
                ['center_IR', '2'],
                ['left_IR', '4'],
            ]), 'sensorGetReading');
        this.appendDummyInput()
            .appendField('at distance')
            .appendField(new Blockly.FieldNumber(''), 'val1');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

// Sensor color detection Blockly's body is created here.

Blockly.Blocks['soundDetection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Sound is detected');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour('#74B6E2');
        this.setTooltip('Returns true or false based on condition.');
        this.setHelpUrl('');
    }
};

// Sensor Get Reading  using Port Blockly's body is created here.

Blockly.Blocks['getReadingPort'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('port')
            .appendField(new Blockly.FieldDropdown([
                ['1', '3'],
                ['2', '2'],
                ['3', '1'],
            ]), 'portValue');
        this.appendDummyInput()
            .appendField('get reading')
            .appendField(new Blockly.FieldDropdown([
                ['IR', '1'],
                ['Soil', '2'],
                ['Gas', '3'],
                ['Sound', '6'],
                ['Temperature', '4'],
                ['UltraSound', '5']
            ]), 'sensorGetReading');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour('#74B6E2');
        this.setTooltip('Returns the reading at of sensor selected');
        this.setHelpUrl('');
    }
};

// Rotation of block in Degree  Blockly's body is created.
Blockly.Blocks['rotateBlock'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('rotation (Degree)');
        this.setOutput(true);
        this.setColour('#74B6E2');
        this.setTooltip('Returns the angle');
        this.setHelpUrl('');
    }
};

// Boolean condition Blockly's body is created here.


Blockly.Blocks['bool'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ['True', 'True'],
                ['False', 'False']
            ]), 'bool');
        this.setOutput(true, 'Boolean');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');

    }
};

// direction Blockly's body is created here.


Blockly.Blocks['direction'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ['North', '0'],
                ['East', '1'],
                ['South', '2'],
                ['West', '3']
            ]), 'direction');
        this.setOutput(true);
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');

    }
};

// Compass-Heading  Blockly's body is created.
Blockly.Blocks['compassHeading'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Compass-Heading');
        this.setOutput(true);
        this.setColour('#74B6E2');
        this.setHelpUrl('');
    }
};

// Compare condition Blockly's body is created here.

Blockly.Blocks['compare'] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput('value1')
            .setCheck(['Boolean', 'Number']);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ['=', 'equal to'],
                ['!=', 'not equal to'],
                ['<', 'less than'],
                ['<=', 'less than equal to'],
                ['>', 'greater than'],
                ['>=', 'greater than equal to']
            ]), 'compare_to');
        this.appendValueInput('value2')
            .setCheck(['Boolean', 'Number']);
        this.setOutput(true, 'Number');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

// Logical and , or condition Blockly's body is created here.

Blockly.Blocks['logic'] = {
    init: function () {
        this.appendDummyInput();
        this.appendValueInput('value1')
            .setCheck(['Boolean', 'Number']);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ['and', 'and'],
                ['or', 'or']
            ]), 'logicalOper');
        this.appendValueInput('value2')
            .setCheck(['Boolean', 'Number']);
        this.setOutput(true, 'Number');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

// Logical not Blockly's body is created here.


Blockly.Blocks['not'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Not');
        this.appendValueInput('value3')
            .setCheck(['Boolean', 'Number']);
        this.appendDummyInput()
            .appendField('');
        this.setOutput(true, 'Number');
        this.setColour('#74B6E2');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};



 Blockly.Python['gesture'] = function (block) {
      const tuple = block.getFieldValue('gesture_value');
      const code = 'accelerometer.current_gesture() == ' + '"' + tuple + '"';
      return [code, 0];
    };


    // Micro-python code generated for Reading of ButtonPressed block here.

    Blockly.Python['readingButtonPressed'] = function (block) {
      const tuple = block.getFieldValue('buttonIsPressed');
      return [tuple, 0];
    };

    // Micro-python code generated for Reading Pin's pressed block here.

    Blockly.Python['readingPinPressed'] = function (block) {
      const tuple = block.getFieldValue('pinIsPressed');
      return [tuple, 0];
    };

    // Micro-python code generated for Temperature block here.

    Blockly.Python['Temperature'] = function (block) {
      const code = `temperature()`;
      return [code, 0];
    };

    // Micro-python code generated for Acceleration's block here.

    Blockly.Python['acceleration'] = function (block) {
      const tuple = block.getFieldValue('accelerate');
      const code = `accelerometer.` + tuple;
      return [code, 0];
    };



    // Micro-python code generated for Sensor Get Reading block here.

    Blockly.Python['getReading'] = function (block) {
      const IRValue = block.getFieldValue('sensorGetReading');
      const code = `sensorValues[${IRValue}]`;
      return [code, 0];
    };

    // Micro-python code generated for Sensor obstacle detection block here.

    Blockly.Python['obstacleDetection'] = function (block) {
      const IRValue = block.getFieldValue('sensorGetReading');
      const distance = block.getFieldValue('val1');
      const code = `sensor_values[${IRValue}] >= ${distance}`;
      return [code, 0];
    };


    // Micro-python code generated for Sensor color Detection block here.
    Blockly.Python['soundDetection'] = function (block) {
      const soundValue = 330;
      return [`soundDetection(${soundValue},noise=sensorValues[5])`, 0];

    };

    // Micro-python code generated for Sensor Get Reading for Port block here.

    Blockly.Python['getReadingPort'] = function (block) {
      const pinValue = block.getFieldValue('portValue');
      const sensorReading = block.getFieldValue('sensorGetReading');
      let code;
      if (sensorReading === 1 || sensorReading === 2 || sensorReading === 3 || sensorReading === 6) {
        code = `pin${pinValue}.read_analog()`;
      } else if (sensorReading === 4) {
        const pin = `pin${pinValue}.read_analog()`;
        return [`getTemprature(${pin})`, 0];
      } else if (sensorReading === 5) {
        const pin = `pin${pinValue}.read_analog()`;
        return [`getUltrasound(${pin})`, 0];
      }
      return [code, 0];
    };

    // Micro-python code generated for Rotation of block in Degree's block here.

    Blockly.Python['rotateBlock'] = function (block) {
      const code = `rotationAngle()`;
      return [code, 0];
    };
    // Micro-python code generated for  Compare Condition block here.

    Blockly.Python['compare'] = function (block) {
      const CompareValue = {
        'equal to': ['==', Blockly.Python.ORDER_ATOMIC],
        'not equal to': ['!=', Blockly.Python.ORDER_ATOMIC],
        'less than': ['<', Blockly.Python.ORDER_ATOMIC],
        'less than equal to': ['<=', Blockly.Python.ORDER_ATOMIC],
        'greater than': ['>', Blockly.Python.ORDER_ATOMIC],
        'greater than equal to': ['>=', Blockly.Python.ORDER_ATOMIC]
      };
      const tuple = CompareValue[block.getFieldValue('compare_to')];
      const operator = tuple[0];
      const order = tuple[1];
      const argument0 = Blockly.Python.valueToCode(block, 'value1', order) || '0';
      const argument1 = Blockly.Python.valueToCode(block, 'value2', order) || '0';
      const code = argument0 + operator + argument1;
      return [code, order];
    };

    // Micro-python code generated for  Logical and, or condition block here.

    Blockly.Python['logic'] = function (block) {
      const tuple = block.getFieldValue('logicalOper');
      const argument0 = Blockly.Python.valueToCode(block, 'value1', 0);
      const argument1 = Blockly.Python.valueToCode(block, 'value2', 0);
      const code = argument0 + ' ' + tuple + ' ' + argument1;
      return [code, 0];
    };

    // Micro-python code generated for  Logical not block here.

    Blockly.Python['not'] = function (block) {
      const operator = 'not';
      const argument0 = Blockly.Python.valueToCode(block, 'value3', 0) || '0';
      const code = '(' + operator + '(' + argument0 + '))';
      return [code, 0];
    };

    // Micro-python code generated for  Boolean Conditon block here.

    Blockly.Python['bool'] = function (block) {
      const boolValue = block.getFieldValue('bool');
      return [boolValue, 0];
    };

    // Micro-python code generated for  direction Conditon block here.

    Blockly.Python['direction'] = function (block) {
      const directionValue = block.getFieldValue('direction');
      return [directionValue, 0];
    };

    // Micro-python code generated for compassHeading block here.

    Blockly.Python['compassHeading'] = function (block) {
      const code = 'com()';
      return [code, 0];
    };

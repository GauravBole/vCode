Blockly.Blocks['print'] = {
    init: function () {
        this.appendValueInput('VALUE')
            .appendField('Print');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('nourl');
    }
};

Blockly.Python['print'] = function (block) {
    var operator = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // console.log(operator);
    var a = "display.scroll(" + operator + ")\n";
    return a;
};
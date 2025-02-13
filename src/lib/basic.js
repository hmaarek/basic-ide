// 📌 Full BASIC Interpreter in JavaScript

class JSBasic {
    constructor() {
        this.variables = {}; // Store variables
        this.lines = {}; // Store numbered program lines
        this.currentLine = 0; // Track current line for GOTO
    }

    run(code) {
        if (!code.trim()) return "No code to execute.";

        let lines = code.split("\n");
        this.lines = {};
        this.currentLine = 0;

        // Parse and store line-numbered code
        for (let line of lines) {
            line = line.trim();
            if (line === "") continue;
            let match = line.match(/^([0-9]+) (.+)$/);
            if (match) {
                let lineNumber = parseInt(match[1]);
                let command = match[2];
                this.lines[lineNumber] = command;
            }
        }

        let output = [];
        let lineNumbers = Object.keys(this.lines).map(Number).sort((a, b) => a - b);

        while (this.currentLine < lineNumbers.length) {
            let lineNumber = lineNumbers[this.currentLine];
            let command = this.lines[lineNumber];
            let result = this.executeCommand(command);
            if (result !== undefined) output.push(result);
            this.currentLine++;
        }

        return output.join("\n");
    }

    executeCommand(command) {
        command = command.trim();
        if (command.startsWith("PRINT")) {
            let expression = command.replace("PRINT", "").trim();
            return this.evaluateExpression(expression);
        } 
        else if (command.startsWith("LET")) {
            let parts = command.replace("LET", "").split("=");
            if (parts.length !== 2) return "Syntax Error in LET statement";
            let varName = parts[0].trim();
            let value = this.evaluateExpression(parts[1].trim());
            this.variables[varName] = value;
        } 
        else if (command.startsWith("IF")) {
            let match = command.match(/IF (.+) THEN (.+)/);
            if (!match) return "Syntax Error in IF statement";
            let condition = match[1].trim();
            let thenCommand = match[2].trim();
            if (this.evaluateCondition(condition)) {
                return this.executeCommand(thenCommand);
            }
        }
        else if (command.startsWith("GOTO")) {
            let targetLine = parseInt(command.replace("GOTO", "").trim());
            if (this.lines[targetLine] !== undefined) {
                this.currentLine = Object.keys(this.lines).map(Number).indexOf(targetLine) - 1;
            }
        }
        else if (command.startsWith("FOR")) {
            let match = command.match(/FOR ([A-Za-z]+) = ([0-9]+) TO ([0-9]+)/);
            if (!match) return "Syntax Error in FOR loop";
            let varName = match[1];
            let start = parseInt(match[2]);
            let end = parseInt(match[3]);
            this.variables[varName] = start;
            this.lines["FOR_LOOP"] = { varName, end, startLine: this.currentLine };
        }
        else if (command.startsWith("NEXT")) {
            if (this.lines["FOR_LOOP"]) {
                let loop = this.lines["FOR_LOOP"];
                this.variables[loop.varName]++;
                if (this.variables[loop.varName] <= loop.end) {
                    this.currentLine = loop.startLine - 1;
                } else {
                    delete this.lines["FOR_LOOP"];
                }
            }
        }
        else {
            return `Unknown command: ${command}`;
        }
    }

    evaluateExpression(expression) {
        expression = expression.replace(/"/g, "").trim();
        expression = expression.replace(/\b[A-Za-z_][A-Za-z0-9_]*\b/g, match =>
            this.variables[match] !== undefined ? this.variables[match] : "undefined"
        );

        if (expression.includes("undefined")) {
            return `Error: Undefined variable in expression '${expression}'`;
        }

        try {
            return eval(expression);
        } catch {
            return `Error: Invalid expression '${expression}'`;
        }
    }

    evaluateCondition(condition) {
        try {
            return eval(condition);
        } catch {
            return false;
        }
    }
}

export default JSBasic;


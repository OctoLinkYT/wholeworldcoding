// Terminal object to manage different modes
const Terminal = {
  outputElement: null,
  inputElement: null,
  mode: null,
  currentDialogIndex: 0,
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedOption: null,

  init: function() {
    this.outputElement = document.getElementById('output');
    this.inputElement = document.getElementById('input');
    this.inputElement.addEventListener('keydown', this.handleInput.bind(this));
    this.setMode('DIALOG');
    this.render();
  },

  setMode: function(mode) {
    this.mode = mode;
    this.render();
  },

  render: function() {
    this.clearScreen();
    switch (this.mode) {
      case 'DIALOG':
        this.renderDialog();
        break;
      case 'MENU':
        this.renderMenu();
        break;
      case 'TEXT':
        this.renderText();
        break;
    }
  },

  renderDialog: function() {
    const dialogText = [
      "Welcome to the terminal interface.",
      "Press ENTER to continue...",
    ];
    for (let i = 0; i <= this.currentDialogIndex; i++) {
      this.printLine(dialogText[i]);
    }
  },

  renderMenu: function() {
    this.printLine("Select an option:");
    for (let i = 0; i < this.options.length; i++) {
      if (i === this.selectedOption) {
        this.printLine(`[${this.options[i]}]`, true);
      } else {
        this.printLine(this.options[i]);
      }
    }
  },

  renderText: function() {
    this.printLine("Enter your text:");
    this.printLine(this.inputElement.value);
  },

  printLine: function(text, highlight = false) {
    const line = document.createElement('div');
    line.textContent = text;
    if (highlight) {
      line.classList.add('highlight');
    }
    this.outputElement.appendChild(line);
  },

  clearScreen: function() {
    this.outputElement.innerHTML = '';
  },

  handleInput: function(event) {
    if (event.key === 'Enter') {
      switch (this.mode) {
        case 'DIALOG':
          if (this.currentDialogIndex < 1) {
            this.currentDialogIndex++;
            this.render();
          } else {
            this.setMode('MENU');
          }
          break;
        case 'MENU':
          this.selectedOption = (this.selectedOption + 1) % this.options.length;
          this.render();
          break;
        case 'TEXT':
          // Handle text input mode
          // For simplicity, just display the entered text
          this.renderText();
          break;
      }
      event.preventDefault();
    }
  }
};

// Initialize the terminal
Terminal.init();

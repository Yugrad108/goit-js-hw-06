class StringBuilder {
    // Приватное свойство value
  #value;
    // Конструктор принимает начальное значение строки
  constructor(initialValue) {
    this.#value = initialValue; // Приватное свойство для хранения строки
  }

  // Метод для получения текущего значения
  getValue() {
    return this.#value; // Возвращаем текущее значение приватного свойства
  }

  // Метод для добавления строки в конец
  padEnd(str) {
    this.#value += str; // Добавляем строку в конец текущего значения через оператор +=
    this.#value = this.#value + str; // Добавляем строку в конец текущего значения более гибче если потом надо будет добавлять еще что-то.
  }

  // Метод для добавления строки в начало
  padStart(str) {
    this.#value = str + this.#value; // Добавляем строку в начало текущего значения
  }

  // Метод для добавления строки с обеих сторон
  padBoth(str) {
    this.padStart(str); // Сначала добавляем строку в начало
    this.padEnd(str);   // Затем добавляем строку в конец
  }
}

// Код для проверки работы класса
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

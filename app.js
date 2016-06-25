var registeredActions = [];
if (typeof App !== 'undefined') {
  registeredActions = App;
}

var App = {
  /**
   * Handle already registered actions.
   * 
   * @param  {String} id   Element ID
   * @param  {String} text Text to show
   */
  init: function (id, text) {
    document.getElementById(id).innerHTML = text;
  },

  /**
   * Implement array's push method to handle push calls.
   *
   * @param  {Array|Function} item Method call. [method_name, args...]
   */
  push: function (item) {
    if (typeof item === 'function') {
      item()
    } else {
      var functionName = item.shift()
      App[functionName].apply(null, item)
    }
  },

  /**
   * Handle already registered actions.
   * 
   * @param  {Array} array History of calls
   */
  _processHistory: function (array) {
    for (var i = 0; i < array.length; i++) {
      App.push(array[i])
    }
  }
} 

App._processHistory(registeredActions)

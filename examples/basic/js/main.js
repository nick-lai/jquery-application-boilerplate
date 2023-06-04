(function ($, App) {
  $(document).ready(function () {
    const app = new App({
      // dependencies:
      // jQuery is a fast, small, and feature-rich JavaScript library.
      // https://github.com/jquery/jquery
      jQuery: window.jQuery,
      // Elegant, responsive, flexible and lightweight notification plugin with no dependencies.
      // https://github.com/marcelodolza/iziToast
      iziToast: window.iziToast,
    });

    // Show welcome message
    app.showWelcomeMessage();
  });
}(window.jQuery, function App({
  // destructuring assignments for dependencies
  jQuery: $, // assign the jQuery property to a local variable named `$`
  iziToast,
}) {
  // Initialize app instance
  init(this);

  /**
   * Initialize app
   *
   * @param {App} app
   */
  function init(app) {
    // Initialize the app's nodes
    initNodes(app);
    // Initialize the app's methods
    initMethods(app);
    // Initialize the app's events
    initEvents(app);
  }

  /**
   * Initialize the app's nodes
   *
   * @param {App} app
   */
  function initNodes(app) {
    // The app's root element
    app.$el = $('#app');

    app.nodes = {
      // root element
      $root: app.$el,
      // #show-welcome-message-button
      $showWelcomeMessageButton: app.$el.find('#show-welcome-message-button'),
      // #show-current-time-button
      $showCurrentTimeButton: app.$el.find('#show-current-time-button'),
    };
  }

  /**
   * Initialize the app's methods
   *
   * @param {App} app
   */
  function initMethods(app) {
    app.methods = {
      /**
       * Show welcome message
       */
      showWelcomeMessage() {
        iziToast.info({
          title: 'Hi, there!',
          message: 'Welcome!',
          position: 'topCenter',
          transitionIn: 'flipInX',
          transitionOut: 'flipOutX',
        });
      },

      /**
       * Show current time
       */
      showCurrentTime() {
        iziToast.success({
          title: 'Current Time:',
          message: (new Date()).toLocaleString(),
          position: 'bottomCenter',
          transitionIn: 'bounceInRight',
        });
      },
    };

    // Add references to the app's methods on the app instance
    // app.myMethod() --> app.methods.myMethod()
    $.extend(app, app.methods);
  }

  /**
   * Initialize the app's events
   *
   * @param {App} app
   */
  function initEvents(app) {
    const nodes = app.nodes;

    nodes.$showWelcomeMessageButton.on('click', function () {
      // Show welcome message
      app.showWelcomeMessage();
    });

    nodes.$showCurrentTimeButton.on('click', function () {
      // Show current time
      app.showCurrentTime();
    });
  }
}));

Router.configure({
  layoutTemplate: 'layout',

  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  },

  onBeforeAction: function() {
    $('meta[name^="description"]').remove();
  },

  onAfterAction: function() {
    $(document).scrollTop(0);
  }
});

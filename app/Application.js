/**
 * @author Isnur MSM
 *
 */

Ext.define('DASHBOARD.Application', {
  extend: 'Ext.app.Application',
  controllers: [
    'MainController'
  ],
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
        xtype : 'index'
      }]
    });
  }
});

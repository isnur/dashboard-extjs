/**
 * @author Isnur MSM
 *
 */

Ext.define('DASHBOARD.view.index', {
  extend: 'Ext.panel.Panel',
  xtype: 'index',
  itemId: 'index',
  layout : {
    type: 'border',
    pack: 'start',
    align: 'stretch'
  },
  items: [{
    region: 'north',
    xtype: 'container',
    style: 'margin: 0px; padding: 0px;',
    height: 40,
    html: '<table style="text-align: center; border-collapse: collapse; width:100%"><tr><td width="100px"><img src="assets/images/Isnur.com.png" style="padding: 5px; width: 100%;"></td><td align="left" style="padding-left: 10px;"><b><font size="5" color="#374da1">DASHBOARD </font><font id="tahun" size="5" color="#ed1313"></font></b></td></tr></table>',
    listeners: {
      afterrender: function () {
        var tahun = new Date().getFullYear();
        $("#tahun").html(tahun);
      }
    }
  },{
    title: 'South Region is resizable',
    region: 'south',
    xtype: 'container',
    height: 30,
    style: 'width: 100%; text-align: center; padding: 7px;',
    html: 'Copyright <a href="http://isnur.com">Isnur.com</a>'
  }, {
    title: 'MENU',
    region:'west',
    xtype: 'panel',
    bodyStyle: 'border: none; background-color: #fafafa;',
    width: 150,
    collapsible: true,
    id: 'west-region-container',
    layout: 'fit',
    items: [{
      xtype: 'menu',
      width: 100,
      plain: true,
      floating: false,
      id: 'menuId',
      items: [{
        text: 'Button',
      }, {
        text: 'Chart'
      }, {
        text: 'Form'
      }, {
        text: 'Grid'
      }, {
        text: 'Layout'
      }]
    }]
  }, {
    region: 'center',
    xtype: 'panel',
    bodyStyle: 'border: none;',
    layout: 'fit'
  }]
});

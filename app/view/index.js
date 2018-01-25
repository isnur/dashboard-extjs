/**
 * @author Isnur MSM
 *
 */

Ext.define('DASHBOARD.view.index', {
  extend: 'Ext.panel.Panel',
  title: '<table style="text-align: center; border-collapse: collapse; width:100%"><tr><td><img src="assets/images/Isnur.com.png" style="padding:  5px; width: 111px;"></td><td align="left" style="padding-left: 10px;"><b><font size="5">DASHBOARD</font><font id="tahun" size="5" color="#ed1313"></font></b></td></tr></table>',
  xtype: 'index',
  itemId: 'index',
  layout : {
    type: 'border',
    pack: 'start',
    align: 'stretch'
  },
  items: [{
    title: 'South Region is resizable',
    region: 'south',
    xtype: 'panel',
    height: 100,
    split: true,
    margin: '0 5 5 5'
  }, {
    title: 'West Region is collapsible',
    region:'west',
    xtype: 'panel',
    margin: '5 0 0 5',
    width: 200,
    collapsible: true,
    id: 'west-region-container',
    layout: 'fit'
  }, {
    title: 'Center Region',
    region: 'center',
    xtype: 'panel',
    layout: 'fit',
    margin: '5 5 0 0'
  }]
});

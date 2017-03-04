/**
 * Created by vardang on 2/28/17.
 */

var navpanel = new Ext.tree.TreeLoader({
    dataUrl: 'http://localhost:4567/'
});

var treePanel = new Ext.tree.TreePanel({
    id: 'tree-panel',
    title: 'Navigation',
    region: 'west',
    width: 200,
    minSize: 150,
    autoScroll: true,
    margins: '0 5 0 0',
    rootVisible: false,
    lines: false,
    useArrows: true,

    loader: navpanel,

    root: new Ext.tree.AsyncTreeNode()
});

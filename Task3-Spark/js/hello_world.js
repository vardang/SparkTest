/**
 * Created by vardang on 2/28/17.
 */

var tpl = Ext.create('Ext.Template', [
    'Hello {firstName} {lastName}!',
    ' Nice to meet you!'
]);
var formPanel = Ext.create('Ext.form.FormPanel', {
    itemId: 'formPanel',
    frame: true,
    layout: 'anchor',
    defaultType: 'textfield',
    defaults: {
        anchor: '-10',
        labelWidth: 65
    },
    items: tree
});


var store = Ext.create('Ext.data.TreeStore', {
    root: {
        text: 'Root Node',
        expanded: true,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 2',
                leaf: true
            },
            {
                text: 'Child 3',
                children: [
                    {
                        text: 'Grand Child 1',
                        children: [
                            {
                                text: 'Grand... you get the point',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        ]
    }
});


Ext.onReady(function () {
    Ext.create('Ext.window.Window',{
        title
            : 'Our first tree',
        layout
            : 'fit',
        autoShow
            : true,
        height
            : 180,
        width
            : 220,
        items
            : {
            xtype
                : 'treepanel',
            border
                : false,
            store
                : store,
            rootVisible : true
        }
    });

    // Ext.create('Ext.window.Window', {
    //     height: 125,
    //     width: 200,
    //     closable: false,
    //     title: 'Input needed.',
    //     border: false,
    //     layout: 'fit',
    //     items: formPanel
    // }).show();
});


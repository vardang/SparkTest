/**
 * Created by vardang on 3/1/17.
 */

var store = Ext.create('Ext.data.TreeStore', {
    autoSync: true,
    proxy: {
        type: 'jsonp',
      //  url: 'http://extjsinaction.com/treeData.php'
        url: 'http://localhost:4567/',
        reader: {
            type: 'json',
            root: 'Children'
        },
        hasMany: {
            model: 'Children',
            name: 'Children'
        },
        belongsTo: 'Children'
    },
    root: {
        expanded: true
    }

});



Ext.onReady(function () {
    Ext.define('Model', {
        extend: 'Ext.data.Model',
        fields: [
            {
                name: 'text',
                type: 'string'
            }],

        proxy: {
            type: 'ajax',
            url: 'http://localhost:4567/books',
            reader: {
                type: 'json',
                root: 'Root'
            }
        },
        hasMany: {
            model: 'Children',
            name: 'Children'
        },
        belongsTo: 'Children'
    });

    var store = Ext.create('Ext.data.TreeStore', {
        model: 'Model',
        autoLoad: true,
        root: {
            expanded: true
        }

    });

    var tree = Ext.create('Ext.tree.Panel', {
        title: 'Simple Tree',
        width: 200,
        height: 150,
        store: store,
        renderTo: Ext.getBody()
    });

    console.log(store);

});

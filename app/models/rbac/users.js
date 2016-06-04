// users.js
'use strict';

var users = orm.Model.extend({
  tableName: 'users',

  accounts: function() {
      return this.belongsTo(Account);
  },
  groups: function() {
      return this.belongsToMany(Group, 'link_groups_users');
  }
});

module.exports = orm.model("users", users);

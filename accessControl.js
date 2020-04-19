var roles = {
 admin: {
     homepage: "/panel",
     actions: ["can_create_customer","can_view_customer_list"]
 },
 sales: {
     homepage: "/sales/panel",
     actions: ["can_view_customer_profile"]
 }
};

module.exports = roles;
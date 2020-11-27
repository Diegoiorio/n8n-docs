(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1151:function(e,t,o){"use strict";o.r(t);var r=o(25),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"clockify"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clockify"}},[e._v("#")]),e._v(" Clockify")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://clockify.me/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clockify"),r("OutboundLink")],1),e._v(" is a free time tracker and timesheet app for tracking work hours across projects.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Clockify/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Project")]),e._v(" "),r("ul",[r("li",[e._v("Create a project")]),e._v(" "),r("li",[e._v("Delete a project")]),e._v(" "),r("li",[e._v("Get a project")]),e._v(" "),r("li",[e._v("Get all projects")]),e._v(" "),r("li",[e._v("Update a project")])])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Tag")]),e._v(" "),r("ul",[r("li",[e._v("Create a tag")]),e._v(" "),r("li",[e._v("Delete a tag")]),e._v(" "),r("li",[e._v("Get all tags")]),e._v(" "),r("li",[e._v("Update a tag")])])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Time Entry")]),e._v(" "),r("ul",[r("li",[e._v("Create a time entry")]),e._v(" "),r("li",[e._v("Delete a time entry")]),e._v(" "),r("li",[e._v("Get a time entry")]),e._v(" "),r("li",[e._v("Update a time entry")])])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create a project, tag, and time entry in Clockify. It also allows you to update the time entry in Clockify. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/701",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Clockify")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(618),alt:"A workflow with the Clockify node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-clockify-node-create-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-clockify-node-create-project"}},[e._v("#")]),e._v(" 2. Clockify node (create: project)")]),e._v(" "),r("p",[e._v("This node will create a private project with a custom color. It will also add a note to the project in Clockify.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Clockify node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Clockify/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select the "),r("em",[r("strong",[e._v("Workspace ID")])]),e._v(" from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter the name of the project in the "),r("em",[r("strong",[e._v("Project Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Color' from the dropdown list.")]),e._v(" "),r("li",[e._v("Select the color from the color-picker or enter the hexadecimal value of the color in the "),r("em",[r("strong",[e._v("Color")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Is Public' from the dropdown list.")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Is Public")])]),e._v(" to false.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Note' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter the note in the "),r("em",[r("strong",[e._v("Note")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new private project called "),r("code",[e._v("n8n-docs")]),e._v(". This project has a custom color "),r("code",[e._v("#0000FF")]),e._v(" and a note "),r("code",[e._v("For n8n-docs")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(619),alt:"Using the Clockify node to create project"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_3-clockify1-node-create-tag"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-clockify1-node-create-tag"}},[e._v("#")]),e._v(" 3. Clockify1 node (create: tag)")]),e._v(" "),r("p",[e._v("This node will create a new tag in Clockify.")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Tag' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select the "),r("em",[r("strong",[e._v("Workspace ID")])]),e._v(" from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter the name of the tag in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node creates a new tag called "),r("code",[e._v("docs")]),e._v(" in the n8n workspace in Clockify.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(620),alt:"Using the Clockify node to create a tag"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_4-clockify2-node-create-timeentry"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-clockify2-node-create-timeentry"}},[e._v("#")]),e._v(" 4. Clockify2 node (create: timeEntry)")]),e._v(" "),r("p",[e._v("This node creates a new time entry in Clockify with a description. It also adds the tag that we created in the previous step to the time entry.")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Time Entry' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select the "),r("em",[r("strong",[e._v("Workspace ID")])]),e._v(" from the dropdown list.")]),e._v(" "),r("li",[e._v("Select a start date and time for the "),r("em",[r("strong",[e._v("Start")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Description' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter a description in the "),r("em",[r("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'End' from the dropdown list.")]),e._v(" "),r("li",[e._v("Select a end date and time for the "),r("em",[r("strong",[e._v("End")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Tag IDs' from the dropdown list.")]),e._v(" "),r("li",[e._v("Select the tag that you created in the previous step from the "),r("em",[r("strong",[e._v("Tag IDs")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node creates a new time entry with a description and adds the tag that was created in the previous node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(621),alt:"Using the Clockify node to create a time entry"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_5-clockify3-node-update-timeentry"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_5-clockify3-node-update-timeentry"}},[e._v("#")]),e._v(" 5. Clockify3 node (update: timeEntry)")]),e._v(" "),r("p",[e._v("This node will add the project to the time entry that was created by the Clockify node.")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Time Entry' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select the "),r("em",[r("strong",[e._v("Workspace ID")])]),e._v(" from the dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Time Entry ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Clockify2 > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Clockify2"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Project ID' from the dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Project ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Clockify > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Clockify"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node has updated the time entry by adding the project ID we created in the Clockify node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(622),alt:"Using the Clockify node to update the time entry"}})])])}),[],!1,null,null,null);t.default=i.exports},618:function(e,t,o){e.exports=o.p+"assets/img/workflow.4e3425cb.png"},619:function(e,t,o){e.exports=o.p+"assets/img/Clockify_node.f56d9760.png"},620:function(e,t,o){e.exports=o.p+"assets/img/Clockify1_node.1df2dda2.png"},621:function(e,t,o){e.exports=o.p+"assets/img/Clockify2_node.0300d505.png"},622:function(e,t,o){e.exports=o.p+"assets/img/Clockify3_node.d353d29c.png"}}]);
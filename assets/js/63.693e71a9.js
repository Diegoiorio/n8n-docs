(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1233:function(e,t,s){"use strict";s.r(t);var a=s(25),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sendy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendy"}},[e._v("#")]),e._v(" Sendy")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://sendy.co",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sendy"),a("OutboundLink")],1),e._v(" is a self-hosted email newsletter application that lets you send trackable emails via AWS SES.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Sendy/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Campaign")]),e._v(" "),a("ul",[a("li",[e._v("Create a campaign")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Subscriber")]),e._v(" "),a("ul",[a("li",[e._v("Add a subscriber to a list")]),e._v(" "),a("li",[e._v("Count subscribers")]),e._v(" "),a("li",[e._v("Delete a subscriber from a list")]),e._v(" "),a("li",[e._v("Unsubscribe a user from a list")]),e._v(" "),a("li",[e._v("Get the status of a subscriber")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to add a subscriber to a list and create and send a campaign using the Sendy node. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/727",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Sendy")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(814),alt:"A workflow with the Sendy node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-sendy-node-add-subscriber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-sendy-node-add-subscriber"}},[e._v("#")]),e._v(" 2. Sendy node (add: subscriber)")]),e._v(" "),a("p",[e._v("This node will add a subscriber to a list in Sendy. If you don't already have a list in Sendy, make sure to create one.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Sendy node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Sendy/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Enter the subscriber's email address in the "),a("em",[a("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("In your Sendy dashboard, click on 'View all lists' and copy the ID of the list to which you want to add the subscriber. Paste this list ID in the List ID field in n8n.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" button and select 'Name'.")]),e._v(" "),a("li",[e._v("Enter the name of the subscriber in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node adds a subscriber with their name to the list that we specify.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(815),alt:"Using the Sendy node to add a subscriber to a list"}})]),e._v(" "),a("h3",{attrs:{id:"_3-sendy1-node-create-campaign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-sendy1-node-create-campaign"}},[e._v("#")]),e._v(" 3. Sendy1 node (create: campaign)")]),e._v(" "),a("p",[e._v("This node will create a campaign with the title 'Welcome to n8n' and send it to the subscribers of the list that we specify.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Campaign' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the name of the sender in the "),a("em",[a("strong",[e._v("From Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the email address of the sender in the "),a("em",[a("strong",[e._v("From Email")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the email address where the subscribers can reply to in the "),a("em",[a("strong",[e._v("Reply To")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the title of the campaign in the "),a("em",[a("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the subject of the email in the "),a("em",[a("strong",[e._v("Subject")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the HTML snippet of the email campaign in the "),a("em",[a("strong",[e._v("HTML Text")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Send Campaign")])]),e._v(" to true.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" button and select 'List IDs'.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("List IDs")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Sendy > Parameters > listId. You can also add the following expression: "),a("code",[e._v('{{$node["Sendy"].parameter["listId"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node creates the campaign with the title "),a("code",[e._v("Welcome to n8n")]),e._v(" and sends it to the list that we specify.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(816),alt:"Using the Sendy node to create and send a campaign to a list"}})])])}),[],!1,null,null,null);t.default=n.exports},814:function(e,t,s){e.exports=s.p+"assets/img/workflow.dd888f60.png"},815:function(e,t,s){e.exports=s.p+"assets/img/Sendy_node.af60d47c.png"},816:function(e,t,s){e.exports=s.p+"assets/img/Sendy1_node.7847d52b.png"}}]);
jQuery.sap.declare("chanzo.Component");
jQuery.sap.require("sap.m.messageBox");
// jQuery.sap.require("sap.m.routig.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("chanzo.Component", {
	metadata: {
		name :"Component Name",
		dependencies: {
			libs: ["sap.m"]
		}
	},

	createContent: function(){
		return new sap.m.VBox({
			items : [
				new sap.m.Input("nameField", {
		 		placeholder: "What is your name?"

		 		}),
				new sap.m.Button({
				text: "Hello",
				icon: "sap-icon://accept",
				press: function(){
					var sName = sap.ui.getCore().byId("nameField").getValue();
					sap.m.messageBox.alert("Hello " +sName);
					}
				})
			]
		})

	}

			// jQuery.sap.require("sap.m.messageBox")

		//  new sap.m.Input("nameField", {
		//  	placeholder: "What is your name?"

		//  }).placeAt("content");

		// 	new sap.m.Button({
		// 		text: "Hello",
		// 		icon: "sap-icon://accept",
		// 		press: function(){
		// 			var sName = sap.ui.getCore().byId("nameField").getValue();
		// 			sap.m.messageBox.alert("Hello " +sName);
		// 		}
		// 	}).placeAt("content");

});


